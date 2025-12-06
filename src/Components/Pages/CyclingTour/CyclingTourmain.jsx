import { motion } from "framer-motion";
import { useState } from "react";
const tours = [
    {
        id: 1,
        name: "Jaipur to Pushkar Trail",
        duration: "3 Days",
        highlights: "Desert ride, local culture",
        price: "₹7,500",
    },
    {
        id: 2,
        name: "Udaipur Lake Circuit",
        duration: "2 Days",
        highlights: "Lakeside paths, palaces",
        price: "₹6,000",
    },
    {
        id: 3,
        name: "Thar Desert Expedition",
        duration: "4 Days",
        highlights: "Camel tracks, sand dunes",
        price: "₹9,200",
    },
];
const CyclingTourmain = () => {
    const [isHovered, setIsHovered] = useState(false);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } }
    };

    const slideUp = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
    };

    const scaleUp = {
        initial: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.3 } }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                {/* Background Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/images/tour/cyclist-riding.jpg"
                        alt="Cyclists exploring Jaipur"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </motion.div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <motion.h1
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Discover Jaipur on <span className="text-amber-400">Two Wheels!</span>
                    </motion.h1>

                    <motion.p
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
                    >
                        Experience the Pink City like never before with our guided cycling tours through historic streets and hidden gems.
                    </motion.p>

                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <motion.button
                            initial="initial"
                            whileHover="hover"
                            variants={scaleUp}
                            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                        >
                            Book Your Adventure Now
                            <motion.span
                                animate={{ x: isHovered ? 5 : 0 }}
                                className="inline-block ml-2"
                            >
                                →
                            </motion.span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Scrolling Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </section>


            {/* Tour Highlights Section */}
            <section className="py-14 px-4 w-[90%] mx-auto overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute left-0 top-0 w-full h-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle at 30% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)",
                        zIndex: -1
                    }}
                />

                <div className="relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-block mb-4"
                        >
                            <span className="text-sm font-semibold tracking-wider text-amber-500 uppercase">
                                Why Choose Us
                            </span>
                            <motion.div
                                className="h-0.5 bg-gradient-to-r from-amber-400 to-transparent mt-2"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                        >
                            <span className="relative">
                                <span className="relative z-10">Experience Jaipur</span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute bottom-2 left-0 h-3 bg-amber-300/40 z-0"
                                />
                            </span>
                            <br />
                            <span className="text-amber-500">Differently</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            Our cycling tours redefine how you explore the Pink City, combining luxury, authenticity, and adventure.
                        </motion.p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Decorative floating elements */}
                        <motion.div
                            initial={{ x: -100, y: -50, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-amber-100/30 blur-xl"
                        />

                        <motion.div
                            initial={{ x: 100, y: 100, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="absolute -right-20 bottom-20 w-60 h-60 rounded-full bg-amber-100/20 blur-xl"
                        />

                        {[
                            {
                                icon: (
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <div className="absolute -z-10 -inset-2 rounded-2xl bg-amber-500/5 blur-md"></div>
                                    </div>
                                ),
                                title: "Local Expertise",
                                description: "Our guides are Jaipur natives with generations of knowledge, offering insights no guidebook can provide.",
                                stats: "100+ Certified Experts",
                                color: "amber"
                            },
                            {
                                icon: (
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        </div>
                                        <div className="absolute -z-10 -inset-2 rounded-2xl bg-blue-500/5 blur-md"></div>
                                    </div>
                                ),
                                title: "Exclusive Routes",
                                description: "Access private courtyards, hidden havelis, and secret viewpoints unavailable to regular tours.",
                                stats: "25+ Unique Experiences",
                                color: "blue"
                            },
                            {
                                icon: (
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div className="absolute -z-10 -inset-2 rounded-2xl bg-green-500/5 blur-md"></div>
                                    </div>
                                ),
                                title: "Sustainable Luxury",
                                description: "Premium electric bicycles and carbon-neutral operations that give back to local communities.",
                                stats: "Eco-Certified Excellence",
                                color: "green"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2 + index * 0.15,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                whileHover={{ y: -10 }}
                                className="relative group"
                            >
                                <div className={`absolute -inset-0.5 bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition duration-500`}></div>
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-100/50 shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden">
                                    <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br from-white to-amber-100/30 opacity-20"></div>

                                    <div className="relative z-10">
                                        <div className="mb-6">
                                            {feature.icon}
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            <span className="relative inline-block">
                                                {feature.title}
                                                <motion.span
                                                    initial={{ scaleX: 0 }}
                                                    whileInView={{ scaleX: 1 }}
                                                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400"
                                                />
                                            </span>
                                        </h3>

                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {feature.description}
                                        </p>

                                        <div className={`text-sm font-medium text-${feature.color}-500 border-t border-gray-100 pt-4 flex items-center`}>
                                            <span>{feature.stats}</span>
                                            <svg
                                                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
            <div className="w-[90%] mx-auto py-10">
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-center animate-fade-in-down">🚴‍♂️ Featured Cycling Tours</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {tours.map((tour) => (
                            <div
                                key={tour.id}
                                className="border p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer bg-white animate-fade-in-up"
                            >
                                <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                                <p><strong>Duration:</strong> {tour.duration}</p>
                                <p><strong>Highlights:</strong> {tour.highlights}</p>
                                <p><strong>Price:</strong> {tour.price}</p>
                                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </div>
    );
};

export default CyclingTourmain;