import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
const links = [{
  to: '/',
  label: 'Inicio'
}, {
  to: '/servicios',
  label: 'Servicios'
}, {
  to: '/contactanos',
  label: 'Contáctanos'
}];

const categories = [
  {
    label: 'Computadores y Portátiles',
    subcategories: [
      { label: 'Computador', path: '/categoria/computador' },
      { label: 'Portátil', path: '/tienda/portatiles' },
      { label: 'Accesorios Pc', path: '/categoria/accesorios-pc' },
      { label: 'Mouse y Teclados', path: '/categoria/mouse-teclados' },
      { label: 'Software', path: '/categoria/software' }
    ]
  }
];
const Navbar = ({
  onCartClick
}) => {
  const {
    getCartCount
  } = useCart();
  const {
    isAuthed,
    user,
    logout
  } = useAuth();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const count = getCartCount();
  return <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto max-w-[90rem] px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img
            src="https://horizons-cdn.hostinger.com/bf9fa087-fcdc-411c-8b39-287d9981febb/5dc5796ccf311f862391072401ad6c04.png"
            alt="KIRITSU TECHNOLOGIES — Innovación, Tecnología, Futuro"
            className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => <NavLink key={l.to} to={l.to} className={({
          isActive
        }) => `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-muted-foreground hover:text-white'}`}>
              {l.label}
            </NavLink>)}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium transition-colors text-muted-foreground hover:text-white"
            >
              E-commerce
              <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden"
                >
                  {categories.map((category, idx) => (
                    <div key={idx}>
                      <div className="px-4 py-3 text-xs font-semibold text-primary uppercase tracking-wider border-b border-white/10">
                        {category.label}
                      </div>
                      {category.subcategories.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to={sub.path}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link
                    to="/tienda"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors border-t border-white/10"
                  >
                    Ver todo el catálogo
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          {isAuthed ? <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs text-muted-foreground max-w-[120px] truncate">{user?.name || user?.email}</span>
              <Button variant="ghost" size="icon" onClick={logout} className="text-muted-foreground hover:text-white">
                <LogOut className="w-4 h-4" />
              </Button>
            </div> : <Link to="/cuenta" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white gap-1.5">
                <User className="w-4 h-4" /> Cuenta
              </Button>
            </Link>}
          <button onClick={onCartClick} className="relative grid place-items-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {count > 0 && <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 grid place-items-center text-[11px] font-bold rounded-full bg-secondary text-white">
                {count}
              </span>}
          </button>
          <button onClick={() => setOpen(o => !o)} className="md:hidden grid place-items-center w-10 h-10 rounded-lg hover:bg-white/5">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && <motion.nav initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} className="md:hidden overflow-hidden border-t border-white/10 bg-background/95">
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map(l => <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({
            isActive
          }) => `py-2.5 text-sm font-medium ${isActive ? 'text-white' : 'text-muted-foreground'}`}>
                  {l.label}
                </NavLink>)}
              <div className="py-2">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-muted-foreground"
                >
                  E-commerce
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-1 space-y-1"
                    >
                      {categories.map((category, idx) => (
                        <div key={idx}>
                          <div className="py-2 text-xs font-semibold text-primary uppercase tracking-wider">
                            {category.label}
                          </div>
                          {category.subcategories.map((sub, subIdx) => (
                            <Link
                              key={subIdx}
                              to={sub.path}
                              onClick={() => {
                                setOpen(false);
                                setDropdownOpen(false);
                              }}
                              className="block py-2 pl-4 text-sm text-muted-foreground hover:text-white"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <Link
                        to="/tienda"
                        onClick={() => {
                          setOpen(false);
                          setDropdownOpen(false);
                        }}
                        className="block py-2 pl-4 text-sm text-muted-foreground hover:text-white border-t border-white/10 mt-2 pt-3"
                      >
                        Ver todo el catálogo
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <NavLink to="/cuenta" onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium text-muted-foreground">
                {isAuthed ? 'Mi cuenta' : 'Iniciar sesión'}
              </NavLink>
            </div>
          </motion.nav>}
      </AnimatePresence>
    </header>;
};
export default Navbar;
