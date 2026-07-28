import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { User, LogOut, Loader2 } from 'lucide-react';

const AccountPage = () => {
  const { user, isAuthed, login, signup, logout } = useAuth();
  const { toast } = useToast();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'login') await login(form.email, form.password);
      else await signup(form.email, form.password, form.name);
      toast({ title: 'Bienvenido', description: 'Sesión iniciada correctamente.' });
    } catch (err) {
      toast({ variant: 'destructive', title: 'Error', description: err?.message || 'No se pudo autenticar.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet><title>Mi cuenta — KIRITSU TECHNOLOGIES</title></Helmet>
      <section className="min-h-[70vh] grid place-items-center px-5 py-20">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-md glass-card rounded-3xl p-8 glow-border">
          {isAuthed ? (
            <div className="text-center">
              <span className="grid place-items-center w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary mb-5">
                <User className="w-8 h-8 text-white" />
              </span>
              <h1 className="font-display text-2xl mb-1">{user?.name || 'Mi cuenta'}</h1>
              <p className="text-sm text-muted-foreground mb-8">{user?.email}</p>
              <Button onClick={logout} variant="outline" className="w-full border-white/20 bg-white/5 hover:bg-white/10 gap-2">
                <LogOut className="w-4 h-4" /> Cerrar sesión
              </Button>
            </div>
          ) : (
            <>
              <h1 className="font-display text-2xl mb-1">{mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}</h1>
              <p className="text-sm text-muted-foreground mb-6">Accede a tu cuenta para gestionar tus compras.</p>
              <form onSubmit={submit} className="space-y-4">
                {mode === 'signup' && (
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-white/5 border-white/15" placeholder="Tu nombre" />
                  </div>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="email">Correo</Label>
                  <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-white/5 border-white/15" placeholder="correo@empresa.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input id="password" type="password" required minLength={8} value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="bg-white/5 border-white/15" placeholder="Mínimo 8 caracteres" />
                </div>
                <Button type="submit" disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold gap-2">
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {mode === 'login' ? 'Entrar' : 'Registrarme'}
                </Button>
              </form>
              <p className="text-center text-sm text-muted-foreground mt-5">
                {mode === 'login' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
                <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} className="text-primary hover:underline font-medium">
                  {mode === 'login' ? 'Regístrate' : 'Inicia sesión'}
                </button>
              </p>
            </>
          )}
        </motion.div>
      </section>
    </>
  );
};

export default AccountPage;
