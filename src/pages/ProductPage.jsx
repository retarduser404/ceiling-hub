import { useParams, Link } from "react-router-dom";
import { useMemo, useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

import Footer from "../components/layout/Footer";
import ProductCard from "../components/products/ProductCard";

import { products } from "../data/products";
import { contact } from "../config/contact";

// Memoize the thumbnail button for gallery optimization
const ThumbnailButton = memo(({ img, isSelected, onClick, altText, index }) => (
  <button
    key={index}
    onClick={onClick}
    className={`rounded-lg overflow-hidden border transition-colors duration-200 aspect-square ${
      isSelected
        ? "border-blue-500 shadow-md"
        : "border-gray-200 hover:border-gray-300"
    }`}
    aria-label={`View image ${index + 1}`}
  >
    <img
      className="h-full w-full object-cover"
      src={img}
      alt={altText}
      loading="lazy"
      decoding="async"
    />
  </button>
));

ThumbnailButton.displayName = "ThumbnailButton";

export default function ProductPage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  const handleImageSelect = useCallback((img) => {
    setSelectedImage(img);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            Product not found
          </h1>
          <Link to="/products" className="text-blue-600 hover:underline">
            Back to Products →
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = useMemo(() => {
    return products.filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id
    ).slice(0, 3);
  }, [product.category, product.id]);

  const displayImage = selectedImage || product.image;
  const galleryImages = useMemo(() => product.images || [product.image], [product.images, product.image]);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="border-b border-gray-200 py-10 sm:py-14">
        <div className="container-width px-4 sm:px-6">

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* IMAGE */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="relative bg-gray-50 rounded-xl overflow-hidden">
                <img
                  src={displayImage}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-square sm:aspect-[4/5] object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-3 mt-4">
                {galleryImages.map((img, i) => (
                  <ThumbnailButton
                    key={i}
                    img={img}
                    isSelected={displayImage === img}
                    onClick={() => handleImageSelect(img)}
                    altText={`${product.name} thumbnail ${i + 1}`}
                    index={i}
                  />
                ))}
              </div>
            </div>

            {/* CONTENT */}
            <div className="space-y-5">
              <p className="text-blue-600 text-xs tracking-widest uppercase font-semibold">
                {product.brand}
              </p>

              <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl text-gray-900">
                {product.name}
              </h1>

              <p className="text-gray-600 text-sm">
                {product.category}
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {product.fullDescription || product.description}
              </p>

              {/* CTA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">

                <a
                  href={`https://wa.me/${contact.whatsapp}?text=Hi, I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  WhatsApp Quote
                </a>

                <a
                  href={`tel:${contact.phone1}`}
                  className="text-center py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 active:scale-95 transition-all duration-200"
                >
                  Call Now
                </a>

              </div>

              {/* Docs */}
              <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <p className="text-xs uppercase tracking-widest text-gray-600 mb-3 font-semibold">
                  Documents
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="border border-gray-200 p-3 rounded-lg hover:border-gray-300 transition-colors duration-200 cursor-pointer text-gray-700">Brochure</div>
                  <div className="border border-gray-200 p-3 rounded-lg hover:border-gray-300 transition-colors duration-200 cursor-pointer text-gray-700">Datasheet</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      {(product.features || []).length > 0 && (
        <section className="py-12 sm:py-16 border-b border-gray-200">
          <div className="container-width px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-gray-900">Key Features</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {product.features.map((f, i) => (
                <div key={i} className="flex gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                  <FiCheck className="flex-shrink-0 text-blue-600 mt-0.5" />
                  <p className="text-sm text-gray-700">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SPECS */}
      {Object.keys(product.specifications || {}).length > 0 && (
        <section className="py-14 sm:py-20 border-b border-gray-200">
          <div className="container-width px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-gray-900">Specifications</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(product.specifications).map(([k, v]) => (
                <div key={k} className="border border-gray-200 p-4 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                  <p className="text-gray-600 text-xs font-semibold mb-1">{k}</p>
                  <p className="text-blue-600 font-medium">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED */}
      {relatedProducts.length > 0 && (
        <section className="py-12 sm:py-16 border-t border-gray-200">
          <div className="container-width px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-gray-900">
              Related Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
