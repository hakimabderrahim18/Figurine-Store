import { motion } from 'framer-motion';

export default function SectionTitle({ overline, title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {overline && (
        <span className="text-gold text-xs tracking-[0.4em] uppercase block mb-3">
          {overline}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/50 text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="w-12 h-px bg-gold/40" />
        <div className="w-2 h-2 bg-gold rotate-45" />
        <div className="w-12 h-px bg-gold/40" />
      </div>
    </motion.div>
  );
}
