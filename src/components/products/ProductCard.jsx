import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block rounded-xl overflow-hidden bg-white/[0.02] border border-white/10 
      hover:border-accent/50 hover:bg-white/[0.05] transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-darkSoft">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover 
          group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs tracking-[0.1em] uppercase text-gray-500 mb-2">
          {product.brand}
        </p>

        <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition line-clamp-2">
          {product.name}
        </h3>

        <p className="text-sm text-gray-400 line-clamp-2 mb-4">
          {product.description}
        </p>

        <p className="text-xs text-accent font-medium flex items-center group-hover:underline">
          View Details <span className="ml-1">→</span>
        </p>
      </div>
    </Link>
  );
}
