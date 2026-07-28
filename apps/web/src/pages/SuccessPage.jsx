import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuccessPage = () => (
  <>
    <Helmet><title>Compra exitosa — KIRITSU TECHNOLOGIES</title></Helmet>
    <section className="min-h-[70vh] grid place-items-center px-5 text-center">
      <div className="glass-card rounded-3xl p-12 max-w-md glow-border">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
        <h1 className="font-display text-3xl mb-3">¡Gracias por tu compra!</h1>
        <p className="text-muted-foreground mb-8">Tu pedido fue procesado correctamente. Recibirás un correo con los detalles.</p>
        <Link to="/tienda"><Button className="bg-gradient-to-r from-primary to-secondary text-white font-semibold">Seguir comprando</Button></Link>
      </div>
    </section>
  </>
);

export default SuccessPage;
