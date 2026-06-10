import { Link } from "react-router-dom";
import React, { memo } from "react";

const ProductCard = memo(({ product, categorySlug }) => {
  // Ensure valid slug-based routing - use product's categorySlug first, fallback to prop
  const finalCategorySlug = product.categorySlug || categorySlug;
  const productLink = product.slug && finalCategorySlug
    ? `/products/${finalCategorySlug}/${product.slug}`
    : `/products/${categorySlug || 'general'}/${product.slug || product.name?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Link
      to={productLink}
      className="group block h-full rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        {/* Brand */}
        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">
          {product.brand}
        </p>

        {/* Title */}
        <h3 className="text-sm font-semibold mb-2 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 line-clamp-2 mb-auto text-gray-600 leading-relaxed">
          {product.description}
        </p>

        {/* CTA */}
        <div className="pt-3 mt-3 border-t border-gray-100">
          <p className="text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
            View Details →
          </p>
        </div>
      </div>
    </Link>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;