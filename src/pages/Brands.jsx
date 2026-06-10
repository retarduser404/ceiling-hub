import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/layout/Footer';
import BrandsSection from '../components/home/BrandsSection';
import { FiCheck } from 'react-icons/fi';

const Brands = memo(() => {
  const trustPoints = [
    'Authorized premium brand sourcing',
    'Commercial project supply expertise',
    'Bulk procurement support',
    'Trusted by architects & contractors',
    'Fast delivery across India',
    'Technical support & consultation'
  ];

  const brandBenefits = [
    {
      title: 'Quality Assurance',
      description: 'All brands are certified and tested for durability and performance in commercial applications.'
    },
    {
      title: 'Competitive Pricing',
      description: 'Direct sourcing ensures the best market rates for bulk and retail projects.'
    },
    {
      title: 'Expert Support',
      description: 'Our team provides technical guidance and product selection for optimal project outcomes.'
    },
    {
      title: 'Reliable Delivery',
      description: 'Fast and secure delivery across commercial projects nationwide.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="container-width px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-blue-600 font-semibold tracking-widest text-xs sm:text-sm uppercase mb-4"
            >
              Trusted Manufacturers
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Premium Brands Built For Serious Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Ceiling Hub partners with India's leading ceiling, insulation, gypsum, and construction brands to deliver high-performance materials for commercial and residential projects at scale.
            </motion.p>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 h-1 w-16 bg-blue-600 mx-auto rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="container-width px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Why Our Brand Network Matters
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                className="flex gap-4 p-6 rounded-lg border border-gray-200 bg-white hover:shadow-md hover:border-blue-400 transition-all duration-200 group"
              >
                <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-100 transition-colors duration-200">
                  <FiCheck className="w-4 h-4" />
                </div>
                <p className="text-gray-700 text-lg font-medium">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-width px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            What Sets Us Apart
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                className="p-8 rounded-lg border border-gray-200 bg-white hover:shadow-lg hover:border-blue-400 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <BrandsSection />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="container-width px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Need Bulk Supply For Your Next Project?
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              Get premium materials, reliable sourcing, and fast commercial quotations for your construction and interior projects.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/917678654408"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 shadow-sm"
              >
                Get Bulk Quote
              </a>
              <a
                href="/contact"
                className="border border-blue-600 text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 hover:border-blue-700 hover:shadow-md"
              >
                Contact Sales
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

Brands.displayName = 'Brands';

export default Brands;
