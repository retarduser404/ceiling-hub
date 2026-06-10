import { motion } from "framer-motion";
import { memo } from "react";

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

function TrustSection() {
  return (
    <section className="bg-white py-20 sm:py-28 border-t border-gray-200">
      <div className="container-width px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-600 tracking-widest text-xs sm:text-sm uppercase mb-4 font-semibold">
            Project Credibility
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-5xl mb-5">
            Trusted By Professionals<br />Who Build Quality Projects
          </h2>

          <p className="text-gray-700 text-base sm:text-lg max-w-3xl leading-relaxed">
            We support builders, contractors, architects, and procurement teams with premium ceiling systems, insulation materials, and reliable project-based supply solutions.
          </p>
        </motion.div>

        {/* Credibility Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {trustPoints.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="rounded-xl border border-gray-200 bg-white p-7 hover:shadow-lg hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Premium Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 bg-gray-50 shadow-md p-8 sm:p-12"
        >
          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-r border-gray-200 pr-8">
              <h3 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-700 text-sm font-medium">Projects Supported</p>
            </div>
            <div className="border-r border-gray-200 pr-8">
              <h3 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">25+</h3>
              <p className="text-gray-700 text-sm font-medium">Product Categories</p>
            </div>
            <div className="border-r border-gray-200 pr-8">
              <h3 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">10+</h3>
              <p className="text-gray-700 text-sm font-medium">Trusted Brands</p>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">Pan</h3>
              <p className="text-gray-700 text-sm font-medium">India Coverage</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(TrustSection);