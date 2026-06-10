import { Link } from "react-router-dom";
import { memo } from "react";
import ProductsMegaMenu from "./ProductsMegaMenu";

const Navbar = memo(() => {
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 bg-transparent p-0">
            <video
              src="/animatedlogonew.mp4"
              alt="Ceiling Hub"
              className="h-10 sm:h-12 w-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
              autoPlay
              muted
              loop
              playsInline
            />
            <span className="text-lg sm:text-xl font-bold text-gray-900 hidden sm:inline">
              Ceiling Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <Link
              to="/"
              className="hover:text-blue-600 transition duration-150 font-medium"
            >
              Home
            </Link>
            <ProductsMegaMenu />
            <Link
              to="/brands"
              className="hover:text-blue-600 transition duration-150 font-medium"
            >
              Brands
            </Link>
            <Link
              to="/faq"
              className="hover:text-blue-600 transition duration-150 font-medium"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition duration-150 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation Placeholder */}
          <div className="md:hidden flex-1" />

          {/* CTA */}
          <Link
            to="/support"
            className="bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 text-sm sm:text-base"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Navigation Dropdown Section */}
        <div className="md:hidden">
          <nav className="flex flex-col text-sm text-gray-700 w-full">
            <Link
              to="/"
              className="px-4 py-3 hover:bg-gray-50 transition duration-150 font-medium border-b border-gray-100"
            >
              Home
            </Link>
            <ProductsMegaMenu />
            <Link
              to="/brands"
              className="px-4 py-3 hover:bg-gray-50 transition duration-150 font-medium border-b border-gray-100"
            >
              Brands
            </Link>
            <Link
              to="/faq"
              className="px-4 py-3 hover:bg-gray-50 transition duration-150 font-medium border-b border-gray-100"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="px-4 py-3 hover:bg-gray-50 transition duration-150 font-medium border-b border-gray-100"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;