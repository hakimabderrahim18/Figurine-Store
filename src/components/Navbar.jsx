import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/a-propos', label: 'À Propos' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0e080d]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex flex-col leading-none group">
          <span className="text-xl font-bold tracking-[0.12em] text-gradient-gold" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', letterSpacing: '0.1em'}}>
            Sonia Craft
          </span>
          <span className="text-[9px] tracking-[0.5em] text-white/40 uppercase group-hover:text-gold transition-colors">
            Atelier créatif
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm tracking-widest uppercase transition-colors duration-300 relative group ${
                    isActive ? 'text-gold' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-gold/60 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-[#0e080d] transition-all duration-300"
        >
          Commander
        </NavLink>

        {/* Burger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0e080d]/95 backdrop-blur-md border-t border-white/5"
          >
            <ul className="flex flex-col py-4">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `block px-6 py-4 text-sm tracking-widest uppercase border-b border-white/5 transition-colors ${
                        isActive ? 'text-gold' : 'text-white/70 hover:text-white'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="px-6 pt-4">
                <NavLink
                  to="/contact"
                  className="block text-center py-3 border border-gold/60 text-gold text-xs tracking-widest uppercase"
                >
                  Commander
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
