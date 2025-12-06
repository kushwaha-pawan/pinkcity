import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/Packages", label: "Packages" },
    { to: "/CyclingTour", label: "Tours" },
    { to: "/contact", label: "Contact Us" },
    { to: "/Packages", label: "Packages" },
    { to: "/places", label: "places" },

];

const socialLinks = [
    { icon: <FaFacebookF />, color: "hover:text-blue-600", bg: "hover:bg-blue-100" },
    { icon: <FaTwitter />, color: "hover:text-sky-500", bg: "hover:bg-sky-100" },
    { icon: <FaInstagram />, color: "hover:text-rose-600", bg: "hover:bg-rose-100" },
    { icon: <FaLinkedinIn className="hover:scale-150 duration-300" />, color: "hover:text-blue-700  ", bg: "hover:bg-blue-100" },
];

// Animation variants defined within the component
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
};

const hoverVariants = {
    hover: { y: -3, scale: 1.03 },
    tap: { scale: 0.98 }
};

const Footer = () => {
    return (
        <motion.footer
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-b from-gray-50 to-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pt-16 pb-10 px-4 sm:px-6"
        >
            <div className="w-[90%] max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
                >
                    {/* Brand Info */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-5"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center"
                        >
                            <img
                                src="/images/icons/pinkcity-icon.png"
                                alt="Pink City Logo"
                                className="h-24 w-24 scale-75 object-cover mt-6"
                            />
                            <span className="text-2xl -ml-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-rose-500">
                                PinkCity Explore
                            </span>
                        </motion.div>
                        <motion.p
                            whileHover={{ x: 5 }}
                            className="text-gray-900 text-sm leading-relaxed"
                        >
                            Discover the rich heritage and vibrant culture of Jaipur with our curated tours and experiences.
                        </motion.p>
                        <div className="flex space-x-3 pt-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    variants={hoverVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    className={`bg-white hover:scale-125  hover:rotate-[360deg] text-gray-900 transition-all duration-300 p-3 rounded-full shadow-sm ${social.color} ${social.bg}`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-teal-400 inline-block">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link
                                        to={link.to}
                                        className="text-gray-900 hover:text-teal-600 transition duration-300 flex items-center group text-sm"
                                    >
                                        <motion.span
                                            className="w-2 h-2 bg-teal-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"
                                            whileHover={{ scale: 1.5 }}
                                        />
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-teal-400 inline-block">
                            Contact Us
                        </h3>
                        <ul className="space-y-4 text-gray-900">
                            <motion.li
                                className="flex items-start space-x-3"
                                whileHover={{ x: 5 }}
                            >
                                <div className="p-2 bg-teal-50 rounded-full">
                                    <FaEnvelope className="text-teal-500 text-sm" />
                                </div>
                                <span className="text-sm">info@pinkcityexplore.com</span>
                            </motion.li>
                            <motion.li
                                className="flex items-start space-x-3"
                                whileHover={{ x: 5 }}
                            >
                                <div className="p-2 bg-teal-50 rounded-full">
                                    <FaPhoneAlt className="text-teal-500 text-sm" />
                                </div>
                                <span className="text-sm">+91 12345232</span>
                            </motion.li>
                            <motion.li
                                className="flex items-start space-x-3"
                                whileHover={{ x: 5 }}
                            >
                                <div className="p-2 bg-teal-50 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-sm">123 Heritage Lane, Jaipur, Rajasthan 302001</span>
                            </motion.li>
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-teal-400 inline-block">
                            Newsletter
                        </h3>
                        <motion.p
                            whileHover={{ scale: 1.02 }}
                            className="text-gray-900 mb-4 text-sm"
                        >
                            Get updates on our latest tours, events, and travel tips for Jaipur.
                        </motion.p>
                        <form className="space-y-3">
                            <motion.input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent shadow-sm"
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                            <motion.button
                                type="submit"
                                variants={hoverVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="bg-gradient-to-r from-teal-500 to-rose-500 hover:from-teal-600 hover:to-rose-600 text-white font-medium py-3 px-6 rounded-lg w-full transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>

                {/* Copyright and Legal */}
                <motion.div
                    variants={itemVariants}
                    className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center"
                >
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        className="text-gray-500 text-xs mb-3 md:mb-0"
                    >
                        © {new Date().getFullYear()} Pink City Explore. All rights reserved.
                    </motion.p>
                    <div className="flex space-x-5">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -2 }}
                            >
                                <Link
                                    to={`/${item.toLowerCase().replace(' ', '')}`}
                                    className="text-gray-500 hover:text-teal-600 text-xs transition font-medium"
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;