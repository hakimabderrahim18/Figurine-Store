import { motion } from 'framer-motion';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-[#180d16]/80 backdrop-blur-sm border border-white/5 overflow-hidden card-shadow hover:border-gold/30 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-gold text-[#0e080d] text-[10px] font-bold tracking-widest uppercase">
            {product.badge}
          </span>
        )}
        {/* Category chip */}
        <span className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-white/70 text-[10px] tracking-widest uppercase border border-white/10">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-bold tracking-wider text-white mb-2 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-gold text-xs tracking-widest uppercase">Voir détails →</span>
          <div className="w-6 h-px bg-gold/30 group-hover:w-12 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}
