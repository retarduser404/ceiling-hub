import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container-width py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <h2 className="text-white text-2xl font-semibold mb-6">
              Ceiling Hub
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Premium ceiling systems, gypsum boards, insulation materials,
              and interior construction solutions trusted across India.
            </p>

            <a
              href="https://wa.me/917678654408"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-white transition"
            >
              WhatsApp Us →
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>

              <Link to="/products" className="hover:text-white transition">
                Products
              </Link>

              <Link to="/brands" className="hover:text-white transition">
                Brands
              </Link>

              <Link to="/support" className="hover:text-white transition">
                Support
              </Link>

              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Top Products */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">
              Top Products
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <p>Gypsum Board</p>
              <p>Armstrong Ceiling System</p>
              <p>Rockwool Insulation</p>
              <p>Bison Board</p>
              <p>Glasswool Insulation</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">
              Contact Info
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <p>+91 76786 54408</p>
              <p>+91 96251 09477</p>
              <p>+91 70656 57604</p>

              <p className="pt-2">
                ceilinghubpvtltd@gmail.com
              </p>

              <p className="pt-2">
                Delhi NCR, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Ceiling Hub Pvt Ltd. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Premium Ceiling & Insulation Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}