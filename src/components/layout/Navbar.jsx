import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-5">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-8 py-5">

            {/* Logo */}
           <Link
  to="/"
  className="flex items-center gap-3"
>
  <img
    src={logo}
    alt="Ceiling Hub"
    className="h-10 w-auto object-contain"
  />

  <span className="text-white font-semibold text-xl tracking-wide">
    Ceiling Hub
  </span>
</Link>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-10 text-sm text-white/80">

              <Link
                to="/"
                className="hover:text-white transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="hover:text-white transition duration-300"
              >
                Products
              </Link>

              <Link
                to="/brands"
                className="hover:text-white transition duration-300"
              >
                Brands
              </Link>

              <Link
                to="/support"
                className="hover:text-white transition duration-300"
              >
                Support
              </Link>

              <Link
                to="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact
              </Link>

            </nav>

            {/* CTA */}
            <Link
              to="/support"
              className="hidden md:flex bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition duration-300"
            >
              Get Quote
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
}