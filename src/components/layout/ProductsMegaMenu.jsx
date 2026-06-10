import { memo, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../../data/products";

const ProductsMegaMenu = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  // Group products by category with slug info
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category || "Other";
    const categorySlug = product.categorySlug || "general";
    if (!acc[category]) {
      acc[category] = {
        slug: categorySlug,
        products: [],
      };
    }
    acc[category].products.push(product);
    return acc;
  }, {});

  const categories = Object.entries(groupedProducts).map(([name, data]) => ({
    name,
    slug: data.slug,
    products: data.products.slice(0, 5), // Limit to 5 products per category for mega menu
    description: getDescription(name),
  }));

  function getDescription(categoryName) {
    const descriptions = {
      "Gypsum Boards": "Premium drywall solutions for modern interiors",
      "Ceiling Systems": "Professional suspended ceiling systems",
      "Ceiling Tiles": "High-performance acoustic ceiling tiles",
      "Insulation Materials": "Thermal and acoustic insulation products",
      "Cement Boards": "Durable cement boards for wet areas",
      "Gypsum Products": "Complete gypsum product line",
    };
    return descriptions[categoryName] || "Quality construction materials";
  }

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = (e) => {
    // Check if moving to menu
    if (
      e.relatedTarget &&
      menuRef.current &&
      e.relatedTarget instanceof Node &&
      menuRef.current.contains(e.relatedTarget)
    ) {
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleMenuMouseLeave = (e) => {
    // Check if moving to trigger
    if (
      e.relatedTarget &&
      triggerRef.current &&
      e.relatedTarget instanceof Node &&
      triggerRef.current.contains(e.relatedTarget)
    ) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    // Check if mobile using media query (more reliable than window.innerWidth)
    const checkMobile = () => {
      const mediaQuery = window.matchMedia("(max-width: 767px)");
      setIsMobile(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setIsOpen(false); // Close menu when resizing to desktop
      }
    };

    checkMobile();
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    mediaQuery.addEventListener("change", checkMobile);

    // Handle clicking outside the menu on mobile
    const handleClickOutside = (e) => {
      if (
        isMobile &&
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      mediaQuery.removeEventListener("change", checkMobile);
      document.removeEventListener("click", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isMobile, isOpen]);

  

  // Animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -8,
      pointerEvents: "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      pointerEvents: "none",
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -4 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.02,
        duration: 0.15,
      },
    }),
  };

  return (
    <div ref={containerRef} className="relative w-full md:w-auto">
      {/* MOBILE VERSION - Touch/Click Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition duration-150 font-medium text-gray-700"
        >
          <span>Products</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-lg"
          >
            ▼
          </motion.span>
        </button>

        {/* Mobile Dropdown Menu - Full Width, Single Column */}
        <AnimatePresence>
          {isOpen && isMobile && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full bg-white border-b border-gray-200/50 shadow-lg z-40 overflow-hidden"
            >
              <div className="w-full py-3">
                {/* Mobile Single Column Layout */}
                <div className="space-y-0">
                  {categories.map((category) => (
                    <div key={category.name} className="border-b border-gray-100/50">
                      {/* Category Header - Clickable */}
                      <Link
                        to={`/products/${category.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 hover:bg-blue-50 transition duration-150"
                      >
                        <h3 className="text-sm font-bold text-gray-900 hover:text-blue-600 transition duration-150">
                          {category.name}
                        </h3>
                        <p className="text-xs text-gray-600 mt-0.5">
                          {category.description}
                        </p>
                      </Link>

                      {/* Products List */}
                      <ul className="bg-gray-50/50">
                        {category.products.map((product) => (
                          <li key={product.id} className="border-t border-gray-100/30">
                            <Link
                              to={`/products/${product.categorySlug}/${product.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="block px-6 py-2.5 text-xs text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-150 flex items-center gap-2"
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                              <span>{product.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {/* View All Link */}
                      {category.products.length > 0 && (
                        <div className="px-4 py-2 bg-gray-50/50">
                          <Link
                            to={`/products/${category.slug}`}
                            onClick={() => setIsOpen(false)}
                            className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition duration-150 inline-flex items-center gap-1"
                          >
                            View All
                            <span>→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Quick Links for Mobile */}
                  <div className="border-t border-gray-200 pt-3">
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-bold text-gray-900 mb-3">
                        Quick Links
                      </h3>
                    </div>
                    <ul className="space-y-0">
                      <li>
                        <Link
                          to="/products"
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-xs text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-150 flex items-center gap-2"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          All Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/brands"
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-xs text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-150 flex items-center gap-2"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          Top Brands
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/support"
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-xs text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-150 flex items-center gap-2"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          Get Support
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* DESKTOP VERSION - Hover Mega Menu (unchanged from original) */}
      <div className="hidden md:block">
        {/* Trigger */}
        <div
          ref={triggerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <button className="hover:text-blue-600 transition duration-150 font-medium text-gray-700">
            Products
          </button>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onMouseLeave={handleMenuMouseLeave}
              onMouseEnter={() => clearTimeout(timeoutRef.current)}
              className="fixed inset-x-0 top-20 w-full bg-white border-b border-gray-200/50 shadow-xl z-40"
            >
              <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8">
                {/* Mega Menu Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {categories.map((category, categoryIdx) => (
                    <motion.div
                      key={category.name}
                      custom={categoryIdx}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-4"
                    >
                      {/* Category Header - Now Clickable */}
                      <Link
                        to={`/products/${category.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block border-b border-gray-200 pb-3 hover:text-blue-600 transition duration-150"
                      >
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider group-hover:text-blue-600">
                          {category.name}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1 leading-snug">
                          {category.description}
                        </p>
                      </Link>

                      {/* Products List */}
                      <ul className="space-y-2.5">
                        {category.products.map((product) => (
                          <motion.li
                            key={product.id}
                            variants={itemVariants}
                            custom={categoryIdx + 1}
                            initial="hidden"
                            animate="visible"
                          >
                            <Link
                              to={`/products/${product.categorySlug}/${product.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="group flex items-start gap-2 text-xs text-gray-700 hover:text-blue-600 transition duration-150"
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 group-hover:bg-blue-600 transition duration-150 flex-shrink-0" />
                              <span className="group-hover:font-medium transition duration-150">
                                {product.name}
                              </span>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>

                      {/* View All Link */}
                      {category.products.length > 0 && (
                        <motion.div
                          variants={itemVariants}
                          custom={categoryIdx + 2}
                          initial="hidden"
                          animate="visible"
                          className="pt-2 border-t border-gray-200/50"
                        >
                          <Link
                            to={`/products/${category.slug}`}
                            onClick={() => setIsOpen(false)}
                            className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition duration-150 inline-flex items-center gap-1"
                          >
                            View All
                            <span className="text-xs">→</span>
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}

                  {/* Quick Links Section */}
                  <motion.div
                    custom={categories.length}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4 bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-lg border border-blue-200/30"
                  >
                    <div className="border-b border-blue-200 pb-3">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                        Quick Links
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        Explore our catalog
                      </p>
                    </div>

                    <ul className="space-y-2.5">
                      <li>
                        <Link
                          to="/products"
                          onClick={() => setIsOpen(false)}
                          className="group flex items-start gap-2 text-xs text-gray-700 hover:text-blue-600 transition duration-150"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 group-hover:bg-blue-600 transition duration-150 flex-shrink-0" />
                          <span className="group-hover:font-medium transition duration-150">
                            All Products
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/brands"
                          onClick={() => setIsOpen(false)}
                          className="group flex items-start gap-2 text-xs text-gray-700 hover:text-blue-600 transition duration-150"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 group-hover:bg-blue-600 transition duration-150 flex-shrink-0" />
                          <span className="group-hover:font-medium transition duration-150">
                            Top Brands
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/support"
                          onClick={() => setIsOpen(false)}
                          className="group flex items-start gap-2 text-xs text-gray-700 hover:text-blue-600 transition duration-150"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 group-hover:bg-blue-600 transition duration-150 flex-shrink-0" />
                          <span className="group-hover:font-medium transition duration-150">
                            Get Support
                          </span>
                        </Link>
                      </li>
                    </ul>

                    {/* CTA Button */}
                    <motion.div
                      variants={itemVariants}
                      custom={categories.length + 1}
                      initial="hidden"
                      animate="visible"
                      className="pt-3 border-t border-blue-200 mt-4"
                    >
                      <Link
                        to="/support"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center bg-blue-600 text-white text-xs font-semibold py-2 rounded hover:bg-blue-700 transition duration-150"
                      >
                        Get Quote
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

ProductsMegaMenu.displayName = "ProductsMegaMenu";

export default ProductsMegaMenu;
