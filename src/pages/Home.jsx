import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import BrandsSection from "../components/home/BrandsSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import TrustSection from "../components/home/TrustSection";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <WhyChooseUs />

      <BrandsSection />

      <FeaturedProducts />

      <TrustSection />

      {/* Final High-Converting CTA Section */}
      <section className="bg-black py-28 border-t border-white/10">
        <div className="container-width">
          <div
            className="rounded-3xl border border-white/10
            bg-gradient-to-br from-white/[0.05] to-white/[0.02]
            p-10 md:p-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left */}
              <div>
                <p className="text-accent tracking-[0.35em] text-sm uppercase mb-5">
                  Bulk Supply Support
                </p>

                <h2 className="font-heading text-4xl md:text-6xl leading-tight mb-6">
                  Need Materials For
                  <br />
                  Your Next Project?
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
                  From gypsum boards and false ceiling systems to insulation
                  materials and premium construction solutions — we help
                  contractors, builders, architects, and project consultants
                  source smarter, faster, and better.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
                  <div>✓ Fast Bulk Quotations</div>
                  <div>✓ Premium Brand Supply</div>
                  <div>✓ Commercial Project Support</div>
                  <div>✓ Pan India Delivery</div>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-5 lg:items-end">

                <a
                  href="https://wa.me/917678654408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-[320px] text-center
                  bg-white text-black px-8 py-4 rounded-xl
                  font-semibold hover:scale-[1.02]
                  transition duration-300"
                >
                  WhatsApp For Instant Quote
                </a>

                <a
                  href="tel:+917678654408"
                  className="w-full lg:w-[320px] text-center
                  border border-white/20 px-8 py-4 rounded-xl
                  hover:bg-white hover:text-black
                  transition duration-300"
                >
                  Call Now
                </a>

                <Link
                  to="/support"
                  className="w-full lg:w-[320px] text-center
                  border border-white/20 px-8 py-4 rounded-xl
                  hover:border-white/50
                  transition duration-300"
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