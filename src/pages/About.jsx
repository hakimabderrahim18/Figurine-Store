import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const values = [
  { icon: '◇', title: 'Passion', desc: 'Chaque pièce est conçue avec un amour sincère du détail et de l\'artisanat.' },
  { icon: '◈', title: 'Précision', desc: 'Des outils de modélisation de pointe combinés à une peinture à la main minutieuse.' },
  { icon: '◉', title: 'Unicité', desc: 'Aucune série, chaque création est une pièce unique ou en édition très limitée.' },
  { icon: '◆', title: 'Qualité', desc: 'Matériaux premium, résines de qualité musée, pigments professionnels.' },
];

const timeline = [
  { year: '2016', event: 'Naissance de la passion pour la modélisation 3D et la peinture de figurines.' },
  { year: '2018', event: 'Premiers clients et commandes personnalisées pour des collectionneurs.' },
  { year: '2020', event: 'Ouverture de l\'atelier physique et investissement dans des équipements professionnels.' },
  { year: '2023', event: 'Lancement de Sonia Craft avec une boutique en ligne et 500+ créations réalisées.' },
];

export default function About() {
  return (
    <main className="pt-20 min-h-screen">
      {/* Header */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1513506003901-1e6a35f10e67?w=1200&q=80)',
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
            L'atelier
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            À Propos d'{' '}
            <span className="text-gradient-gold">Sonia Craft</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-base leading-relaxed"
          >
            L'histoire d'une passion qui s'est transformée en vocation.
          </motion.p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80"
                alt="Atelier"
                className="w-full aspect-square object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80"
                alt="Création"
                className="w-full aspect-square object-cover mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 border border-gold/20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-xs tracking-[0.4em] uppercase block mb-4">Notre histoire</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              De la Passion à{' '}
              <span className="text-gradient-gold">l'Excellence</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-5">
              Tout a commencé par un simple kit de figurines et une fascination pour le monde miniature. Au fil des années, cette passion s'est transformée en une expertise reconnue dans la création de pièces artisanales uniques.
            </p>
            <p className="text-white/60 leading-relaxed mb-5">
              Aujourd'hui, Sonia Craft réunit les meilleures techniques traditionnelles — sculpture, peinture, finitions manuelles — avec les technologies numériques modernes comme la modélisation 3D et l'impression haute résolution.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Notre mission : donner vie à vos idées les plus folles avec une précision et un soin qui font de chaque pièce une œuvre d'art à part entière.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-gold text-sm tracking-widest uppercase hover:gap-5 transition-all duration-300"
            >
              Voir nos services
              <span className="w-8 h-px bg-gold" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#140a12]/70">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            overline="Ce qui nous guide"
            title="Nos Valeurs"
            subtitle="Les principes fondamentaux qui guident chaque création sortant de notre atelier."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group p-8 border border-white/5 hover:border-gold/30 transition-all duration-500 text-center"
              >
                <span className="text-4xl text-gold block mb-5">{v.icon}</span>
                <h3 className="text-base font-bold tracking-wider text-white mb-3 group-hover:text-gold transition-colors">
                  {v.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionTitle overline="Parcours" title="Notre Évolution" />
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-white/5" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-8 items-start"
                >
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-gold font-bold text-sm tracking-wider">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 mt-1.5 relative">
                    <div className="w-3 h-3 bg-gold rotate-45 relative z-10" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed pt-0.5">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
