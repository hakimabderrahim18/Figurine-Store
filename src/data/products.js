export const products = [
  {
    id: 1,
    name: 'Guerrier Médiéval',
    category: 'Figurine',
    description: 'Figurine artisanale d\'un chevalier en armure, peinte à la main avec une précision exceptionnelle.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    badge: 'Populaire',
  },
  {
    id: 2,
    name: 'Dragon Ancêtre',
    category: 'Figurine',
    description: 'Dragon mythique sculté avec des détails de précision, idéal pour les collectionneurs.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    badge: 'Nouveau',
  },
  {
    id: 3,
    name: 'Tour Médiévale',
    category: 'Maquette',
    description: 'Maquette architecturale d\'une tour en pierre du Moyen-Âge, reproduction fidèle.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a35f10e67?w=600&q=80',
    badge: null,
  },
  {
    id: 4,
    name: 'Vase Art Déco',
    category: 'Décoration',
    description: 'Objet décoratif aux lignes épurées inspiré du mouvement Art Déco des années 20.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    badge: 'Populaire',
  },
  {
    id: 5,
    name: 'Buste Romain',
    category: 'Sculpture',
    description: 'Buste d\'un général romain sculpté dans le détail, finition marbre blanc.',
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&q=80',
    badge: null,
  },
  {
    id: 6,
    name: 'Château Fort',
    category: 'Maquette',
    description: 'Maquette détaillée d\'un château fort médiéval avec tours et pont-levis.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80',
    badge: 'Nouveau',
  },
  {
    id: 7,
    name: 'Elfe de la Forêt',
    category: 'Figurine',
    description: 'Figurine fantasy d\'une elfe en tenue forestière, peinte avec des teintes naturelles.',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
    badge: null,
  },
  {
    id: 8,
    name: 'Lampe Sculptée',
    category: 'Décoration',
    description: 'Lampe décorative avec base sculptée en relief, lumière d\'ambiance tamisée.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    badge: 'Populaire',
  },
];

export const categories = ['Tous', 'Figurine', 'Maquette', 'Décoration', 'Sculpture'];

export const popularProducts = products.filter(p => p.badge === 'Populaire');
