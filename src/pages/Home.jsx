import { memo } from "react";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import BrandsSection from "../components/home/BrandsSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import TrustSection from "../components/home/TrustSection";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      <HeroSection />

      <WhyChooseUs />

      <BrandsSection />

      <FeaturedProducts />

      <TrustSection />

      {/* Premium CTA Section */}
      <section className="bg-white py-16 sm:py-24 border-t border-gray-200">
        <div className="container-width px-4 sm:px-6">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-md p-8 sm:p-14">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

              {/* Left */}
              <div>
                <p className="text-blue-600 tracking-widest text-xs sm:text-sm uppercase mb-4 font-semibold">
                  Bulk Order Support
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                  Ready To Source Premium Materials?
                </h2>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                  Fast quotations for ceiling systems, gypsum boards, insulation materials, and construction solutions. Trusted by contractors, builders, and architects across India.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 text-gray-700 text-sm">
                  <div className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Quick Quotations</div>
                  <div className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Premium Brands</div>
                  <div className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Bulk Support</div>
                  <div className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Pan India Supply</div>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-4 lg:items-end">

                <a
                  href="https://wa.me/917678654408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-[300px] text-center bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  WhatsApp Quote
                </a>

                <a
                  href="tel:+917678654408"
                  className="w-full lg:w-[300px] text-center border border-gray-300 text-gray-900 px-8 py-3.5 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                >
                  Call Now
                </a>

                <Link
                  to="/support"
                  className="w-full lg:w-[300px] text-center border border-gray-300 text-gray-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  Get Consultation
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default memo(Home);

Home.displayName = "Home";