// src/Components/Pages/Places/DestinationPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hawamahal from "/images/TopAttractions/hawamahal.jpg";
import amberfort from "/images/TopAttractions/amerfort.jpg";
import jantarmantar from "/images/TopAttractions/jantarmantar.png";
import jalmahal from "/images/TopAttractions/jalmahal.jpg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const cardHoverVariants = {
  hover: {
    y: -10,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
};

const DestinationPage = () => {
  const attractions = [
    {
      id: 1,
      name: "Amber Fort",
      description:
        "Magnificent fort with a blend of Hindu and Mughal architecture",
      image: amberfort,
    },
    {
      id: 2,
      name: "Hawa Mahal",
      description: "Iconic palace with intricate honeycomb windows",
      image: hawamahal,
    },
    {
      id: 3,
      name: "Jal Mahal",
      description: "Beautiful water palace in the middle of Man Sagar Lake",
      image: jalmahal,
    },
    {
      id: 4,
      name: "Jantar Mantar",
      description: "Astronomical observatory with massive instruments",
      image: jantarmantar,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 to-cyan-200 p-4 md:p-8 lg:p-12  overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 0.01, 0.05, 0.9] }}
          style={{
            backgroundImage:
              "url('https://blog.redbus.in/wp-content/uploads/2024/03/Best-places-to-visit-in-Jaipur.png')",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Discover Jaipur
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white max-w-2xl mb-8"
          >
            The Pink City of India, where history comes alive
          </motion.p>
          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="#attractions"
                className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 block"
              >
                Explore Attractions
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Attractions Section */}
      <section id="attractions" className="py-16 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-rose-600"
        >
          Must-Visit Places in Jaipur
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {attractions.map((attraction) => (
            <motion.div
              key={attraction.id}
              variants={itemVariants}
              whileHover="hover"
              variants={cardHoverVariants}
              className="bg-gradient-to-br from-red-200 to-cyan-200  rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                className="h-48 overflow-hidden"
                whileHover="hover"
                variants={imageHoverVariants}
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {attraction.name}
                </h3>
                <p className="text-gray-600 mb-4">{attraction.description}</p>
                <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                  <button className="text-amber-600 font-medium hover:text-amber-700 transition">
                    Learn More →
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
              },
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Jaipur's Rich Culture
              </h2>
              <p className="text-gray-700 mb-4">
                Jaipur is a vibrant city known for its colorful markets,
                traditional handicrafts, and delicious cuisine. The city's
                culture is a beautiful blend of royal heritage and modern
                influences.
              </p>
              <p className="text-gray-700 mb-6">
                From block printing to gemstone jewelry, Jaipur offers a unique
                shopping experience. Don't miss the local delicacies like Dal
                Baati Churma and Ghewar.
              </p>
              <motion.div
              // whileHover={{ scale: 1.05, oboxShadw: "0 5px 15px rgba(245, 158, 11, 0.4)" }}
              // whileTap={{ scale: 0.95 }}
              >
                <button
                  className={`w-[170px] font-bold text-white font-mono animate-shake hover:animate-none rounded-full p-2
    bg-gradient-to-r from-teal-600 to-rose-600 hover:from-teal-600 hover:to-rose-600`}
                >
                  Explore Culture
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover="hover" variants={imageHoverVariants}>
                  <img
                    src={hawamahal}
                    alt="Hawa Mahal"
                    className="rounded-lg shadow-md h-48 w-full object-cover"
                  />
                </motion.div>
                <motion.div whileHover="hover" variants={imageHoverVariants}>
                  <img
                    src={amberfort}
                    alt="Amber Fort"
                    className="rounded-lg shadow-md h-48 w-full object-cover"
                  />
                </motion.div>
                <motion.div whileHover="hover" variants={imageHoverVariants}>
                  <img
                    src={jalmahal}
                    alt="Jal Mahal"
                    className="rounded-lg shadow-md h-48 w-full object-cover"
                  />
                </motion.div>
                <motion.div whileHover="hover" variants={imageHoverVariants}>
                  <img
                    src={jantarmantar}
                    alt="Jantar Mantar"
                    className="rounded-lg shadow-md h-48 w-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
