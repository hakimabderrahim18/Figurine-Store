import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const services = [
  {
    icon: '⬡',
    title: 'Figurines Personnalisées',
    desc: 'Créez la figurine de vos rêves : personnage de jeu de rôle, portrait 3D de proches, mascotte d\'entreprise. Envoyez vos références et nous sculptons votre vision.',
    features: ['Modélisation 3D sur mesure', 'Peinture artisanale', 'Plusieurs tailles disponibles', 'Livraison soignée'],
    highlight: true,
  },
  {
    icon: '⬢',
    title: 'Impression 3D Résine',
    desc: 'Impression haute résolution en résine photopolymère pour des détails d\'une finesse extrême. Idéal pour des pièces décoratives, prototypes et éléments de jeu.',
    features: ['Résolution jusqu\'à 0.025 mm', 'Résine standard ou flexible', 'Post-traitement inclus', 'Plusieurs coloris de résine'],
    highlight: false,
  },
  {
    icon: '⬟',
    title: 'Maquettes Architecturales',
    desc: 'Reproduction fidèle de bâtiments, châteaux, structures historiques ou projets architecturaux modernes à l\'échelle de votre choix.',
    features: ['Travail sur plans ou photos', 'Échelles personnalisées', 'Détails intérieurs possibles', 'Présentation sur socle'],
    highlight: false,
  },
  {
    icon: '◈',
    title: 'Objets Décoratifs',
    desc: 'Vases, lampes, sculptures d\'intérieur, pièces d\'art… Des objets qui subliment votre intérieur et racontent une histoire unique.',
    features: ['Design original', 'Finitions luxe', 'Pièce unique ou petite série', 'Personnalisation gravure'],
    highlight: false,
  },
  {
    icon: '◉',
    title: 'Peinture & Restauration',
    desc: 'Peinture ou repeintage de figurines, maquettes ou objets existants. Restauration de pièces abîmées avec des matériaux de conservation.',
    features: ['Toutes gammes de figurines', 'Bases & lavis professionnels', 'Respect du style original', 'Vernis de protection'],
    highlight: false,
  },
  {
    icon: '◇',
    title: 'Lots & Professionnels',
    desc: 'Commandes en volume pour associations, musées, événements, jeux de société. Tarifs dégressifs et planning dédié.',
    features: ['Devis personnalisé', 'Suivi de projet dédié', 'Livraisons échelonnées', 'Facturation professionnelle'],
    highlight: false,
  },
];

const process = [
  { step: '01', title: 'Consultation', desc: 'Échange par email ou téléphone pour cerner votre projet, vos attentes et votre budget.' },
  { step: '02', title: 'Devis & Validation', desc: 'Envoi d\'un devis détaillé avec délais. Validation du projet et acompte de 30%.' },
  { step: '03', title: 'Création', desc: 'Modélisation, impression et peinture dans notre atelier. Photos d\'avancement envoyées.' },
  { step: '04', title: 'Livraison', desc: 'Emballage sécurisé, livraison partout en France et à l\'international.' },
];

export default function Services() {
  return (
    <main className="pt-20 min-h-screen">
      {/* Header */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
          >
            Ce que nous proposons
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Nos{' '}
            <span className="text-gradient-gold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-base leading-relaxed"
          >
            De la figurine de jeu au décor d'intérieur luxueux — nous transformons vos idées en réalités tangibles.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group p-8 border transition-all duration-500 ${
                s.highlight
                  ? 'border-gold/50 bg-gold/5 hover:bg-gold/10 gold-glow'
                  : 'border-white/5 hover:border-gold/30'
              }`}
            >
              {s.highlight && (
                <span className="inline-block px-3 py-1 bg-gold text-[#0e080d] text-[10px] font-bold tracking-widest uppercase mb-5">
                  Le Plus Demandé
                </span>
              )}
              <span className="text-4xl text-gold block mb-5">{s.icon}</span>
              <h3 className="text-xl font-bold tracking-wide text-white mb-3 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/40">
                    <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-[#140a12]/70">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            overline="Comment ça marche"
            title="Le Processus de Commande"
            subtitle="Simple, transparent et centré sur votre satisfaction."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative p-8 border border-white/5 hover:border-gold/20 transition-all duration-500"
              >
                <span className="text-5xl font-bold text-white/5 absolute top-4 right-6 select-none">
                  {p.step}
                </span>
                <span className="text-gold text-sm font-bold tracking-widest block mb-4">{p.step}</span>
                <h3 className="text-base font-bold text-white mb-3">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-xs tracking-[0.4em] uppercase block mb-4">Prêt à commencer ?</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Donnez Vie à{' '}
              <span className="text-gradient-gold">Votre Projet</span>
            </h2>
            <p className="text-white/50 mb-10 leading-relaxed">
              Contactez-nous pour discuter de votre projet. Devis gratuit et réponse sous 48h.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 gradient-gold text-[#0e080d] font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Demander un devis gratuit
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
