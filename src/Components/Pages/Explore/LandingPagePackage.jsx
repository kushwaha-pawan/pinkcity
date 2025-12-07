import React from "react";
import { motion } from "framer-motion";

// Simple Animated Card (without useInView)
const AnimatedCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}  // Animation only once
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const LandingPagePackage = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-50 to-blue-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-400/20 rounded-full -translate-x-40 translate-y-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedCard>
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
                  Explore Rajasthan
                </span>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Discover{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Magical
                  </span>{" "}
                  Destinations
                </h1>
              </AnimatedCard>

              <AnimatedCard delay={0.4}>
                <p className="text-lg text-gray-600 max-w-lg">
                  Immerse yourself in the rich culture and breathtaking landscapes of Rajasthan's most iconic locations.
                </p>
              </AnimatedCard>

              <AnimatedCard delay={0.6}>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-200"
                  >
                    Book Now
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-gray-300 bg-white hover:border-cyan-300 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:text-cyan-600"
                  >
                    Learn More
                  </motion.button>
                </div>
              </AnimatedCard>
            </div>

            <AnimatedCard delay={0.8}>
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-pink-600/25"
              >
                <img
                  src="/images/Explore/Rajasthan_Tour.jpg"
                  alt="Rajasthan Tour"
                  className="w-full h-auto object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">Golden Triangle Tour</h3>
                  <p className="text-cyan-200">Delhi • Agra • Jaipur</p>
                </div>

                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              </motion.div>
            </AnimatedCard>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPagePackage;
