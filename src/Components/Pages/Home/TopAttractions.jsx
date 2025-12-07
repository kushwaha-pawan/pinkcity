import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const attractions = [
  {
    title: "Hawa Mahal",
    description: "The iconic 'Palace of Winds' with its unique honeycomb façade.",
    image: "/images/TopAttractions/hawamahal.jpg",
    details: "Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal is a stunning example of Rajput architecture with its 953 small windows (jharokhas) decorated with intricate latticework.",
    bestTime: "October to March",
    hours: "9:00 AM - 4:30 PM",
    entryFee: "₹50 for Indians, ₹200 for foreigners",
    coordinates: { lat: 26.9239, lng: 75.8267 },
    tags: ["Iconic", "Architecture", "Historic"]
  },
  {
    title: "Amber Fort",
    description: "Majestic hilltop fort with elephant rides and stunning views.",
    image: "/images/TopAttractions/amerfort.jpg",
    details: "Amber Fort is a magnificent fort located in Amer, just 11 km from Jaipur. Built with red sandstone and marble, the fort features the stunning Sheesh Mahal (Mirror Palace) and offers elephant rides to the entrance.",
    bestTime: "October to March",
    hours: "8:00 AM - 6:00 PM",
    entryFee: "₹100 for Indians, ₹500 for foreigners",
    coordinates: { lat: 26.9855, lng: 75.8513 },
    tags: ["Fort", "Hilltop", "Elephant Rides"]
  },
  {
    title: "Jantar Mantar",
    description: "UNESCO-listed astronomical observation site with massive instruments.",
    image: "/images/TopAttractions/jantarmantar.png",
    details: "Built by Maharaja Jai Singh II in the early 18th century, Jantar Mantar is a collection of 19 astronomical instruments that were used to measure time, predict eclipses, and track celestial bodies with remarkable accuracy.",
    bestTime: "October to March",
    hours: "9:00 AM - 4:30 PM",
    entryFee: "₹50 for Indians, ₹200 for foreigners",
    coordinates: { lat: 26.9243, lng: 75.8246 },
    tags: ["UNESCO", "Astronomy", "Historic"]
  },
  {
    title: "Jal Mahal",
    description: "Beautiful water palace floating in Man Sagar Lake.",
    image: "/images/TopAttractions/jalmahal.jpg",
    details: "Jal Mahal is an architectural beauty situated in the middle of Man Sagar Lake. While entry inside the palace isn't permitted, visitors can admire its stunning Rajput and Mughal architecture from the lake's banks.",
    bestTime: "October to March",
    hours: "Viewable anytime",
    entryFee: "No entry fee (view from outside)",
    coordinates: { lat: 26.9534, lng: 75.8472 },
    tags: ["Water Palace", "Scenic", "Photography"]
  },
  {
    title: "City Palace",
    description: "Royal residence with museums, courtyards, and galleries.",
    image: "/images/TopAttractions/citypalace.jpg",
    details: "The City Palace complex includes several palaces, courtyards, and gardens. It houses museums with royal costumes, armory, and artifacts. The palace blends Rajasthani and Mughal architectural styles.",
    bestTime: "October to March",
    hours: "9:30 AM - 5:00 PM",
    entryFee: "₹300 for Indians, ₹700 for foreigners",
    coordinates: { lat: 26.9258, lng: 75.8236 },
    tags: ["Palace", "Museum", "Royal"]
  },
  {
    title: "Nahargarh Fort",
    description: "Hilltop fort offering panoramic views of Jaipur city.",
    image: "/images/TopAttractions/Nahargarh_Fort.jpg",
    details: "Nahargarh Fort stands on the edge of the Aravalli Hills, overlooking Jaipur. It was built in 1734 as a retreat palace and formed a strong defense ring for the city along with Amber Fort and Jaigarh Fort.",
    bestTime: "October to March",
    hours: "10:00 AM - 5:30 PM",
    entryFee: "₹50 for Indians, ₹200 for foreigners",
    coordinates: { lat: 26.9375, lng: 75.8137 },
    tags: ["Panoramic View", "Fort", "Sunset Spot"]
  },
  {
    title: "Albert Hall Museum",
    description: "Oldest museum in Rajasthan with extensive artifact collections.",
    image: "/images/TopAttractions/Albert_Hall_Museum.png",
    details: "The Albert Hall Museum is housed in a beautiful Indo-Saracenic style building. It displays a wide range of artifacts including paintings, carpets, ivory, stone, metal sculptures, and works in crystal.",
    bestTime: "October to March",
    hours: "9:00 AM - 5:00 PM, 7:00 PM - 10:00 PM",
    entryFee: "₹150 for Indians, ₹300 for foreigners",
    coordinates: { lat: 26.9111, lng: 75.8087 },
    tags: ["Museum", "Historic", "Artifacts"]
  },
  {
    title: "Jaigarh Fort",
    description: "Impressive fort known for housing the world's largest cannon.",
    image: "/images/TopAttractions/Jaigarh_Fort.png",
    details: "Jaigarh Fort was built to protect Amber Fort and its palace complex. It is most famous for the Jaivana cannon, the world's largest cannon on wheels. The fort offers spectacular views of the surrounding landscape.",
    bestTime: "October to March",
    hours: "9:00 AM - 4:30 PM",
    entryFee: "₹70 for Indians, ₹150 for foreigners",
    coordinates: { lat: 26.9855, lng: 75.8513 },
    tags: ["Fort", "Cannon", "Viewpoint"]
  }
];

