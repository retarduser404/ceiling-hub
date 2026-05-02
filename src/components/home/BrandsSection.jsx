import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import gypsumImg from "../../assets/products/gypsum/gypsum1.webp";
import armstrongImg from "../../assets/products/armstrong/Armstrong1.jpg";
import rockwoolImg from "../../assets/products/rockwool/rockwool1.webp";
import cementImg from "../../assets/products/cement/Cement1.jpg";
import bisonImg from "../../assets/products/bison/Bison2.jpeg";
import hiluxImg from "../../assets/products/hilumboard/Hilux1.jpeg";

const brands = [
  {
    id: 1,
    name: "Saint Gobain Gyproc",
    subtitle: "Premium Gypsum Systems",
    description:
      "Advanced gypsum systems trusted by architects, builders, and premium interior contractors across India.",
    image: gypsumImg,
    route: "/products?brand=gyproc",
  },
  {
    id: 2,
    name: "Armstrong",
    subtitle: "False Ceiling Experts",
    description:
      "Premium acoustic ceiling systems engineered for performance, elegance, and long-term durability.",
    image: armstrongImg,
    route: "/products?brand=armstrong",
  },
  {
    id: 3,
    name: "Rockwool India",
    subtitle: "Thermal + Acoustic Insulation",
    description:
      "High-performance insulation solutions for commercial, industrial, and premium construction spaces.",
    image: rockwoolImg,
    route: "/products?brand=rockwool",
  },
  {
    id: 4,
    name: "UP Twiga",
    subtitle: "Glasswool Specialists",
    description:
      "Reliable glasswool insulation systems designed for energy efficiency and sound control.",
    image: cementImg,
    route: "/products?brand=twiga",
  },
  {
    id: 5,
    name: "Bison",
    subtitle: "Cement Board Solutions",
    description:
      "Cement bonded particle boards built for strength, durability, and structural reliability.",
    image: bisonImg,
    route: "/products?brand=bison",
  },
  {
    id: 6,
    name: "Ramco Hilux",
    subtitle: "Fibre Cement Boards",
    description:
      "Premium calcium silicate and fibre cement boards for modern ceiling and partition systems.",
    image: hiluxImg,
    route: "/products?brand=hilux",
  },
];

export default function BrandsSection() {
  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-accent tracking-[0.35em] text-sm uppercase mb-5">
            Trusted Brand Partners
          </p>

          <h2 className="font-heading text-5xl md:text-6xl leading-tight max-w-5xl mb-6">
            Built With Industry Leaders
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            We work with India's most trusted manufacturers in ceiling systems,
            gypsum boards, insulation materials, cement boards, and premium
            interior construction solutions.
          </p>
        </motion.div>

        {/* Premium Brand Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <Link
                to={brand.route}
                className="group block h-full rounded-3xl overflow-hidden border border-white/10
                bg-white/[0.02] hover:bg-white/[0.04]
                hover:border-white/20 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-3">
                    {brand.subtitle}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-white transition">
                    {brand.name}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    {brand.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-accent font-medium group-hover:underline">
                      Explore Products →
                    </span>

                    <span className="text-sm text-gray-500">
                      Official Supply
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-14"
        >
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-4xl font-semibold mb-2">500+</h4>
              <p className="text-gray-400">
                Projects Supported Across Commercial & Residential Spaces
              </p>
            </div>

            <div>
              <h4 className="text-4xl font-semibold mb-2">25+</h4>
              <p className="text-gray-400">
                Premium Product Categories Across Ceiling & Insulation Systems
              </p>
            </div>

            <div>
              <h4 className="text-4xl font-semibold mb-2">Trusted</h4>
              <p className="text-gray-400">
                By Contractors, Architects, Builders & Interior Consultants
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}