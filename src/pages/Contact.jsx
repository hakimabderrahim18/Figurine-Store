import { useState } from 'react';
import { motion } from 'framer-motion';

const contactInfo = [
  { icon: '✉', label: 'Email', value: 'contact@soniacraft.fr', href: 'mailto:contact@soniacraft.fr' },
  { icon: '☏', label: 'Téléphone', value: '+33 6 00 00 00 00', href: 'tel:+33600000000' },
  { icon: '◎', label: 'Localisation', value: 'France — Commandes en ligne', href: null },
];

const socials = [
  { label: 'Instagram', icon: 'IG', href: '#' },
  { label: 'Pinterest', icon: 'PT', href: '#' },
  { label: 'Facebook', icon: 'FB', href: '#' },
];

const serviceOptions = [
  'Figurine personnalisée',
  'Impression 3D',
  'Maquette architecturale',
  'Objet décoratif',
  'Peinture / Restauration',
  'Commande professionnelle',
  'Autre',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Le nom est requis.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Email invalide.';
    if (!form.message.trim()) e.message = 'Le message est requis.';
    return e;
  };

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(er => ({ ...er, [e.target.name]: undefined }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <main className="pt-20 min-h-screen">
      {/* Header */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80)',
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
            Travaillons ensemble
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Nous{' '}
            <span className="text-gradient-gold">Contacter</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-base leading-relaxed"
          >
            Un projet en tête ? Écrivez-nous et recevez un devis gratuit sous 48h.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-xs tracking-[0.4em] uppercase block mb-4">Coordonnées</span>
              <h2 className="text-2xl font-bold mb-8">Prenons Contact</h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <span className="text-gold text-xl mt-0.5">{icon}</span>
                    <div>
                      <p className="text-white/30 text-[10px] tracking-widest uppercase mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-white/80 text-sm hover:text-gold transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-white/80 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-white/30 text-[10px] tracking-widest uppercase mb-4">Réseaux sociaux</p>
                <div className="flex gap-3">
                  {socials.map(({ label, icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 border border-white/10 flex items-center justify-center text-[11px] font-bold text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10 p-6 border border-gold/20 bg-gold/5">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">Délais de réponse</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Nous répondons à tous les messages sous <strong className="text-white">48h ouvrées</strong>. Pour les projets urgents, n'hésitez pas à nous appeler directement.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 border border-white/5 bg-[#140a12]/70 backdrop-blur-sm"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <span className="text-5xl text-gold block mb-6">◇</span>
                  <h3 className="text-2xl font-bold mb-4">Message envoyé !</h3>
                  <p className="text-white/60 leading-relaxed max-w-sm mx-auto">
                    Merci pour votre message. Nous vous répondrons sous 48h avec un devis personnalisé.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', service: '', message: '' }); }}
                    className="mt-8 px-6 py-3 border border-gold/50 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-[#0e080d] transition-all duration-300"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <h3 className="text-lg font-bold tracking-wide mb-6">Votre Projet</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-white/50 text-[10px] tracking-widest uppercase mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        maxLength={100}
                        className={`w-full bg-black border px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-gold transition-colors duration-300 ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-white/50 text-[10px] tracking-widest uppercase mb-2">
                        Adresse email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jean@exemple.fr"
                        maxLength={200}
                        className={`w-full bg-black border px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-gold transition-colors duration-300 ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-white/50 text-[10px] tracking-widest uppercase mb-2">
                      Type de service
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white text-sm outline-none focus:border-gold transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Sélectionner un service…</option>
                      {serviceOptions.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white/50 text-[10px] tracking-widest uppercase mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre idée, dimensions souhaitées, délais, budget…"
                      rows={5}
                      maxLength={2000}
                      className={`w-full bg-black border px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-gold transition-colors duration-300 resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    <div className="flex justify-between items-start mt-1">
                      {errors.message ? (
                        <p className="text-red-400 text-xs">{errors.message}</p>
                      ) : <span />}
                      <p className="text-white/20 text-xs">{form.message.length}/2000</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 gradient-gold text-[#0e080d] font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
                  >
                    Envoyer le message →
                  </button>

                  <p className="text-white/25 text-xs text-center">
                    Vos données ne seront jamais partagées avec des tiers.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
