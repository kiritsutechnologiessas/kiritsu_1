import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Code2, Cloud, Lock, Server, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code2, title: 'Desarrollo de Software',
    desc: 'Aplicaciones web, móviles (Android/iOS), portales corporativos, integración de APIs y automatización de procesos.',
    tags: ['.NET', 'Java', 'Python', 'Node.js', 'React', 'Flutter'],
  },
  {
    icon: Cloud, title: 'Consultoría y Servicios TI',
    desc: 'Transformación digital, arquitectura empresarial, servicios cloud, mesa de ayuda, outsourcing y analítica de datos.',
    tags: ['AWS', 'Azure', 'GCP', 'Data Analytics', 'Outsourcing', 'Mesa de ayuda'],
  },
  {
    icon: Lock, title: 'Ciberseguridad Avanzada',
    desc: 'Ethical hacking, monitoreo SOC, gestión de identidades IAM, análisis forense y gestión de riesgos.',
    tags: ['ISO 27001', 'NIST', 'COBIT', 'ITIL', 'SOC', 'IAM'],
  },
  {
    icon: Server, title: 'Comercialización de Tecnología',
    desc: 'Venta y alquiler de infraestructura, datacenter, networking, telecomunicaciones y equipos de productividad.',
    tags: ['Datacenter', 'Networking', 'Telecom', 'Servidores', 'Alquiler', 'Productividad'],
  },
];
const ticker = ['DELL', 'HP', 'LENOVO', 'FORTINET', 'AWS', 'MICROSOFT', 'CISCO', 'HIKVISION'];
const ServicesPage = () => (
  <>
    <Helmet><title>Servicios — KIRITSU TECHNOLOGIES</title></Helmet>
    <section className="relative border-b border-white/10 py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-[72rem] px-5">
        <span className="text-xs font-medium tracking-widest text-primary uppercase">Líneas de negocio</span>
        <h1 className="font-display text-4xl sm:text-5xl mt-4 max-w-3xl">Nuestros <span className="text-gradient">servicios</span></h1>
        <p className="mt-5 text-muted-foreground max-w-2xl">Cuatro líneas especializadas que cubren todo el ciclo de vida tecnológico de tu organización.</p>
      </div>
    </section>

    <section className="mx-auto max-w-[72rem] px-5 py-20 space-y-8">
      {services.map((s, i) => (
        <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.05 }}
          className={`glass-card rounded-3xl p-8 sm:p-10 grid gap-8 md:grid-cols-[auto_1fr] items-start ${i % 2 ? 'md:bg-gradient-to-l' : 'md:bg-gradient-to-r'} from-primary/5 to-transparent`}>
          <span className="grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary glow-border">
            <s.icon className="w-8 h-8 text-white" />
          </span>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-display text-xs text-muted-foreground">0{i + 1}</span>
              <h2 className="font-display text-2xl sm:text-3xl">{s.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>

    <section className="mx-auto max-w-[72rem] px-5 pb-24 text-center">
      <p className="text-muted-foreground mb-6">¿Buscas equipos, licencias o paquetes de servicio?</p>
      <Link to="/tienda">
        <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white font-semibold gap-2">
          Visitar el E-commerce <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>
      
    </section>

    <section className="relative border-b border-white/10 py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-[72rem] px-5">
        <span className="text-xs font-medium tracking-widest text-primary uppercase">Ecosistema Comercial</span>
        <h1 className="font-display text-4xl sm:text-5xl mt-4 max-w-3xl">Nuestras <span className="text-gradient">Marcas</span></h1>
        <p className="mt-5 text-muted-foreground max-w-2xl">Soluciones y firmas especializadas diseñadas para impulsar el crecimiento y la transformación de tu organización.</p>
      </div>
    </section>
    
    {/* TICKER */}
    <div className="border-y border-white/10 bg-[hsl(240_30%_6%)] py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {[...ticker, ...ticker].map((t, i) => (
          <span key={i} className="mx-8 font-display text-sm tracking-widest text-muted-foreground flex items-center gap-8">
            {t} <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  </>
);

export default ServicesPage;
