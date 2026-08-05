import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-white/10 bg-[hsl(240_30%_5%)]">
    <div className="mx-auto max-w-[90rem] px-5 py-14 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary">
            <Cpu className="w-5 h-5 text-white" />
          </span>
          <span className="font-display text-lg">KIRITSU<span className="text-gradient"> TECHNOLOGIES</span></span>
        </div>
        <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
          KIRITSU TECHNOLOGIES S.A.S. — Empresa colombiana líder en transformación digital.
          Innovación • Tecnología • Futuro.
        </p>
      </div>
      <div>
        <h4 className="font-display text-sm mb-4 text-white">Navegación</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-white">Inicio</Link></li>
          <li><Link to="/servicios" className="hover:text-white">Servicios</Link></li>
          <li><Link to="/tienda" className="hover:text-white">E-commerce</Link></li>
          <li><Link to="/cuenta" className="hover:text-white">Mi cuenta</Link></li>
          <li><Link to="/contactanos" className="hover:text-white">Contáctanos</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-sm mb-4 text-white">Contacto</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Cartagena, Colombia</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> <a href="mailto:kiritsu@kiritsutechnologies.com" className="hover:text-white">kiritsu@kiritsutechnologies.com</a></li>
          <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href="https://wa.me/573017614184?text=Hola,%20quiero%20cotizar%20un%20producto" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">+57 3017614184 <MessageCircle className="w-5 h-5 text-green-500" /></a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10 py-5 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} KIRITSU TECHNOLOGIES S.A.S. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
