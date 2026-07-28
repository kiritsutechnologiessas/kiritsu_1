import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShoppingCart from '@/components/ShoppingCart';

const Layout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </div>
  );
};

export default Layout;
