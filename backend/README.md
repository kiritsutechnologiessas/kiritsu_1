# Backend para Integración de Pagos Addi

Este backend maneja la integración con Addi para procesar pagos a cuotas en el e-commerce de KIRITSU TECHNOLOGIES SAS.

## Configuración

### Variables de Entorno

El archivo `.env` contiene las credenciales de Addi:

```
ADDI_CLIENT_ID=y0BB56egtCxZE3Kr2fucNzhoUx0ynLhG
ADDI_CLIENT_SECRET=5y8K-gEwPJop6qM7_C0PjfyWrwt3HHjy4eAhfgiZR_VziFsKIMNRIzQhqwfaLJuA
ADDI_ALLY_SLUG=kiritsutechnologiessas-ecommerce
ADDI_NOTIFICATION_USER=lo6dqQSnLUfj5yUJ
ADDI_NOTIFICATION_PASSWORD=67_A-5q7wV0ieV6j4B6OZE*ut9tQdEcb
PORT=3001
NODE_ENV=development
```

## Instalación

```bash
cd backend
npm install
```

## Ejecución

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm start
```

## Endpoints

### Health Check
- **GET** `/health`
- Verifica que el servidor esté funcionando

### Crear Orden de Pago Addi
- **POST** `/api/addi/create-order`
- Crea una orden de pago en Addi

**Body:**
```json
{
  "amount": 1000000,
  "customerEmail": "cliente@example.com",
  "customerName": "Juan Pérez",
  "customerPhone": "+57 300 123 4567",
  "orderId": "order_123456"
}
```

**Response:**
```json
{
  "success": true,
  "order": {
    "id": "addi_order_id",
    "checkout_url": "https://checkout.addi.com/...",
    "status": "pending"
  }
}
```

### Webhook de Notificaciones
- **POST** `/api/addi/webhook`
- Recibe notificaciones de estado de pagos de Addi

**Headers:**
- `Authorization`: Basic auth con credenciales de notificación

### Consultar Estado de Orden
- **GET** `/api/addi/order/:orderId`
- Obtiene el estado actual de una orden de pago

## Flujo de Integración

1. El cliente selecciona "Pagar con Addi" en el checkout
2. El frontend envía los datos del pedido al endpoint `/api/addi/create-order`
3. El backend crea la orden en Addi y retorna la URL de checkout
4. El cliente es redirigido a Addi para completar el pago
5. Addi envía notificaciones al webhook `/api/addi/webhook` sobre el estado del pago
6. El backend procesa las notificaciones y actualiza el estado del pedido

## Seguridad

- Las credenciales de Addi están almacenadas en variables de entorno
- El webhook utiliza autenticación básica con las credenciales de notificación
- CORS está configurado para permitir solicitudes desde el frontend

## Notas

- El servidor corre en el puerto 3001 por defecto
- En producción, asegúrate de configurar las URLs de callback correctamente
- El webhook debe ser accesible públicamente para que Addi pueda enviar notificaciones
