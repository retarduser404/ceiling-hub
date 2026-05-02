import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export default function Support() {
  const processSteps = [
    "Requirement Discussion",
    "Technical Product Consultation",
    "Site Evaluation & Recommendations",
    "Quotation + Delivery Planning",
  ];

  const whyChooseUs = [
    "Premium brand partnerships across India",
    "Bulk order handling for commercial projects",
    "Fast quotation support with expert guidance",
    "Trusted by contractors, architects & builders",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 border-b border-white/10">
        <div className="container-width">

          <p className="text-accent tracking-[0.3em] text-sm uppercase mb-4">
            Expert Consultation
          </p>

          <h1 className="font-heading text-5xl md:text-7xl leading-tight mb-6">
            Project Support
            <br />
            Built For Serious Work
          </h1>

          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            From product selection to bulk order execution,
            Ceiling Hub helps contractors, architects, builders,
            and commercial buyers choose the right ceiling,
            insulation, and gypsum systems for every project.
          </p>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 border-b border-white/10">
        <div className="container-width">

          <h2 className="font-heading text-4xl md:text-5xl mb-14">
            Our Consultation Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10
                bg-white/[0.02] p-8"
              >
                <p className="text-accent text-sm mb-3">
                  Step {index + 1}
                </p>

                <h3 className="text-xl font-medium">
                  {step}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 border-b border-white/10">
        <div className="container-width">

          <h2 className="font-heading text-4xl md:text-5xl mb-14">
            Why Choose Ceiling Hub
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
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
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container-width">

          <div className="rounded-3xl border border-white/10
          bg-gradient-to-br from-white/[0.04] to-white/[0.02]
          p-12 md:p-16 text-center">

            <p className="text-accent tracking-[0.2em]
            uppercase text-sm mb-4">
              Let’s Build
            </p>

            <h2 className="font-heading text-4xl md:text-6xl mb-6">
              Ready For Your Next Project?
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto
            text-lg mb-10">
              Get expert recommendations, premium materials,
              and fast project quotations from our specialists.
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
              Get Expert Consultation
              <FiArrowRight />
            </a>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}