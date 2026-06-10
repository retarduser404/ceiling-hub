import React, { memo, useState } from 'react';
import Footer from '../components/layout/Footer';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    requirement: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: '',
      requirement: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-width px-4 sm:px-6">
          <p className="text-blue-600 tracking-widest text-xs sm:text-sm uppercase mb-4 font-semibold">
            Get In Touch
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
            Fast Quotations & Support
          </h1>

          <p className="text-gray-700 max-w-3xl text-base sm:text-lg leading-relaxed">
            Reach out for quick quotations on ceiling systems, gypsum boards, insulation materials, and construction solutions. Our team supports contractors, architects, and builders across India.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-24 border-b border-gray-200">
        <div className="container-width px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-7 sm:p-8 hover:shadow-md transition-shadow duration-200">
              <div className="text-blue-600 text-2xl mb-4 inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg">
                <FiPhone />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Call Us
              </h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p className="font-medium">+91 76786 54408</p>
                <p className="font-medium">+91 96251 09477</p>
                <p className="text-xs text-gray-600 mt-3">Available Mon-Sat, 9 AM - 6 PM</p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-7 sm:p-8 hover:shadow-md transition-shadow duration-200">
              <div className="text-blue-600 text-2xl mb-4 inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg">
                <FiMail />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Email
              </h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p className="break-all font-medium">ceilinghubpvtltd@gmail.com</p>
                <p className="text-xs text-gray-600 mt-3">We respond within 2 hours</p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-7 sm:p-8 hover:shadow-md transition-shadow duration-200">
              <div className="text-blue-600 text-2xl mb-4 inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg">
                <FiMapPin />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Location
              </h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p className="font-medium">Delhi NCR, India</p>
                <p className="text-xs text-gray-600 mt-3">Pan-India delivery available</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 border-b border-gray-200">
        <div className="container-width px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Send Your Requirement
              </h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Fill out the form and our team will contact you within 2 hours with a tailored quotation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />

                <input
                  type="text"
                  name="projectType"
                  placeholder="Project Type"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <textarea
                name="requirement"
                rows="5"
                placeholder="Describe your material requirements, project scope, and timeline..."
                value={formData.requirement}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Submit Inquiry
                </button>

                <a
                  href="https://wa.me/917678654408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-white border border-gray-300 text-gray-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  WhatsApp
                </a>
              </div>
            </form>

          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 sm:py-20">
        <div className="container-width px-4 sm:px-6">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-r from-blue-50 to-gray-50 shadow-md p-8 sm:p-12 text-center">
            <p className="text-blue-600 tracking-widest text-xs sm:text-sm uppercase mb-4 font-semibold">
              Fast Response Guarantee
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Need Immediate Support?
            </h2>

            <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              WhatsApp us for faster quotations and technical support. Average response time: 15 minutes.
            </p>

            <a
              href="https://wa.me/917678654408"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
