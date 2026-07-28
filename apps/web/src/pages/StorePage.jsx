import React from 'react';
import { Helmet } from 'react-helmet';
import ProductsList from '@/components/ProductsList';

const StorePage = () => (
  <>
    <Helmet><title>E-commerce — KIRITSU TECHNOLOGIES</title></Helmet>
    <section className="relative border-b border-white/10 py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-[90rem] px-5">
        <span className="text-xs font-medium tracking-widest text-primary uppercase">Tienda tecnológica</span>
        <h1 className="font-display text-4xl sm:text-5xl mt-4">Catálogo <span className="text-gradient">tecnológico</span></h1>
        <p className="mt-5 text-muted-foreground max-w-2xl">
          Infraestructura de networking, servidores, software, licencias y paquetes de consultoría.
          Compra en línea con pago seguro y gestión de inventario en tiempo real.
        </p>
      </div>
    </section>
    <section className="mx-auto max-w-[90rem] px-5 py-16">
      <ProductsList />
    </section>
  </>
);

export default StorePage;
