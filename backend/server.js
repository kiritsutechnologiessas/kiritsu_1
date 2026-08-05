require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Addi API Configuration
const ADDI_API_URL = 'https://channels-public-api.addi.com';
const ADDI_CLIENT_ID = process.env.ADDI_CLIENT_ID;
const ADDI_CLIENT_SECRET = process.env.ADDI_CLIENT_SECRET;
const ADDI_ALLY_SLUG = process.env.ADDI_ALLY_SLUG;
const ADDI_NOTIFICATION_USER = process.env.ADDI_NOTIFICATION_USER;
const ADDI_NOTIFICATION_PASSWORD = process.env.ADDI_NOTIFICATION_PASSWORD;

// Store JWT token (in production, use Redis or similar)
let jwtToken = null;
let tokenExpiry = null;

// Get JWT token from Addi Auth
async function getAddiToken() {
  try {
    // Check if token is still valid
    if (jwtToken && tokenExpiry && Date.now() < tokenExpiry) {
      return jwtToken;
    }

    const response = await axios.post('https://auth.addi.com/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: ADDI_CLIENT_ID,
      client_secret: ADDI_CLIENT_SECRET,
      audience: 'https://channels-public-api.addi.com'
    });

    jwtToken = response.data.access_token;
    // Token expires in 1 hour (3600 seconds), set expiry 5 minutes before
    tokenExpiry = Date.now() + (response.data.expires_in - 300) * 1000;
    
    return jwtToken;
  } catch (error) {
    console.error('Error getting Addi token:', error.response?.data || error.message);
    throw new Error('Failed to get authentication token');
  }
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Get Addi config endpoint
app.get('/api/addi/config', async (req, res) => {
  try {
    const { amount } = req.query;
    
    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    const response = await axios.get(
      `${ADDI_API_URL}/allies/${ADDI_ALLY_SLUG}/config?requestedamount=${amount}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error getting Addi config:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: 'Failed to get config',
      details: error.response?.data || error.message
    });
  }
});

// Create Addi transaction endpoint
app.post('/api/addi/create-transaction', async (req, res) => {
  try {
    const { amount, customerEmail, customerName, customerPhone, orderId } = req.body;

    if (!amount || !customerEmail || !customerName) {
      return res.status(400).json({ 
        error: 'Missing required fields: amount, customerEmail, customerName' 
      });
    }

    // Get JWT token
    const token = await getAddiToken();

    // Create transaction payload
    const transactionPayload = {
      amount: amount,
      currency: 'COP',
      customer: {
        email: customerEmail,
        name: customerName,
        phone: customerPhone || '',
      },
      orderId: orderId || `order_${Date.now()}`,
      callbackUrl: `${req.protocol}://${req.get('host')}/api/addi/webhook`,
      redirectionUrl: `${req.protocol}://${req.get('host')}/payment/success`
    };

    // Call Addi API to create transaction
    const response = await axios.post(
      `${ADDI_API_URL}/allies/${ADDI_ALLY_SLUG}/online-loan-application`,
      transactionPayload,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        maxRedirects: 0, // Don't follow redirects automatically
        validateStatus: (status) => status === 301 // Expect 301 redirect
      }
    );

    // Extract redirect URL from Location header
    const redirectUrl = response.headers.location;

    if (!redirectUrl) {
      throw new Error('No redirect URL received from Addi');
    }

    res.json({
      success: true,
      redirectUrl: redirectUrl,
      orderId: transactionPayload.orderId
    });
  } catch (error) {
    console.error('Error creating Addi transaction:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: 'Failed to create transaction',
      details: error.response?.data || error.message
    });
  }
});

// Webhook endpoint for Addi notifications
app.post('/api/addi/webhook', async (req, res) => {
  try {
    const { orderId, status, approvedAmount } = req.body;

    console.log('Webhook received:', { orderId, status, approvedAmount });

    // Validate webhook credentials (Basic Auth)
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Verify notification credentials
    const expectedAuth = Buffer.from(
      `${ADDI_NOTIFICATION_USER}:${ADDI_NOTIFICATION_PASSWORD}`
    ).toString('base64');

    if (authHeader !== `Basic ${expectedAuth}`) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Process the webhook notification
    // Here you would update your database with the payment status
    console.log(`Order ${orderId} status updated to: ${status}`);

    // Respond with the same body received (Addi requirement)
    res.status(200).json(req.body);
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ error: 'Failed to process webhook' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Addi integration configured for ally: ${ADDI_ALLY_SLUG}`);
});
