import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Footer from '../components/layout/Footer';
import { contact } from '../config/contact';

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openAccordion, setOpenAccordion] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = {
    general: [
      {
        question: "What is Ceiling Hub's area of expertise?",
        answer: "Ceiling Hub specializes in supplying Gypsum Plasterboards, Metal Framing and accessories, Jointing and Finishing, Gypsum Plasters, Ceiling tiles, Wall Solutions, Hilux Pattern & Acoustic Tiles, and Glass & Stone wool insulation."
      },
      {
        question: "Which locations do you have offices in?",
        answer: "We have offices in Gurugram, Haryana and serve clients across India. We maintain a strong presence in major metropolitan areas to provide seamless service to our customers."
      },
      {
        question: "Can you serve clients outside your office locations?",
        answer: "Yes, we serve clients Pan-India through our extensive supply network and established distribution channels. We can deliver materials to any location across the country."
      },
      {
        question: "Which brands do you partner with?",
        answer: "We partner with leading brands including Armstrong, Gyproc, Knauf, USG Boral, Everest, Ramco, Saint-Gobain, Gypserra, Weber, Sakarni, and many more premium manufacturers."
      },
      {
        question: "How can I contact Ceiling Hub?",
        answer: `You can reach us via phone at ${contact.phone}, email at ${contact.email}, or WhatsApp for immediate support. Visit our contact page for more information.`
      }
    ],
    products: [
      {
        question: "What types of ceiling systems do you offer?",
        answer: "We offer a wide range of ceiling systems including Armstrong, Gyproc, Knauf, and USG Boral ceiling tiles, grids, and suspension systems. Our selection includes acoustic tiles, mineral fiber tiles, and drop-down systems for various project requirements."
      },
      {
        question: "Do you supply insulation materials?",
        answer: "Yes, we supply Rockwool, Glasswool, and Stone Wool insulation products from brands like Rockwool India, UP Twiga, and other premium manufacturers. These materials are ideal for thermal and acoustic insulation in commercial and residential projects."
      },
      {
        question: "What gypsum board variants are available?",
        answer: "We stock standard, moisture resistant, fire resistant, and acoustic gypsum boards from Gyproc, Knauf, USG, and Sakarni. Our inventory includes specialty boards for specific applications like wall solutions and partition systems."
      }
    ],
    support: [
      {
        question: "Do you provide bulk order support?",
        answer: "Yes, we offer fast quotations and dedicated support for bulk and commercial orders. Our team specializes in handling large-scale projects with competitive pricing and reliable delivery."
      },
      {
        question: "Can I get technical guidance on product selection?",
        answer: "Absolutely. Our team of experts can help you choose the right products based on your project requirements, specifications, and budget. We provide comprehensive technical consultation for optimal project outcomes."
      },
      {
        question: "How do I request a quote?",
        answer: "You can request a quote by clicking the 'Get Quote' button on any page or contacting us directly via phone at +91 7678654408 or WhatsApp for immediate quotations."
      }
    ]
  };

  const tabConfig = [
    { id: 'general', label: 'General Information' },
    { id: 'products', label: 'Product & Solutions' },
    { id: 'support', label: 'Service & Support' }
  ];

  // Filter FAQs based on search query
  const filteredFAQs = useMemo(() => {
    const currentTabFAQs = faqData[activeTab];
    if (!searchQuery.trim()) return currentTabFAQs;

    const query = searchQuery.toLowerCase();
    return currentTabFAQs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }, [activeTab, searchQuery]);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="container-width">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Frequently asked questions
            </h1>
            
            {/* Search Bar */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Looking for something?"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setOpenAccordion(0); // Reset accordion when searching
                  }}
                  className="w-full px-4 py-3 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-10 sm:mt-12 flex flex-wrap gap-6 sm:gap-8 border-b border-gray-200">
            {tabConfig.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setOpenAccordion(0);
                  setSearchQuery('');
                }}
                className={`pb-3 font-medium text-sm sm:text-base transition duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-width">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-0">
                <AnimatePresence>
                  {filteredFAQs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        {/* Question */}
                        <button
                          onClick={() => handleAccordionClick(index)}
                          className="w-full flex items-center justify-between py-4 sm:py-5 text-left hover:bg-gray-100/50 transition duration-200 px-2"
                        >
                          <h3 className="text-sm sm:text-base font-medium text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: openAccordion === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown className="h-5 w-5 text-gray-600" />
                          </motion.div>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                          {openAccordion === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-2 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Divider */}
                        {index < filteredFAQs.length - 1 && (
                          <div className="border-b border-gray-200" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-gray-500 text-sm sm:text-base">
                  No FAQs found matching your search. Please try different keywords.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container-width text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Didn't find what you're looking for?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            Contact our support team for assistance with your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
