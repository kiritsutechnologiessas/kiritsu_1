/* import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Loader2, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import pocketbaseClient from '@/lib/pocketbaseClient';

const initialForm = { name: '', email: '', subject: '', message: '' };

const ContactPage = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await pocketbaseClient.send('/contact', { method: 'POST', body: form });
      setForm(initialForm);
      toast({ title: 'Mensaje enviado', description: 'Gracias por contactarnos. Te responderemos pronto.' });
    } catch (error) {
      toast({ variant: 'destructive', title: 'No fue posible enviar el mensaje', description: error?.message || 'Inténtalo nuevamente en unos minutos.' });
    } finally {
      setLoading(false);
    }
  };

  return <>
    <Helmet><title>Contáctanos — KIRITSU TECHNOLOGIES</title></Helmet>
    <section className="relative overflow-hidden border-b border-white/10 py-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-[72rem] px-5">
        <span className="text-xs font-medium tracking-widest text-primary uppercase">Estamos para ayudarte</span>
        <h1 className="font-display mt-4 text-4xl sm:text-5xl">Hablemos de tu próximo <span className="text-gradient">proyecto</span></h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">Cuéntanos lo que necesitas y nuestro equipo se pondrá en contacto contigo.</p>
      </div>
    </section>
    <section className="relative mx-auto grid max-w-[72rem] gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div className="space-y-5 pt-3">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary glow-border"><Mail className="h-7 w-7 text-white" /></span>
        <h2 className="font-display text-2xl">Contáctanos</h2>
        <p className="max-w-sm leading-relaxed text-muted-foreground">Déjanos tus datos y el contexto de tu solicitud. Recibiremos tu mensaje directamente para darte la mejor respuesta.</p>
        <a href="mailto:kiritsu@kiritsutechnologies.com" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors"><Mail className="h-4 w-4" /> kiritsu@kiritsutechnologies.com</a>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-3xl p-7 sm:p-9 glow-border">
        <form onSubmit={submit} className="space-y-5">
          <div className="grid gap-2"><Label htmlFor="contact-name">Nombre</Label><Input id="contact-name" name="name" required maxLength={120} value={form.name} onChange={updateField} className="border-white/15 bg-white/5" placeholder="Escribe tu nombre" /></div>
          <div className="grid gap-2"><Label htmlFor="contact-email">Correo</Label><Input id="contact-email" name="email" type="email" required maxLength={254} value={form.email} onChange={updateField} className="border-white/15 bg-white/5" placeholder="correo@empresa.com" /></div>
          <div className="grid gap-2"><Label htmlFor="contact-subject">Asunto</Label><Input id="contact-subject" name="subject" required maxLength={180} value={form.subject} onChange={updateField} className="border-white/15 bg-white/5" placeholder="¿En qué podemos ayudarte?" /></div>
          <div className="grid gap-2"><Label htmlFor="contact-message">Mensaje</Label><Textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={7} value={form.message} onChange={updateField} className="resize-y border-white/15 bg-white/5" placeholder="Cuéntanos sobre tu necesidad o proyecto" /></div>
          <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-primary to-secondary font-semibold text-white gap-2">{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}{loading ? 'Enviando...' : 'Enviar'}</Button>
        </form>
      </motion.div>
    </section>
  </>;
};

export default ContactPage;
*/
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Loader2, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const initialForm = { name: '', email: '', subject: '', message: '' };

const ContactPage = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ed0a3636-babe-4a53-8adb-1d72d5cea619',
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: 'Formulario Web KIRITSU',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setForm(initialForm);
        toast({
          title: 'Mensaje enviado',
          description: 'Gracias por contactarnos. Te responderemos pronto.',
        });
      } else {
        throw new Error(result.message || 'Error al procesar la solicitud');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'No fue posible enviar el mensaje',
        description: error?.message || 'Inténtalo nuevamente en unos minutos.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contáctanos — KIRITSU TECHNOLOGIES</title>
      </Helmet>
      <section className="relative overflow-hidden border-b border-white/10 py-24">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-[72rem] px-5">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            Estamos para ayudarte
          </span>
          <h1 className="font-display mt-4 text-4xl sm:text-5xl">
            Hablemos de tu próximo <span className="text-gradient">proyecto</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Cuéntanos lo que necesitas y nuestro equipo se pondrá en contacto contigo.
          </p>
        </div>
      </section>
      <section className="relative mx-auto grid max-w-[72rem] gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-5 pt-3">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary glow-border">
            <Mail className="h-7 w-7 text-white" />
          </span>
          <h2 className="font-display text-2xl">Contáctanos</h2>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Déjanos tus datos y el contexto de tu solicitud. Recibiremos tu mensaje directamente para darte la mejor respuesta.
          </p>
          <a
            href="mailto:kiritsu@kiritsutechnologies.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" /> kiritsu@kiritsutechnologies.com
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-7 sm:p-9 glow-border"
        >
          <form onSubmit={submit} className="space-y-5">
            <div className="grid gap-2">
              <Label htmlFor="contact-name">Nombre</Label>
              <Input
                id="contact-name"
                name="name"
                required
                maxLength={120}
                value={form.name}
                onChange={updateField}
                className="border-white/15 bg-white/5"
                placeholder="Escribe tu nombre"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-email">Correo</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={254}
                value={form.email}
                onChange={updateField}
                className="border-white/15 bg-white/5"
                placeholder="correo@empresa.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-subject">Asunto</Label>
              <Input
                id="contact-subject"
                name="subject"
                required
                maxLength={180}
                value={form.subject}
                onChange={updateField}
                className="border-white/15 bg-white/5"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-message">Mensaje</Label>
              <Textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={7}
                value={form.message}
                onChange={updateField}
                className="resize-y border-white/15 bg-white/5"
                placeholder="Cuéntanos sobre tu necesidad o proyecto"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-secondary font-semibold text-white gap-2"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {loading ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default ContactPage;