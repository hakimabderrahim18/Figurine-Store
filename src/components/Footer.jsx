import { NavLink } from 'react-router-dom';

const footerLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/a-propos', label: 'À Propos' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const socials = [
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'Pinterest', href: '#', icon: 'PT' },
  { label: 'Facebook', href: '#', icon: 'FB' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0510]/80 backdrop-blur-sm border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold tracking-[0.08em] text-gradient-gold block" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem'}}>
                Sonia Craft
              </span>
              <span className="text-[9px] tracking-[0.5em] text-white/30 uppercase">
                Atelier créatif
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Créations artisanales uniques — figurines, maquettes et objets décoratifs façonnés avec amour et délicatesse.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold mb-5">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-white/50 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>contact@soniacraft.fr</p>
              <p>+33 6 00 00 00 00</p>
              <p>France — Commandes en ligne</p>
            </div>
            <div className="flex gap-3 mt-6">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-[10px] text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs tracking-wider">
            © {new Date().getFullYear()} Sonia Craft. Tous droits réservés.
          </p>
          <p className="text-white/25 text-xs tracking-wider">
            Créations artisanales — Fait avec ♥ en France
          </p>
        </div>
      </div>
    </footer>
  );
}
