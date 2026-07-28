import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Layout from '@/components/Layout';
import { CartProvider } from '@/hooks/useCart';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import StorePage from '@/pages/StorePage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import AccountPage from '@/pages/AccountPage';
import SuccessPage from '@/pages/SuccessPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/tienda" element={<StorePage />} />
              <Route path="/product/:id" element={<div className="mx-auto max-w-[90rem] px-5 py-16"><ProductDetailPage /></div>} />
              <Route path="/cuenta" element={<AccountPage />} />
              <Route path="/contactanos" element={<ContactPage />} />
              <Route path="/success" element={<SuccessPage />} />
            </Route>
          </Routes>
          <Toaster />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
