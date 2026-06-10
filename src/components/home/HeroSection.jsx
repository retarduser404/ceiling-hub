import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-gray-50 border-b border-gray-200 py-12 sm:py-20">
      <div className="container-width px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* LEFT */}
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-2">
              Premium Building Materials
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Complete Ceiling & Insulation Solutions
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
              Quality gypsum boards, false ceiling systems, insulation materials, and construction solutions trusted by contractors, architects, and builders across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                to="/products"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 text-center"
              >
                View Products
              </Link>

              <Link
                to="/support"
                className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-150 text-center"
              >
                Get Quotation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold text-gray-900">25+</p>
                <p className="text-sm text-gray-600">Product Categories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">10+</p>
                <p className="text-sm text-gray-600">Trusted Brands</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-3">
                Why Choose Us
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Industry Leaders
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span>Premium partnerships with global brands</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span>Fast quotations for bulk orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span>Pan-India supply support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span>Expert technical guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}