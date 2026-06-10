import { memo, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProductBySlug, getRelatedProducts } from "../data/products";
import { getCategoryBySlug } from "../data/categories";
import Container from "../components/layout/Container";
import ProductCard from "../components/products/ProductCard";

const ProductDetailPage = memo(() => {
  const { categorySlug, productSlug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = getProductBySlug(productSlug);
  const category = getCategoryBySlug(categorySlug);
  const relatedProducts = product ? getRelatedProducts(productSlug, 4) : [];

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productSlug]);

  if (!product || !category) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-12">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
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
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <Container>
          <div className="flex items-center gap-2 text-sm">
            <Link to="/products" className="text-gray-600 hover:text-blue-600 transition">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <Link to={`/products/${categorySlug}`} className="text-gray-600 hover:text-blue-600 transition">
              {category.name}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600 font-semibold">{product.name}</span>
          </div>
        </Container>
      </section>

      {/* Product Detail */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Product Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col"
            >
              {/* Brand */}
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
                {product.brand}
              </p>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{product.fullDescription}</p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  to="/support"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 text-center"
                >
                  Get Quote
                </Link>
                <a
                  href="https://wa.me/?text=Hi%20I'm%20interested%20in%20your%20product"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-150 text-center"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications Table */}
              {Object.keys(product.specifications).length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Specifications</h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value], idx) => (
                          <tr
                            key={idx}
                            className={`border-b ${
                              idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                            } border-gray-200 last:border-b-0`}
                          >
                            <td className="px-4 py-3 text-sm font-semibold text-gray-900 w-1/3">
                              {key}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right: Product Images */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-4 sticky top-0 h-fit z-10"
            >
              {/* Main Image */}
              <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden aspect-square">
                {product.images && product.images[selectedImage] ? (
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition duration-150 ${
                        selectedImage === idx ? "border-blue-600" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-t border-gray-200">
          <Container>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relProduct, idx) => (
                  <motion.div
                    key={relProduct.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <ProductCard product={relProduct} categorySlug={categorySlug} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      )}
    </div>
  );
});

ProductDetailPage.displayName = "ProductDetailPage";

export default ProductDetailPage;
