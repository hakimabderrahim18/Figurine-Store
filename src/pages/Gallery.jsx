import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered =
    activeCategory === 'Tous'
      ? products
      : products.filter(p => p.category === activeCategory);

  return (
    <main className="pt-20 min-h-screen">
      {/* Page header */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
          >
            Notre collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Galerie des{' '}
            <span className="text-gradient-gold">Créations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-base leading-relaxed"
          >
            Explorez notre collection complète de figurines, maquettes et objets décoratifs — chaque pièce est unique.
          </motion.p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-20 z-30 bg-[#0e080d]/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-black font-bold'
                  : 'border border-white/10 text-white/60 hover:border-gold/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-8">
            {filtered.length} création{filtered.length > 1 ? 's' : ''}
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
