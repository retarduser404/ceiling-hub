import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductGrid from "../components/products/ProductGrid";
import ProductSearch from "../components/products/ProductSearch";
import ProductFilters from "../components/products/ProductFilters";
import { products } from "../data/products";

export default function Products() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Initialize filters from URL params
  useEffect(() => {
    const brandParam = searchParams.get("brand");

    if (brandParam) {
      setSelectedBrands([
        brandParam.charAt(0).toUpperCase() + brandParam.slice(1),
      ]);
    }
  }, [searchParams]);

  // Filter products based on search, brands, and categories
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      const matchesSearch =
        !searchTerm ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.keywords?.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Brand filter
      const matchesBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand);

      // Category filter
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      return matchesSearch && matchesBrand && matchesCategory;
    });
  }, [searchTerm, selectedBrands, selectedCategories]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-36 pb-16 border-b border-white/10 bg-black">
        <div className="container-width">
          <div className="mb-8">
            <p className="text-accent tracking-[0.3em] text-sm uppercase mb-4">
              Complete Catalog
            </p>

            <h1 className="font-heading text-5xl md:text-6xl leading-tight mb-4">
              Our Premium Products
            </h1>

            <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
              Explore our comprehensive range of ceiling systems, insulation
              materials, and building solutions from industry-leading brands.
            </p>
          </div>

          {/* Search Bar */}
          <ProductSearch onSearch={handleSearch} />
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-black pb-20">
        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <ProductFilters
                  selectedBrands={selectedBrands}
                  selectedCategories={selectedCategories}
                  onBrandChange={setSelectedBrands}
                  onCategoryChange={setSelectedCategories}
                />
              </div>
            </div>

            {/* Right Content - Products */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="mb-8">
                <p className="text-gray-400 text-lg">
                  Showing{" "}
                  <span className="text-accent font-semibold">
                    {filteredProducts.length}
                  </span>{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                </p>
              </div>

              {/* Product Grid */}
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}