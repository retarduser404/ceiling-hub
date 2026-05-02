import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BrandsSection from "../components/home/BrandsSection";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export default function Brands() {
  const trustPoints = [
    "Authorized premium brand sourcing",
    "Commercial project supply expertise",
    "Bulk procurement support",
    "Trusted by architects & contractors",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 border-b border-white/10">
        <div className="container-width">

          <p className="text-accent tracking-[0.3em] text-sm uppercase mb-4">
            Trusted Manufacturers
          </p>

          <h1 className="font-heading text-5xl md:text-7xl leading-tight mb-6">
            Premium Brands
            <br />
            Built For Serious Projects
          </h1>

          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Ceiling Hub partners with India’s leading ceiling,
            insulation, gypsum, and construction brands to deliver
            high-performance materials for commercial and residential
            projects at scale.
          </p>

        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 border-b border-white/10">
        <div className="container-width">

          <h2 className="font-heading text-4xl md:text-5xl mb-14">
            Why Our Brand Network Matters
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl
                border border-white/10 bg-white/[0.02]"
              >
                <div className="w-6 h-6 rounded-full
                bg-white text-black flex items-center
                justify-center mt-1">
                  <FiCheck />
                </div>

                <p className="text-gray-300 text-lg">
                  {point}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Existing Brand Showcase */}
      <BrandsSection />

      {/* Final CTA */}
      <section className="py-24">
        <div className="container-width">

          <div className="rounded-3xl border border-white/10
          bg-gradient-to-br from-white/[0.04] to-white/[0.02]
          p-12 md:p-16 text-center">

            <p className="text-accent uppercase text-sm mb-4 tracking-[0.2em]">
              Partner With Us
            </p>

            <h2 className="font-heading text-4xl md:text-6xl mb-6">
              Need Bulk Supply
              <br />
              For Your Next Project?
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl
            mx-auto mb-10">
              Get premium materials, reliable sourcing,
              and fast commercial quotations for your
              construction and interior projects.
            </p>

            <a
              href="https://wa.me/917678654408"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
              px-8 py-4 bg-white text-black rounded-xl
              font-semibold hover:scale-[1.02]
              transition duration-300"
            >
              Get Bulk Quote
              <FiArrowRight />
            </a>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}