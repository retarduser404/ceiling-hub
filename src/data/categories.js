export const categories = [
  {
    id: 1,
    name: "Gypsum Boards",
    slug: "gypsum-boards",
    description: "Premium drywall solutions for modern interiors",
    icon: "📋",
    color: "from-blue-50 to-blue-100",
  },
  {
    id: 2,
    name: "Ceiling Systems",
    slug: "ceiling-systems",
    description: "Professional suspended ceiling systems",
    icon: "🏗️",
    color: "from-cyan-50 to-cyan-100",
  },
  {
    id: 3,
    name: "Ceiling Tiles",
    slug: "ceiling-tiles",
    description: "High-performance acoustic ceiling tiles",
    icon: "🎯",
    color: "from-slate-50 to-slate-100",
  },
  {
    id: 4,
    name: "Insulation Materials",
    slug: "insulation-materials",
    description: "Thermal and acoustic insulation products",
    icon: "🛡️",
    color: "from-green-50 to-green-100",
  },
  {
    id: 5,
    name: "Cement Boards",
    slug: "cement-boards",
    description: "Durable cement boards for wet areas",
    icon: "🧱",
    color: "from-orange-50 to-orange-100",
  },
  {
    id: 6,
    name: "Gypsum Products",
    slug: "gypsum-products",
    description: "Complete gypsum product line",
    icon: "🎨",
    color: "from-purple-50 to-purple-100",
  },
];

export const getCategoryBySlug = (slug) => {
  return categories.find((cat) => cat.slug === slug);
};

export const getCategoryByName = (name) => {
  return categories.find((cat) => cat.name === name);
};
