import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Cpu, Cloud, Sparkles, HeadphonesIcon, TrendingDown, ArrowRight, Code2, Server, Lock } from 'lucide-react';

const HERO = 'https://images.hostinger.com/6a0881c6-f1b1-47a4-addc-8d03f95a3946.png';

const values = [
  { icon: Sparkles, title: 'Soluciones personalizadas', desc: 'Tecnología a la medida de cada reto de negocio.' },
  { icon: Cpu, title: 'Última generación', desc: 'Stack moderno: cloud, IA, automatización y datos.' },
  { icon: ShieldCheck, title: 'Seguridad', desc: 'Protección bajo estándares ISO 27001 y NIST.' },
  { icon: HeadphonesIcon, title: 'Acompañamiento', desc: 'Soporte y mesa de ayuda en cada etapa.' },
  { icon: TrendingDown, title: 'Optimización de costos', desc: 'Eficiencia operativa e infraestructura óptima.' },
  { icon: Cloud, title: 'Escalabilidad', desc: 'Arquitecturas cloud que crecen contigo.' },
];

const lines = [
  { icon: Code2, title: 'Diseño y Desarrollo de Software' },
  { icon: Cloud, title: 'Consultoría y Servicios TI' },
  { icon: Lock, title: 'Ciberseguridad Avanzada' },
  { icon: Server, title: 'Comercialización de Tecnología' },
];

const ticker = ['INNOVACIÓN', 'TECNOLOGÍA', 'FUTURO', 'CLOUD', 'CIBERSEGURIDAD', 'SOFTWARE', 'DATA'];

const HomePage = () => (
  <>
    <Helmet><title>KIRITSU TECHNOLOGIES S.A.S. — Innovación, Tecnología, Futuro</title></Helmet>

    {/* HERO */}
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="relative mx-auto max-w-[72rem] px-5 py-28">
        <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary uppercase mb-6 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5">
          Innovación • Tecnología • Futuro
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
          Líderes en <span className="text-gradient">transformación digital</span> en Colombia
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Desarrollo de software, consultoría TI, ciberseguridad avanzada y comercialización de
          tecnología. Impulsamos tu empresa hacia el futuro con soluciones seguras y a la medida.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4">
          <Link to="/servicios">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white font-semibold gap-2 h-12 px-7 glow-border">
              Explorar servicios <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/tienda">
            <Button size="lg" variant="outline" className="h-12 px-7 border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold">
              Ir a la tienda
            </Button>
          </Link>
        </motion.div>
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

    {/* VALUE PROP */}
    <section className="mx-auto max-w-[72rem] px-5 py-24">
      <div className="max-w-2xl mb-14">
        <h2 className="font-display text-3xl sm:text-4xl mb-4">Nuestra propuesta de valor</h2>
        <p className="text-muted-foreground">Tecnología de última generación con foco en seguridad, eficiencia y resultados medibles.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v, i) => (
          <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform">
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 mb-4">
              <v.icon className="w-6 h-6 text-primary" />
            </span>
            <h3 className="font-semibold text-lg mb-1.5">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* BUSINESS LINES */}
    <section className="mx-auto max-w-[72rem] px-5 pb-24">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {lines.map((l) => (
          <Link key={l.title} to="/servicios" className="glass-card rounded-2xl p-6 group hover:glow-border transition-all">
            <l.icon className="w-8 h-8 text-secondary mb-4" />
            <h3 className="font-semibold leading-tight group-hover:text-gradient">{l.title}</h3>
            <span className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary">
              Ver más <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="mx-auto max-w-[72rem] px-5 pb-28">
      <div className="relative rounded-3xl overflow-hidden glow-border p-10 sm:p-16 text-center bg-gradient-to-br from-primary/15 to-secondary/15">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative">
          <h2 className="font-display text-3xl sm:text-4xl mb-4">¿Listo para transformar tu empresa?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Descubre nuestro catálogo de infraestructura, software y servicios especializados.
          </p>
          <Link to="/tienda">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white font-semibold gap-2 h-12 px-8">
              Explorar catálogo <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
