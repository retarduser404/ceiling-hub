import { memo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProductsByCategory } from "../data/products";
import { getCategoryBySlug } from "../data/categories";
import ProductCard from "../components/products/ProductCard";
import Container from "../components/layout/Container";

const CategoryPage = memo(() => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const category = getCategoryBySlug(categorySlug);
  const products = category ? getProductsByCategory(categorySlug) : [];

  if (!category) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-12">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-6">The category you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate("/products")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-150"
            >
              Back to Products
            </button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 border-b border-gray-200 py-12 sm:py-16 lg:py-20">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm">
            <Link to="/products" className="text-gray-600 hover:text-blue-600 transition duration-150">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600 font-semibold">{category.name}</span>
          </div>

          {/* Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl"
          >
            <div className="inline-block mb-4 text-3xl">{category.icon}</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {category.name}
            </h1>
            <p className="text-lg text-gray-600 mb-2">{category.description}</p>
            <p className="text-sm text-gray-500">{products.length} products available</p>
          </motion.div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          {products.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <ProductCard product={product} categorySlug={categorySlug} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
});

CategoryPage.displayName = "CategoryPage";

export default CategoryPage;
