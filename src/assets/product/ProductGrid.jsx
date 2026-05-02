import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [] }) {
  return (

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>

  );
}