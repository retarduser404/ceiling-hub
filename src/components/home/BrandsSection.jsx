import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { memo } from "react";

import gypsumImg from "../../assets/products/gypsum/gypsum1.webp";
import armstrongImg from "../../assets/products/armstrong/Armstrong1.jpg";
import rockwoolImg from "../../assets/products/rockwool/rockwool1.webp";
import twigaImg from "../../assets/products/glasswool/glasswool1.jpeg";
import bisonImg from "../../assets/products/bison/Bison2.jpeg";
import hiluxImg from "../../assets/products/hilum-board/Hilux1.jpeg";

import everestImg from "../../assets/products/everest-cement-planks/cementplanks1.jpg";
import sheraImg from "../../assets/products/shera-cement-board/Sheracement1.avif";
import vishakaImg from "../../assets/products/vishaka-cement-fibre/Vishakacem1.webp";
import roxulImg from "../../assets/products/roxul-rockwool/Roxul1.webp";

const brands = [
  {
    id: 1,
    name: "Saint Gobain Gyproc",
    subtitle: "Premium Gypsum Systems",
    description:
      "Advanced gypsum systems trusted by architects, builders, and premium interior contractors across India.",
    image: gypsumImg,
    route: "/products?brand=Gyproc",
  },
  {
    id: 2,
    name: "Armstrong",
    subtitle: "False Ceiling Experts",
    description:
      "Premium acoustic ceiling systems engineered for performance, elegance, and long-term durability.",
    image: armstrongImg,
    route: "/products?brand=Armstrong",
  },
  {
    id: 3,
    name: "Rockwool India",
    subtitle: "Thermal + Acoustic Insulation",
    description:
      "High-performance insulation solutions for commercial, industrial, and premium construction spaces.",
    image: rockwoolImg,
    route: "/products?brand=Rockwool",
  },
  {
    id: 4,
    name: "UP Twiga",
    subtitle: "Glasswool Specialists",
    description:
      "Reliable glasswool insulation systems designed for energy efficiency and sound control.",
    image: twigaImg,
    route: "/products?brand=UP Twiga",
  },
  {
    id: 5,
    name: "Bison",
    subtitle: "Cement Board Solutions",
    description:
      "Cement bonded particle boards built for strength, durability, and structural reliability.",
    image: bisonImg,
    route: "/products?brand=Bison",
  },
  {
    id: 6,
    name: "Ramco Hilux",
    subtitle: "Fibre Cement Boards",
    description:
      "Premium calcium silicate and fibre cement boards for modern ceiling and partition systems.",
    image: hiluxImg,
    route: "/products?brand=Ramco",
  },
  {
    id: 7,
    name: "Everest",
    subtitle: "Heavy Duty Cement Boards",
    description:
      "Premium fibre cement boards, planks, and heavy-duty solutions for commercial construction.",
    image: everestImg,
    route: "/products?brand=Everest",
  },
  {
    id: 8,
    name: "Shera",
    subtitle: "Decorative Cement Solutions",
    description:
      "Modern fibre cement boards and decorative solutions for premium interiors and facades.",
    image: sheraImg,
    route: "/products?brand=Shera",
  },
  {
    id: 9,
    name: "Vishaka",
    subtitle: "Fibre Cement Experts",
    description:
      "Reliable cement fibre boards engineered for durability and industrial performance.",
    image: vishakaImg,
    route: "/products?brand=Vishaka",
  },
  {
    id: 10,
    name: "Roxul",
    subtitle: "Advanced Insulation Systems",
    description:
      "Premium rockwool insulation panels built for thermal efficiency, acoustic control, and fire safety.",
    image: roxulImg,
    route: "/products?brand=Roxul",
  },
];

const BrandCard = memo(({ brand, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
  >
    <Link
      to={brand.route}
      className="group block h-full rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
        <img
          src={brand.image}
          alt={brand.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col h-full">
        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">
          {brand.subtitle}
        </p>

        <h3 className="text-sm sm:text-base font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          {brand.name}
        </h3>

        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-auto line-clamp-2">
          {brand.description}
        </p>

        <div className="pt-3 mt-auto border-t border-gray-100">
          <p className="text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-200 flex items-center gap-1">
            Explore Products <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </p>
        </div>
      </div>
    </Link>
  </motion.div>
));

BrandCard.displayName = "BrandCard";

function BrandsSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 border-t border-gray-200 overflow-hidden">
      <div className="container-width px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center sm:text-left"
        >
          <p className="text-blue-600 tracking-widest text-xs sm:text-sm uppercase mb-3 font-semibold">
            Trusted Brand Partners
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-5xl mb-5">
            Built With Industry Leaders
          </h2>

          <p className="text-gray-700 text-base sm:text-lg max-w-3xl leading-relaxed mx-auto sm:mx-0">
            We work with India's most trusted manufacturers in ceiling systems, insulation materials, and premium interior construction solutions.
          </p>
        </motion.div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {brands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>

        {/* Bottom Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-md p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            <div className="border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0 sm:pr-8">
              <h4 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">500+</h4>
              <p className="text-gray-700 text-sm sm:text-base font-medium">Projects Supported Across India</p>
            </div>

            <div className="border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0 sm:pr-8">
              <h4 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">38+</h4>
              <p className="text-gray-700 text-sm sm:text-base font-medium">Premium Product Categories</p>
            </div>

            <div>
              <h4 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">10</h4>
              <p className="text-gray-700 text-sm sm:text-base font-medium">Industry Leading Brands</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(BrandsSection);