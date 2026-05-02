import { motion } from "framer-motion";

const trustPoints = [
  {
    id: 1,
    title: "Trusted By Contractors",
    description:
      "Preferred supplier for contractors handling commercial, residential, and industrial ceiling projects across Delhi NCR and beyond.",
  },
  {
    id: 2,
    title: "Architect Approved",
    description:
      "Architects and interior consultants rely on our premium ceiling systems, gypsum boards, and insulation materials for quality execution.",
  },
  {
    id: 3,
    title: "Bulk Procurement Ready",
    description:
      "Fast quotation support and reliable supply for large-scale procurement, builder requirements, and ongoing construction projects.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-accent tracking-[0.35em] text-sm uppercase mb-5">
            Project Credibility
          </p>

          <h2 className="font-heading text-5xl md:text-6xl leading-tight max-w-5xl mb-6">
            Trusted By Professionals
            <br />
            Who Build Serious Projects
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            We support builders, contractors, architects, and procurement teams
            with premium ceiling systems, insulation materials, and reliable
            project-based supply solutions.
          </p>
        </motion.div>

        {/* Credibility Cards */}
        <div className="grid md:grid-cols-3 gap-7 mb-24">
          {trustPoints.map((item, index) => (
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

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Premium Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10
          bg-gradient-to-br from-white/[0.05] to-white/[0.02]
          p-10 md:p-14"
        >
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-4xl font-semibold mb-2">500+</h3>
              <p className="text-gray-400">
                Projects Supported
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold mb-2">25+</h3>
              <p className="text-gray-400">
                Product Categories
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold mb-2">10+</h3>
              <p className="text-gray-400">
                Premium Brand Partners
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold mb-2">Fast</h3>
              <p className="text-gray-400">
                Quote Response Time
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}