// Floating particles with responsive design
const FloatingParticles = () => {
  const [particleCount, setParticleCount] = useState(15);

  useEffect(() => {
    const updateParticleCount = () => {
      if (window.innerWidth < 768) {
        setParticleCount(8);
      } else if (window.innerWidth < 1024) {
        setParticleCount(12);
      } else {
        setParticleCount(15);
      }
    };

    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);
    return () => window.removeEventListener('resize', updateParticleCount);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gradient-to-br from-cyan-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-teal-400/30 to-rose-400/30"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
          }}
          animate={{
            x: [null, Math.random() * 100 + 'vw'],
            y: [null, Math.random() * 100 + 'vh'],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Responsive animated button
const AnimatedButton = ({ children, onClick, className = "", variant = "primary" }) => {
  const variants = {
    primary: "bg-gradient-to-r from-teal-500 to-rose-500 hover:from-teal-600 hover:to-rose-600",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900",
    outline: "border-2 border-teal-500 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-300"
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px -10px rgba(0, 0, 0, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden px-4 py-3 md:px-6 md:py-3 rounded-lg md:rounded-xl font-medium text-sm md:text-base transition-all duration-300 ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 text-white">
        {children}
      </span>
    </motion.button>
  );
};

// Mobile filter chips
const FilterChips = ({ activeFilter, setActiveFilter }) => {
  const filters = ["All", "Fort", "Palace", "Historic", "Viewpoint", "Museum"];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6 px-4">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => setActiveFilter(filter === "All" ? null : filter)}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter || (filter === "All" && !activeFilter)
            ? 'bg-gradient-to-r from-teal-500 to-rose-500 text-white shadow-lg'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
};

// Attraction Card Component
const AttractionCard = ({ attraction, index, onExplore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="relative bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image with Overlay */}
      <div className="relative overflow-hidden h-48 md:h-56 lg:h-60">
        <motion.img
          src={attraction.image}
          alt={attraction.title}
          className="w-full h-full object-cover"
          loading="lazy"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Floating Tags */}
        <div className="absolute top-3 right-3 flex flex-wrap gap-1 justify-end">
          {attraction.tags.slice(0, 2).map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        {/* Title */}
        <motion.div 
          className="absolute bottom-4 left-4 text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg md:text-xl font-bold">{attraction.title}</h3>
          <div className="w-10 h-1 bg-gradient-to-r from-teal-400 to-rose-400 my-2 rounded-full"></div>
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="p-4 md:p-5 flex-grow">
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4 line-clamp-2">
          {attraction.description}
        </p>
        
        {/* Info Icons */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span className="text-xs md:text-sm">{attraction.hours.split(' ')[0]}</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
            <span className="text-xs md:text-sm">{attraction.entryFee.split(' ')[0]}</span>
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">4.8</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="px-4 md:px-5 pb-4 md:pb-5">
        <AnimatedButton onClick={() => onExplore(attraction)} className="w-full">
          Explore Now
        </AnimatedButton>
      </div>
    </motion.div>
  );
};

// Responsive Modal
const AttractionModal = ({ attraction, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl max-w-2xl lg:max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image */}
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
          <motion.img
            src={attraction.image}
            alt={attraction.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          />
          
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 shadow-lg"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
          
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold">{attraction.title}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {attraction.tags.map((tag, i) => (
                <span key={i} className="bg-white/20 backdrop-blur-sm text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6 overflow-x-auto">
            {['overview', 'details', 'location', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm sm:text-base font-medium capitalize whitespace-nowrap ${activeTab === tab
                  ? 'border-b-2 border-teal-500 text-teal-600 dark:text-teal-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mb-6">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {attraction.details}
                </p>
                
                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <h3 className="font-semibold text-teal-700 dark:text-teal-300">Hours</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{attraction.hours}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.049l1.715-5.349L11 6.477V5h2a1 1 0 110 2H9a1 1 0 01-1-1V3a1 1 0 011-1h1zm-6 8a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 11.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 019 21a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.049l1.715-5.349L5 12.477V11a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      <h3 className="font-semibold text-amber-700 dark:text-amber-300">Best Time</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{attraction.bestTime}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-rose-600 dark:text-rose-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                      <h3 className="font-semibold text-rose-700 dark:text-rose-300">Entry Fee</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{attraction.entryFee}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <AnimatedButton onClick={onClose} className="w-full sm:w-auto">
              Close Details
            </AnimatedButton>
            <AnimatedButton onClick={() => window.open(`https://maps.google.com/?q=${attraction.coordinates.lat},${attraction.coordinates.lng}`, '_blank')} variant="outline" className="w-full sm:w-auto">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                View on Map
              </div>
            </AnimatedButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Mobile Bottom Navigation
const MobileNav = ({ onFilterClick, onMapView }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-3 flex justify-around items-center z-40 md:hidden">
    <button className="flex flex-col items-center text-teal-600 dark:text-teal-400">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
      <span className="text-xs mt-1">Attractions</span>
    </button>
    
    <button onClick={onFilterClick} className="flex flex-col items-center text-gray-600 dark:text-gray-300">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
      </svg>
      <span className="text-xs mt-1">Filter</span>
    </button>
    
    <button onClick={onMapView} className="flex flex-col items-center text-gray-600 dark:text-gray-300">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
      </svg>
      <span className="text-xs mt-1">Map</span>
    </button>
  </div>
);

// Main Component
const TopAttractions = () => {
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeFilter, setActiveFilter] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const handleExplore = (attraction) => {
    setSelectedAttraction(attraction);
  };

  const handleViewAll = () => {
    setVisibleCount(attractions.length);
  };

  const handleShowLess = () => {
    setVisibleCount(4);
  };

  const filteredAttractions = activeFilter
    ? attractions.filter(attr => attr.tags.includes(activeFilter))
    : attractions;

  return (
    <section className="relative min-h-screen py-8 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <FloatingParticles />
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 pb-20 md:pb-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16 px-2"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-3 md:mb-4"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto bg-gradient-to-r from-teal-400/20 to-rose-400/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-rose-500">
              Top Attractions
            </span>
          </h1>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover the architectural wonders and cultural landmarks of Pink City
          </motion.p>
          
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-rose-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* View Toggle (Desktop) */}
        <div className="hidden md:flex justify-end mb-6">
          <div className="flex gap-2 bg-white dark:bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-md ${viewMode === 'grid' ? 'bg-teal-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md ${viewMode === 'list' ? 'bg-teal-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
            >
              List View
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <FilterChips activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </div>

        {/* Mobile Filter Toggle */}
        <motion.button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="md:hidden w-full mb-4 flex items-center justify-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-xl shadow"
          whileTap={{ scale: 0.98 }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
          <span>Filters & Sort</span>
        </motion.button>

        {/* Attractions Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 md:mb-12">
            <AnimatePresence mode="popLayout">
              {filteredAttractions.slice(0, visibleCount).map((attr, i) => (
                <AttractionCard 
                  key={attr.title} 
                  attraction={attr} 
                  index={i} 
                  onExplore={handleExplore} 
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="space-y-4 mb-8 md:mb-12">
            {filteredAttractions.slice(0, visibleCount).map((attr, i) => (
              <motion.div
                key={attr.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4 shadow-lg"
              >
                <div className="w-full sm:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={attr.image} alt={attr.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{attr.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{attr.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {attr.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <AnimatedButton onClick={() => handleExplore(attr)}>
                    Explore Now
                  </AnimatedButton>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Load More / Show Less */}
        {filteredAttractions.length > 0 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {visibleCount < filteredAttractions.length ? (
              <AnimatedButton onClick={handleViewAll}>
                View All {filteredAttractions.length} Attractions
              </AnimatedButton>
            ) : visibleCount > 4 ? (
              <AnimatedButton onClick={handleShowLess} variant="secondary">
                Show Less
              </AnimatedButton>
            ) : null}
          </motion.div>
        )}

        {/* No Results */}
        {filteredAttractions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 mx-auto mb-4 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">No attractions found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Try selecting a different filter</p>
            <button
              onClick={() => setActiveFilter(null)}
              className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Mobile Navigation */}
      <MobileNav 
        onFilterClick={() => setShowMobileFilters(!showMobileFilters)}
        onMapView={() => alert('Map view coming soon!')}
      />

      {/* Modal */}
      <AnimatePresence>
        {selectedAttraction && (
          <AttractionModal
            attraction={selectedAttraction}
            onClose={() => setSelectedAttraction(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default TopAttractions;