import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'general',
    newsletter: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || '❌ Failed to send message.');
      }
    } catch (error) {
      setStatus('❌ Server not responding. Try again later.');
      console.error(error);
    }

    setTimeout(() => setStatus(''), 3000);
  };


  const contactMethods = [
    {
      id: 'phone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone Support",
      description: "Speak directly with our travel experts",
      details: "+91 141 123 4567",
      action: "tel:+911411234567",
      availability: "Mon-Sat, 10AM-7PM IST",
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 'whatsapp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "WhatsApp",
      description: "Quick answers via chat",
      details: "+91 98765 43210",
      action: "https://wa.me/919876543210?text=Hi%20Pink%20City%20Travel,%20I%20have%20a%20question%20about...",
      availability: "24/7 (replies within 2 hours during business hours)",
      color: "bg-green-100 text-green-600"
    },
    {
      id: 'email',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      description: "Send us your detailed inquiries",
      details: "help@pinkcitytravel.com",
      action: "mailto:help@pinkcitytravel.com",
      availability: "Replies within 4 business hours",
      color: "bg-amber-100 text-amber-600"
    },
    {
      id: 'office',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      description: "Meet our team in person",
      details: "C-24, Sawai Jai Singh Highway, Near Hawa Mahal, Jaipur",
      action: "https://goo.gl/maps/XYZ123",
      availability: "Mon-Sat, 10AM-7PM (Appointment recommended)",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <div className="w-[90%] mx-auto py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-block relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg blur opacity-25"></div>
          <h1 className="relative text-4xl font-bold text-gray-900 sm:text-5xl">
            We're Here to Help
          </h1>
        </div>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 font-medium">
          Contact our Jaipur-based travel experts for personalized assistance with your Rajasthan adventure
        </p>
      </motion.div>

      {/* Response Time Alert */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-12 rounded-r-lg"
      >
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <span className="font-bold">⏳ Our current response time:</span> We typically respond within <strong>2 hours</strong> during business hours (10AM–7PM IST). Outside these hours, we'll get back to you the next business day.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Error Message Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Choose Your Preferred Contact Method</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method) => (
              <motion.div
                key={method.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className={`${method.color} p-2 rounded-lg mr-4`}>
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                <p className="font-medium text-gray-900 mb-2">{method.details}</p>
                <p className="text-xs text-gray-500 mb-4">⏱ {method.availability}</p>
                <a
                  href={method.action}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white ${method.id === 'phone' ? 'bg-blue-600 hover:bg-blue-700' :
                    method.id === 'whatsapp' ? 'bg-green-600 hover:bg-green-700' :
                      method.id === 'email' ? 'bg-amber-600 hover:bg-amber-700' :
                        'bg-purple-600 hover:bg-purple-700'
                    } transition-colors`}
                >
                  Contact via {method.title.split(' ')[0]}
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Emergency Contact</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    For urgent assistance during your trip (current travelers only):
                  </p>
                  <p className="font-bold mt-1">+91 98765 43210 (24/7)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  What can we help you with?
                </label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    { id: 'general', label: 'General Inquiry' },
                    { id: 'booking', label: 'Booking Help' },
                    { id: 'custom', label: 'Custom Tour' },
                    { id: 'feedback', label: 'Feedback' }
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setFormData(prev => ({ ...prev, inquiryType: tab.id }));
                      }}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === tab.id
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                    >
                      {tab.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  required
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="newsletter" className="text-gray-700">
                    Subscribe to our newsletter for travel tips and special offers
                  </label>
                </div>
              </div>

              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute -bottom-8 left-0 right-0 text-center"
                    >
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message sent successfully!
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { id: 'facebook', color: 'bg-blue-600 hover:bg-blue-700', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { id: 'instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { id: 'twitter', color: 'bg-blue-400 hover:bg-blue-500', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                { id: 'youtube', color: 'bg-red-600 hover:bg-red-700', icon: 'M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' }
              ].map((social) => (
                <motion.a
                  key={social.id}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://${social.id}.com/pinkcitytravel`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} p-3 rounded-full text-white shadow-md transition-all`}
                >
                  <span className="sr-only">{social.id}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;