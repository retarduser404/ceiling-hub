import React, { memo } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = memo(({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="col-span-full py-16 text-center">
        <p className="text-gray-600 text-lg">No products found.</p>
        <p className="text-gray-500 text-sm mt-2">Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
});

ProductGrid.displayName = "ProductGrid";

export default ProductGrid;
