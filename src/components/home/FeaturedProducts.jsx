import { motion } from "framer-motion";
import { products } from "../../data/products";
import { Link } from "react-router-dom";
import { useMemo, memo } from "react";

const ProductCardMotion = memo(({ product }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="group h-full"
  >
    <Link
      to={`/product/${product.id}`}
      className="block h-full rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">
          {product.brand}
        </p>
        <h3 className="text-sm font-semibold mb-2 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-xs text-gray-600 line-clamp-2 mb-auto text-gray-600 leading-relaxed">
          {product.description}
        </p>
        <div className="pt-3 mt-3 border-t border-gray-100">
          <p className="text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
            View Product →
          </p>
        </div>
      </div>
    </Link>
  </motion.div>
));

ProductCardMotion.displayName = "ProductCardMotion";

function FeaturedProducts() {
  const featuredProducts = useMemo(() => 
    products.filter((p) => p.featured).slice(0, 8),
    []
  );

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 border-t border-gray-200">
      <div className="container-width px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-blue-600 tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 font-semibold">
            Featured Products
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-5xl mb-5">
            Premium Materials Built For Quality Projects
          </h2>

          <p className="text-gray-700 text-base sm:text-lg max-w-3xl leading-relaxed">
            Explore our most trusted ceiling systems, gypsum boards, insulation materials, and construction solutions.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
          {featuredProducts.map((product) => (
            <ProductCardMotion key={product.id} product={product} />
          ))}
        </div>

        {/* Premium CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 rounded-2xl border border-gray-200 bg-white shadow-md p-8 sm:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-blue-600 tracking-widest text-xs uppercase mb-3 font-semibold">
                Complete Catalog
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                Explore Our Full Product Range
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl">
                Discover our complete collection of premium ceiling systems, insulation materials, and project-ready solutions from trusted brands.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200 text-center shadow-md hover:shadow-lg"
              >
                View All Products
              </Link>
              <Link
                to="/support"
                className="w-full sm:w-auto px-8 py-3.5 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 active:scale-95 transition-all duration-200 text-center"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(FeaturedProducts);