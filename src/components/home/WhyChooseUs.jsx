import { motion } from "framer-motion";

const reasons = [
  {
    id: 1,
    title: "Premium Brand Partnerships",
    description:
      "We supply trusted products from industry leaders like Gyproc, Armstrong, Rockwool, Bison, UP Twiga, and Ramco Hilux.",
  },
  {
    id: 2,
    title: "Fast Bulk Quotations",
    description:
      "Quick response for contractors, architects, builders, and project consultants handling commercial and large-scale requirements.",
  },
  {
    id: 3,
    title: "Technical Product Guidance",
    description:
      "Our experts help you choose the right ceiling systems, insulation materials, and construction products based on project needs.",
  },
  {
    id: 4,
    title: "Pan India Supply Support",
    description:
      "Reliable supply chain support for residential, commercial, and industrial projects across multiple locations in India.",
  },
  {
    id: 5,
    title: "Contractor & Architect Trusted",
    description:
      "Preferred by builders, contractors, interior consultants, and architects for premium ceiling and false ceiling solutions.",
  },
  {
    id: 6,
    title: "Project-Based Consultation",
    description:
      "From BOQ support to product recommendations, we help clients source smarter for both small and large-scale projects.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-accent tracking-[0.35em] text-sm uppercase mb-5">
            Why Choose Ceiling Hub
          </p>

          <h2 className="font-heading text-5xl md:text-6xl leading-tight max-w-5xl mb-6">
            Built For Serious Projects,
            <br />
            Trusted By Industry Professionals
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            We help contractors, builders, architects, and project consultants
            source premium ceiling systems, insulation materials, gypsum boards,
            and construction solutions with confidence and speed.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10
              bg-white/[0.02] p-8 hover:bg-white/[0.04]
              hover:border-white/20 transition duration-500"
            >
              <div className="mb-6">
                <span className="text-accent text-3xl font-semibold">
                  0{item.id}
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-4 leading-snug">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-white/10
          bg-gradient-to-br from-white/[0.04] to-white/[0.02]
          p-10 md:p-14"
        >
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-4xl font-semibold mb-2">500+</h3>
              <p className="text-gray-400">
                Projects Supported Across Commercial & Residential Spaces
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold mb-2">25+</h3>
              <p className="text-gray-400">
                Premium Product Categories Across Ceiling & Insulation Systems
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-400">
                Quick Quotes, Consultation & Technical Support For Bulk Orders
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}