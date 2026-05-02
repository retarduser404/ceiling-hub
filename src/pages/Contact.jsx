import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 border-b border-white/10">
        <div className="container-width">

          <p className="text-accent tracking-[0.3em] text-sm uppercase mb-4">
            Contact Ceiling Hub
          </p>

          <h1 className="font-heading text-5xl md:text-7xl leading-tight mb-6">
            Let’s Build
            <br />
            Something Exceptional
          </h1>

          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Reach out for premium ceiling systems, insulation
            materials, gypsum products, commercial bulk orders,
            and expert project consultation across India.
          </p>

        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 border-b border-white/10">
        <div className="container-width">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <FiPhone className="text-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Call Us
              </h3>
              <p className="text-gray-400">
                +91 76786 54408
              </p>
              <p className="text-gray-400">
                +91 96251 09477
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <FiMail className="text-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Email Support
              </h3>
              <p className="text-gray-400 break-all">
                ceilinghubpvtltd@gmail.com
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <FiMapPin className="text-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Location
              </h3>
              <p className="text-gray-400">
                Delhi NCR,
                India
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <FiArrowRight className="text-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Business Support
              </h3>
              <p className="text-gray-400">
                Bulk orders, contractors,
                architects & builders
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Inquiry Form UI */}
      <section className="py-24 border-b border-white/10">
        <div className="container-width">

          <div className="max-w-4xl mx-auto">

            <h2 className="font-heading text-4xl md:text-5xl mb-10">
              Send Your Requirement
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="bg-white/[0.03] border border-white/10
                rounded-xl px-6 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="bg-white/[0.03] border border-white/10
                rounded-xl px-6 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/[0.03] border border-white/10
                rounded-xl px-6 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Project Type"
                className="bg-white/[0.03] border border-white/10
                rounded-xl px-6 py-4 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your project requirement..."
                className="md:col-span-2 bg-white/[0.03]
                border border-white/10 rounded-xl
                px-6 py-4 outline-none"
              />

            </div>

            <button
              className="mt-8 px-8 py-4 bg-white text-black
              rounded-xl font-semibold hover:scale-[1.02]
              transition duration-300"
            >
              Submit Inquiry
            </button>

          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container-width">

          <div className="rounded-3xl border border-white/10
          bg-gradient-to-br from-white/[0.04] to-white/[0.02]
          p-12 md:p-16 text-center">

            <p className="text-accent uppercase text-sm mb-4 tracking-[0.2em]">
              Fast Response
            </p>

            <h2 className="font-heading text-4xl md:text-6xl mb-6">
              Need Immediate Pricing?
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl
            mx-auto mb-10">
              Contact our team directly on WhatsApp for
              faster quotations and technical support.
            </p>

            <a
              href="https://wa.me/917678654408"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
              px-8 py-4 bg-white text-black rounded-xl
              font-semibold"
            >
              WhatsApp Us
              <FiArrowRight />
            </a>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}