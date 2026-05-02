import { motion } from "framer-motion";
import { products } from "../../data/products";
import { Link } from "react-router-dom";

export default function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
            Featured Product Lineup
          </p>

          <h2 className="font-heading text-5xl md:text-6xl leading-tight max-w-5xl mb-6">
            Premium Products Built For Serious Projects
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            Explore our most trusted ceiling systems, gypsum boards,
            insulation materials, and construction solutions designed
            for commercial, residential, and industrial applications.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group"
            >
              <Link
                to={`/product/${product.id}`}
                className="block h-full rounded-3xl overflow-hidden
                border border-white/10 bg-white/[0.02]
                hover:bg-white/[0.04]
                hover:border-white/20
                transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover
                    group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-3">
                    {product.brand}
                  </p>

                  <h3 className="text-xl font-semibold mb-4 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-accent font-medium group-hover:underline">
                      View Product →
                    </span>

                    <span className="text-xs text-gray-500 uppercase tracking-widest">
                      Premium
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-white/10
          bg-white/[0.02] p-10 md:p-14"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-accent tracking-[0.25em] text-sm uppercase mb-4">
                Full Product Catalog
              </p>

              <h3 className="font-heading text-4xl md:text-5xl leading-tight mb-5">
                Need More Than Just Featured Products?
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Explore our complete collection of premium ceiling systems,
                insulation materials, gypsum products, boards, and project-ready
                construction solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                to="/products"
                className="px-8 py-4 bg-white text-black rounded-xl
                font-medium hover:scale-[1.02] transition duration-300 text-center"
              >
                Explore Full Catalog
              </Link>

              <Link
                to="/support"
                className="px-8 py-4 border border-white/20 rounded-xl
                hover:bg-white hover:text-black transition duration-300 text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}