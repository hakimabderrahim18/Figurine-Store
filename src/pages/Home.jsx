import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { popularProducts } from '../data/products';

const stats = [
  { value: '500+', label: 'Créations réalisées' },
  { value: '8 ans', label: 'D\'expérience' },
  { value: '100%', label: 'Fait main' },
  { value: '4.9★', label: 'Note clients' },
];

const features = [
  {
    icon: '◇',
    title: 'Impression 3D Précise',
    desc: 'Technologies FDM & résine pour des détails au dixième de millimètre.',
  },
  {
    icon: '◈',
    title: 'Peinture Artisanale',
    desc: 'Chaque pièce est peinte à la main avec des pigments de qualité musée.',
  },
  {
    icon: '◉',
    title: 'Sur Mesure',
    desc: 'Création personnalisée selon vos plans, photos ou descriptions.',
  },
];

export default function Home() {
  return (
    <main>
      {/* ───── HERO ───── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
              backgroundImage:
              'url(https://images.unsplash.com/photo-1487530811015-780380679641?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

        {/* Decorative lines */}
        <div className="absolute top-1/2 left-8 w-px h-48 bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-y-1/2 hidden lg:block" />
        <div className="absolute top-1/2 right-8 w-px h-48 bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-y-1/2 hidden lg:block" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs tracking-[0.5em] uppercase mb-6"
          >
            Sonia Craft — Atelier artisanal • France
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
          >
            L'Art prend{' '}
            <span className="text-gradient-gold">Vie</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Figurines, maquettes et objets décoratifs créés avec passion et délicatesse. Chaque pièce est unique, façonnée et peinte à la main dans notre atelier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/galerie"
              className="inline-block px-8 py-4 gradient-gold text-[#0e080d] font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
            >
              Découvrir la Galerie
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Commander sur mesure
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] tracking-widest uppercase">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ───── STATS ───── */}
      <section className="border-y border-white/5 bg-[#140a12]/70">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-gradient-gold mb-1">{s.value}</p>
              <p className="text-white/40 text-xs tracking-widest uppercase">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── PRÉSENTATION ───── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/20 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
              alt="Atelier Artefact Studio"
              className="w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-xs tracking-[0.4em] uppercase block mb-4">Notre savoir-faire</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              L'Excellence de{' '}
              <span className="text-gradient-gold">l'Artisanat</span>{' '}
              Numérique
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
            Chez Sonia Craft, nous fusionnons tradition artisanale et technologies modernes. Chaque création naît d’un dessin, passe par la modélisation 3D, puis est imprimée, poncée et peinte à la main.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Que vous souhaitiez une figurine de jeu de rôle, une maquette architecturale ou un objet décoratif unique, notre atelier vous accompagne de l'idée à la pièce finale.
            </p>
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-3 text-gold text-sm tracking-widest uppercase hover:gap-5 transition-all duration-300"
            >
              En savoir plus
              <span className="w-8 h-px bg-gold" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───── POPULAIRE ───── */}
      <section className="py-24 px-6 bg-[#140a12]/70">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            overline="Sélection du moment"
            title="Créations Populaires"
            subtitle="Nos pièces les plus appréciées par notre communauté de collectionneurs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/galerie"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold/50 text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-[#0e080d] transition-all duration-300"
            >
              Voir toute la galerie
            </Link>
          </div>
        </div>
      </section>

      {/* ───── SAVOIR-FAIRE ───── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            overline="Méthodes"
            title="Notre Processus"
            subtitle="De la conception à la pièce finie, chaque étape est maîtrisée avec soin."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group p-8 border border-white/5 hover:border-gold/30 transition-all duration-500 hover:gold-glow"
              >
                <span className="text-3xl text-gold block mb-5">{f.icon}</span>
                <h3 className="text-lg font-bold tracking-wide text-white mb-3 group-hover:text-gold transition-colors">
                  {f.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA BANNER ───── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center max-w-2xl mx-auto"
        >
          <span className="text-gold text-xs tracking-[0.4em] uppercase block mb-4">Commande personnalisée</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Votre Idée,{' '}
            <span className="text-gradient-gold">Notre Création</span>
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Décrivez-nous votre projet et nous le concrétisons. Du croquis à la pièce unique, tout est possible.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 gradient-gold text-[#0e080d] font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
          >
            Démarrer mon projet
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
