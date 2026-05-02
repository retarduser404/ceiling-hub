import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiArrowRight, FiPhone, FiMail } from "react-icons/fi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/products/ProductCard";

import { products } from "../data/products";
import { contact } from "../config/contact";

export default function ProductPage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Navbar />

        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Product not found
          </h1>

          <Link
            to="/products"
            className="text-accent hover:underline inline-flex items-center gap-2"
          >
            Back to Products <FiArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) =>
      p.category === product.category &&
      p.id !== product.id
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 border-b border-white/10">
        <div className="container-width">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-8 text-sm text-gray-500"
          >
            <Link
              to="/products"
              className="hover:text-white transition"
            >
              Products
            </Link>

            <span>/</span>

            <span className="text-accent">
              {product.name}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 p-8"
            >
              <div>
                {/* Main Image */}
                <img
                  src={selectedImage || product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover rounded-xl"
                />

                {/* Real Thumbnail Gallery */}
                {(product.images || [product.image]).length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mt-5">
                    {(product.images || [product.image]).map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className={`rounded-xl overflow-hidden border transition duration-300 ${(selectedImage || product.image) === img
                          ? "border-accent"
                          : "border-white/10 hover:border-white/30"
                          }`}
                      >
                        <img
                          src={img}
                          alt={`${product.name}-${index}`}
                          className="w-full h-24 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Product Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div>
                <motion.p
                  variants={itemVariants}
                  className="text-accent text-sm tracking-widest uppercase mb-2"
                >
                  {product.brand}
                </motion.p>

                <motion.h1
                  variants={itemVariants}
                  className="font-heading text-5xl md:text-6xl leading-tight mb-4"
                >
                  {product.name}
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-gray-400 text-lg"
                >
                  {product.category}
                </motion.p>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-lg leading-relaxed"
              >
                {product.fullDescription || product.description}
              </motion.p>

              {/* Premium CTA + Brochure Block */}
              <motion.div
                variants={itemVariants}
                className="pt-6 space-y-6"
              >
                {/* Brochure + Technical Docs */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-4">
                    Technical Documents
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="border border-white/10 rounded-xl px-5 py-4
        hover:border-white/30 transition duration-300"
                    >
                      <p className="font-medium mb-1">
                        Product Brochure
                      </p>
                      <p className="text-sm text-gray-400">
                        Download complete product overview
                      </p>
                    </a>

                    <a
                      href="#"
                      className="border border-white/10 rounded-xl px-5 py-4
        hover:border-white/30 transition duration-300"
                    >
                      <p className="font-medium mb-1">
                        Technical Datasheet
                      </p>
                      <p className="text-sm text-gray-400">
                        Specifications & performance data
                      </p>
                    </a>
                  </div>
                </div>

                {/* Conversion Buttons */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=Hi, I'm interested in ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2
      px-8 py-4 bg-white text-black
      font-semibold rounded-xl
      hover:scale-[1.02] transition duration-300"
                  >
                    <FiPhone />
                    WhatsApp For Quote
                  </a>

                  <a
                    href={`mailto:${contact.email}?subject=Product Inquiry: ${product.name}`}
                    className="flex items-center justify-center gap-2
      px-8 py-4 border border-white/20
      rounded-xl hover:bg-white hover:text-black
      transition duration-300"
                  >
                    <FiMail />
                    Talk To Expert
                  </a>

                  <a
                    href={`tel:${contact.phone1 || "+917678654408"}`}
                    className="flex items-center justify-center gap-2
      px-8 py-4 border border-white/20
      rounded-xl hover:border-white/50
      transition duration-300"
                  >
                    <FiPhone />
                    Call Now
                  </a>

                  <Link
                    to="/support"
                    className="flex items-center justify-center gap-2
      px-8 py-4 border border-white/20
      rounded-xl hover:border-accent/50
      transition duration-300"
                  >
                    Get Consultation
                    <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      {(product.features || []).length > 0 && (
        <section className="py-20 border-b border-white/10">
          <div className="container-width">
            <h2 className="font-heading text-4xl md:text-5xl mb-12">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {(product.features || []).map((feature, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-6 rounded-lg border border-white/10 bg-white/[0.02]"
                >
                  <div className="w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center mt-1">
                    <FiCheck />
                  </div>

                  <p className="text-gray-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PREMIUM SPECIFICATIONS */}
      {Object.keys(product.specifications || {}).length > 0 && (
        <section className="py-24 border-b border-white/10">
          <div className="container-width">

            <div className="mb-14">
              <p className="text-accent tracking-[0.3em] text-sm uppercase mb-4">
                Technical Specifications
              </p>

              <h2 className="font-heading text-4xl md:text-6xl leading-tight mb-5">
                Product Specifications
              </h2>

              <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                Detailed performance metrics and technical standards
                designed for commercial, residential, and industrial
                project requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(product.specifications || {}).map(
                ([key, value], index) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-white/10
              bg-gradient-to-br from-white/[0.04] to-white/[0.02]
              p-7 hover:border-white/20 transition duration-300"
                  >
                    <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-4">
                      Spec {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="text-lg font-medium mb-3">
                      {key}
                    </h3>

                    <p className="text-accent text-xl font-semibold">
                      {value}
                    </p>
                  </div>
                )
              )}
            </div>

          </div>
        </section>
      )}

      {/* APPLICATIONS */}
      {(product.applications || []).length > 0 && (
        <section className="py-20 border-b border-white/10">
          <div className="container-width">
            <h2 className="font-heading text-4xl md:text-5xl mb-12">
              Applications
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {(product.applications || []).map((app, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl border border-white/10 bg-white/[0.02]"
                >
                  <p className="text-gray-300 font-medium">
                    {app}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED PRODUCTS — FIXED VERSION */}
      {relatedProducts.length > 0 && (
        <section className="pt-20 pb-20 border-b border-white/10">
          <div className="container-width">

            <div className="mb-12">
              <h2 className="font-heading text-4xl md:text-5xl mb-4">
                Related Products
              </h2>

              <p className="text-gray-400">
                Explore other products in the {product.category} category
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((relatedProduct) => (
                <div key={relatedProduct.id}>
                  <ProductCard product={relatedProduct} />
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-20 pb-40">
        <div className="container-width">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Ready to Get Started?
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Connect with our experts to discuss how {product.name}
              can meet your project requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=Hi, I'm interested in ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-black font-semibold rounded-lg"
              >
                Contact via WhatsApp
                <FiArrowRight />
              </a>

              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 rounded-lg"
              >
                Explore More Products
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Quote Bar */}
      <div
        className="fixed bottom-0 left-0 w-full z-50
  border-t border-white/10
  bg-black/90 backdrop-blur-xl"
      >
        <div className="container-width py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

            {/* Left Content */}
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-1">
                Need Fast Pricing?
              </p>

              <h3 className="text-lg md:text-xl font-semibold">
                Get Instant Quote For {product.name}
              </h3>
            </div>

            {/* Right CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

              <a
                href={`https://wa.me/${contact.whatsapp}?text=Hi, I'm interested in ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-6 py-3
          bg-white text-black rounded-xl
          font-semibold hover:scale-[1.02]
          transition duration-300"
              >
                WhatsApp Quote
              </a>

              <a
                href={`tel:${contact.phone1 || "+917678654408"}`}
                className="text-center px-6 py-3
          border border-white/20 rounded-xl
          hover:bg-white hover:text-black
          transition duration-300"
              >
                Call Now
              </a>

              <Link
                to="/support"
                className="text-center px-6 py-3
          border border-white/20 rounded-xl
          hover:border-accent/50
          transition duration-300"
              >
                Consultation
              </Link>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}