// src/Components/Pages/Places/DestinationPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import local images
import hawamahal from "/images/TopAttractions/hawamahal.jpg";
import amberfort from "/images/TopAttractions/amerfort.jpg";
import jantarmantar from "/images/TopAttractions/jantarmantar.png";
import jalmahal from "/images/TopAttractions/jalmahal.jpg";

// Additional placeholder images for different sections
const marketImage = "https://images.unsplash.com/photo-1593693399906-8b59f247b4c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const foodImage = "https://images.unsplash.com/photo-1593081891731-f4d1c8c1c0b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const danceImage = "https://images.unsplash.com/photo-1578945104527-eaadff8db2b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const cityscapeImage = "https://images.unsplash.com/photo-1524307875964-4c93d5c97229?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
const palaceImage = "https://images.unsplash.com/photo-1591276257244-fd2b2cb0c6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const DestinationPage = () => {
  const attractions = [
    {
      id: 1,
      name: "Amber Fort",
      description: "Magnificent fort palace with stunning architecture and elephant rides. A blend of Hindu and Mughal styles.",
      image: amberfort,
      rating: 4.8,
      duration: "3-4 hours",
      category: "Historical Fort",
      features: ["Elephant Rides", "Light Show", "Museum", "Palace"],
      bestTime: "Morning",
      price: "₹500 per person"
    },
    {
      id: 2,
      name: "Hawa Mahal",
      description: "Iconic Palace of Winds with 953 intricate windows. Built for royal women to observe street festivals.",
      image: hawamahal,
      rating: 4.7,
      duration: "1-2 hours",
      category: "Palace",
      features: ["Architecture", "Photography", "City View", "Historical"],
      bestTime: "Early Morning",
      price: "₹200 per person"
    },
    {
      id: 3,
      name: "Jal Mahal",
      description: "Romantic water palace floating in Man Sagar Lake. Appears to float on water during monsoon.",
      image: jalmahal,
      rating: 4.5,
      duration: "1 hour",
      category: "Water Palace",
      features: ["Boating", "Sunset View", "Bird Watching", "Photography"],
      bestTime: "Evening",
      price: "Free (view from shore)"
    },
    {
      id: 4,
      name: "Jantar Mantar",
      description: "UNESCO World Heritage Site with ancient astronomical instruments. Largest stone observatory in the world.",
      image: jantarmantar,
      rating: 4.6,
      duration: "2 hours",
      category: "Observatory",
      features: ["UNESCO Site", "Science", "Architecture", "Historical"],
      bestTime: "Day Time",
      price: "₹200 per person"
    },
  ];

  const highlights = [
    {
      emoji: "📸",
      title: "Best Photo Spots",
      desc: "Golden Hour at Nahargarh Fort",
      color: "from-blue-500 to-purple-500"
    },
    {
      emoji: "⏰",
      title: "Ideal Visit Time",
      desc: "October to March",
      color: "from-green-500 to-teal-500"
    },
    {
      emoji: "👨‍👩‍👧‍👦",
      title: "Tour Type",
      desc: "Family & Solo Friendly",
      color: "from-orange-500 to-red-500"
    },
    {
      emoji: "🎉",
      title: "Festivals",
      desc: "Diwali & Jaipur Literature Fest",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const culturalExperiences = [
    {
      title: "Traditional Markets",
      description: "Explore Johari Bazaar for jewelry, Bapu Bazaar for textiles, and Chandpole Bazaar for handicrafts.",
      image: marketImage,
      icon: "🛍️"
    },
    {
      title: "Rajasthani Cuisine",
      description: "Savor authentic dishes like Dal Baati Churma, Laal Maas, Gatte ki Sabzi, and Pyaaz Kachori.",
      image: foodImage,
      icon: "🍛"
    },
    {
      title: "Folk Performances",
      description: "Experience vibrant folk dances like Ghoomar, Kalbeliya, and traditional puppet shows.",
      image: danceImage,
      icon: "💃"
    }
  ];

  const travelTips = [
    { tip: "Best time to visit: October to March", icon: "📅" },
    { tip: "Wear comfortable shoes for walking", icon: "👟" },
    { tip: "Carry a hat and sunscreen", icon: "🧴" },
    { tip: "Try local street food", icon: "🍽️" },
    { tip: "Bargain in local markets", icon: "💸" },
    { tip: "Stay hydrated", icon: "💧" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50">



      {/* Hero Section - Modern Split Design */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-rose-900">
        {/* Left Content Panel */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16 relative z-20"
        >
          <div className="max-w-2xl">
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full mb-8 border border-white/20"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium tracking-widest text-sm">NOW OPEN FOR TRAVELERS</span>
            </motion.div>

            {/* Main Title with Gradient */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
                  JAIPUR
                </span>
                <span className="block text-white mt-2">The Pink City</span>
              </h1>

              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400 text-xl">★</span>
                  ))}
                  <span className="text-white/80 ml-2">4.8/5</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <span className="text-white/80">📍 Rajasthan, India</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-white/80 mb-12 leading-relaxed max-w-xl"
            >
              Where ancient forts meet vibrant bazaars. Experience royal heritage,
              colorful culture, and architectural marvels in India's most iconic destination.
            </motion.p>

            {/* Interactive CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3 text-white font-bold text-lg">
                  <span>Explore Destination</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center gap-3 text-white font-bold text-lg">
                  <span className="text-2xl">▶</span>
                  <span>Watch Experience</span>
                </span>
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              {[
                { value: "953", label: "Windows in Hawa Mahal" },
                { value: "1727", label: "Year Founded" },
                { value: "40+", label: "Historical Sites" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Visual Panel */}
        <div className="lg:w-1/2 relative">
          {/* Background Image with Parallax Effect */}
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={cityscapeImage}
              alt="Jaipur Cityscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-1/4 right-1/4"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl max-w-xs">
              <div className="text-3xl mb-4">🏰</div>
              <h3 className="text-white font-bold mb-2">Amber Fort</h3>
              <p className="text-white/70 text-sm">Most visited historical site</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute bottom-1/4 left-1/4"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl max-w-xs">
              <div className="text-3xl mb-4">🛍️</div>
              <h3 className="text-white font-bold mb-2">Local Markets</h3>
              <p className="text-white/70 text-sm">Traditional shopping experience</p>
            </div>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="text-center">
              <div className="text-white text-sm mb-2 tracking-widest">SCROLL</div>
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1 h-3 bg-white rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-96 -right-96 w-[600px] h-[600px] border border-white/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-96 -left-96 w-[700px] h-[700px] border border-white/5 rounded-full"
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Why Visit <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Jaipur?</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Discover why Jaipur is one of India's most captivating destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />

              <div className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="text-5xl mb-6 text-center">{item.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-300 rounded-tr-2xl" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-rose-300 rounded-bl-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Attractions Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-amber-100 to-rose-100 rounded-full mb-4">
              <span className="text-amber-700 font-semibold">TOP ATTRACTIONS</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Must-Visit <span className="text-amber-600">Landmarks</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Explore the architectural marvels that define Jaipur's royal heritage
            </p>
          </motion.div>

          <div className="space-y-12">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Image Container */}
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-3xl shadow-2xl group"
                  >
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Image Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-bold text-gray-800 shadow-lg">
                        #{index + 1} SPOT
                      </span>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full">
                      <span className="text-yellow-400 text-xl">★</span>
                      <span className="text-white font-bold">{attraction.rating}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Container */}
                <div className="lg:w-1/2">
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 rounded-full mb-4">
                        <span className="text-amber-700 font-semibold">{attraction.category}</span>
                      </div>
                      <h3 className="text-4xl font-bold text-gray-900 mb-4">{attraction.name}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{attraction.description}</p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                            <span className="text-xl">⏱️</span>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Duration</div>
                            <div className="font-bold text-gray-800">{attraction.duration}</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                            <span className="text-xl">💰</span>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Entry Fee</div>
                            <div className="font-bold text-gray-800">{attraction.price}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {attraction.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-r from-amber-50 to-rose-50 text-amber-800 rounded-full text-sm font-medium border border-amber-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                      >
                        VIEW DETAILS & TIMINGS
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Experiences Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Cultural <span className="text-rose-600">Experiences</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Immerse yourself in the vibrant culture and traditions of Rajasthan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 h-full">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      {experience.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{experience.title}</h3>
                    <p className="text-gray-600 mb-6">{experience.description}</p>

                    <button className="flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors duration-300">
                      <span>Discover More</span>
                      <span className="text-xl">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-amber-600">Essential</span> Travel Tips
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-rose-400 rounded-xl flex items-center justify-center text-2xl text-white">
                    {tip.icon}
                  </div>
                  <p className="text-gray-800 font-medium">{tip.tip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              <div className="md:w-2/3 p-10">
                <h3 className="text-3xl font-bold text-white mb-6">🌤️ Best Time to Visit</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { season: "Peak Season", time: "Oct - Mar", desc: "Pleasant weather, festivals", color: "bg-white/20" },
                    { season: "Summer", time: "Apr - Jun", desc: "Hot but fewer crowds", color: "bg-white/15" },
                    { season: "Monsoon", time: "Jul - Sep", desc: "Green landscape, occasional rain", color: "bg-white/10" },
                    { season: "Festival Time", time: "Oct - Nov", desc: "Diwali celebrations", color: "bg-white/20" }
                  ].map((item, index) => (
                    <div key={index} className={`${item.color} backdrop-blur-sm p-6 rounded-2xl border border-white/20`}>
                      <div className="text-amber-100 font-bold mb-2">{item.season}</div>
                      <div className="text-white text-2xl font-bold mb-2">{item.time}</div>
                      <div className="text-amber-100 text-sm">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3 bg-gradient-to-b from-amber-600 to-rose-600 p-10 flex flex-col justify-center items-center text-center">
                <div className="text-8xl mb-6">⭐</div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro Tip</h3>
                <p className="text-amber-100 text-lg">
                  Visit early morning to avoid crowds and capture the best photos in golden light!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-rose-500 opacity-5" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-6xl font-bold text-gray-900 mb-8">
            Ready to Explore <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Jaipur?</span>
          </h2>

          <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
            Plan your perfect royal getaway with our curated itineraries, local guides, and exclusive experiences
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg flex items-center gap-3"
            >
              <span>📅 PLAN YOUR TRIP NOW</span>
              <span className="text-2xl">→</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-amber-700 hover:bg-amber-50 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg border-2 border-amber-200"
            >
              📥 DOWNLOAD TRAVEL GUIDE
            </motion.button>
          </div>

          <p className="mt-10 text-gray-600">
            Need help planning? <a href="#" className="text-amber-600 font-semibold hover:text-amber-700 underline">Chat with our travel experts</a>
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default DestinationPage;