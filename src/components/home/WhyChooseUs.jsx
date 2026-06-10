import { motion } from "framer-motion";
import { memo } from "react";

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

const ReasonCard = memo(({ item, index }) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="rounded-xl border border-gray-200 bg-white p-6 sm:p-7 hover:shadow-lg hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
  >
    <div className="mb-4">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
        {index + 1}
      </span>
    </div>

    <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
      {item.title}
    </h3>

    <p className="text-gray-700 text-sm leading-relaxed">
      {item.description}
    </p>
  </motion.div>
));

ReasonCard.displayName = "ReasonCard";

function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 border-t border-gray-200">
      <div className="container-width px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center sm:text-left"
        >
          <p className="text-blue-600 tracking-widest text-xs sm:text-sm uppercase mb-3 font-semibold">
            Why Choose Ceiling Hub
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-5xl mb-5">
            Built For Quality Projects, Trusted By Professionals
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-3xl leading-relaxed mx-auto sm:mx-0">
            We help contractors and architects source premium ceiling systems and construction solutions with confidence and reliability.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {reasons.map((item, index) => (
            <ReasonCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 bg-white shadow-md p-8 sm:p-14"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            <div className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0 sm:pr-8">
              <h3 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-700 text-sm sm:text-base font-medium">Projects Supported Across India</p>
            </div>
            <div className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0 sm:pr-8">
              <h3 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">25+</h3>
              <p className="text-gray-700 text-sm sm:text-base font-medium">Premium Product Categories</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">10+</h3>
              <p className="text-gray-700 text-sm sm:text-base font-medium">Industry Leading Brands</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(WhyChooseUs);