import { Link } from "react-router-dom";
import { memo } from "react";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-width py-16 sm:py-20 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <h2 className="text-gray-900 text-xl sm:text-2xl font-bold mb-6">
              Ceiling Hub
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Premium ceiling systems, gypsum boards, insulation materials, and interior construction solutions trusted across India.
            </p>

            <a
              href="https://wa.me/917678654408"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors duration-200"
            >
              WhatsApp Us →
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-600">
              <Link to="/" className="hover:text-white transition-colors duration-200 text-sm">
                Home
              </Link>

              <Link to="/products" className="hover:text-white transition-colors duration-200 text-sm">
                Products
              </Link>

              <Link to="/brands" className="hover:text-white transition-colors duration-200 text-sm">
                Brands
              </Link>

              <Link to="/support" className="hover:text-white transition-colors duration-200 text-sm">
                Support
              </Link>

              <Link to="/contact" className="hover:text-gray-900 transition-colors duration-200 text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Top Products */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-6">
              Top Products
            </h3>

            <div className="flex flex-col gap-3 text-gray-600 text-sm">
              <p>Gypsum Board</p>
              <p>Armstrong Ceiling</p>
              <p>Rockwool Insulation</p>
              <p>Bison Board</p>
              <p>Glasswool Insulation</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-6">
              Contact Info
            </h3>

            <div className="flex flex-col gap-3 text-gray-600 text-sm">
              <p>+91 76786 54408</p>
              <p>+91 96251 09477</p>
              <p>+91 70656 57604</p>

              <p className="pt-2 text-gray-700">
                ceilinghubpvtltd@gmail.com
              </p>

              <p className="pt-2 text-gray-700">
                Delhi NCR, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Ceiling Hub Pvt Ltd. All rights reserved.
          </p>

          <p className="text-gray-600 text-sm">
            Premium Ceiling & Insulation Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);