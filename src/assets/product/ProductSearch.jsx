import { useState } from "react";

export default function ProductSearch({ products, setFiltered }) {

  const [query, setQuery] = useState("");

  function handleSearch(e) {

    const value = e.target.value.toLowerCase();
    setQuery(value);

    const results = products.filter((product) => {

      return (
        product.name.toLowerCase().includes(value) ||
        product.category?.toLowerCase().includes(value) ||
        product.brand?.toLowerCase().includes(value)
      );

    });

    setFiltered(results);

  }

  return (

    <div className="mb-12">

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3 text-gray-900 outline-none focus:border-green-500"
      />

    </div>

  );
}