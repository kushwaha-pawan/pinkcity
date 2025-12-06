import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaSearch,
    FaUser,
    FaBars,
    FaTimes,
    FaChevronDown
} from 'react-icons/fa';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: -20, opacity: 0 },
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

const Navbar = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/search?q=${search.trim()}`);
            setMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/explore', label: 'Explore' },
        { to: '/places', label: 'Places' },
        { to: '/packages', label: 'Packages' },
        { to: '/cyclingtour', label: "CyclingTour" },
        { to: '/contact', label: 'Contact Us' },

    ];

    return (
        <motion.nav
            initial="hidden"
            animate="show"
            variants={containerVariants}
            // className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm shadow-sm '}`}
            className='fixed top-0 w-full z-50 transition-all duration-300 bg-white/20  backdrop-blur-sm shadow-xl'
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div variants={itemVariants}>
                        <NavLink
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center "
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center "
                            >
                                <img
                                    src="/images/icons/pinkcity-icon.png"
                                    alt="Pink City Logo"
                                    className="h-24 w-24 scale-75 object-cover mt-6"
                                />
                                <span className="text-2xl -ml-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-rose-500">
                                    PinkCity
                                </span>
                            </motion.div>
                        </NavLink>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.div
                        variants={containerVariants}
                        className="hidden lg:flex items-center space-x-1"
                    >
                        {navLinks.map((link, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-md text-sm font-medium relative group ${isActive ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'}`
                                    }
                                >
                                    {link.label}
                                    <motion.span
                                        className={`absolute bottom-1 left-1/2 h-0.5 bg-teal-400 transition-all duration-300 ${({ isActive }) => isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'} transform -translate-x-1/2`}
                                        layoutId="underline"
                                    />
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Desktop Search and Auth */}
                    <motion.div
                        variants={containerVariants}
                        className="hidden lg:flex items-center gap-4"
                    >
                        <motion.div variants={itemVariants}>
                            <form onSubmit={handleSearch} className="relative">
                                <motion.input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search..."
                                    className="pl-4 pr-10 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent w-52 bg-gray-50 shadow-inner"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-teal-600"
                                >
                                    <FaSearch />
                                </button>
                            </form>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <motion.div
                                variants={hoverVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <NavLink
                                    to="/auth"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md ${isActive ? 'bg-gradient-to-r from-teal-600 to-rose-600' : 'bg-gradient-to-r from-teal-500 to-rose-500 hover:from-teal-600 hover:to-rose-600'} text-white`
                                    }
                                >
                                    <FaUser className="text-xs" />
                                    <span>Login</span>
                                </NavLink>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Mobile menu button */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:hidden flex items-center"
                    >
                        <motion.button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-teal-50 focus:outline-none transition-colors"
                            aria-expanded="false"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {mobileMenuOpen ? (
                                <FaTimes className="block h-6 w-6" />
                            ) : (
                                <FaBars className="block h-6 w-6" />
                            )}
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile menu */}
            <motion.div
                initial={false}
                animate={{
                    height: mobileMenuOpen ? 'auto' : 0,
                    opacity: mobileMenuOpen ? 1 : 0.8
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`lg:hidden overflow-hidden ${mobileMenuOpen ? 'shadow-inner' : ''}`}
            >
                <div className="px-4 pt-2 pb-6 space-y-3 bg-white/95 backdrop-blur-sm border-t border-gray-200">
                    {/* Mobile Search */}
                    <motion.form
                        onSubmit={handleSearch}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-2"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                                className="block w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-gray-50 shadow-inner"
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-teal-600"
                            >
                                <FaSearch />
                            </button>
                        </div>
                    </motion.form>

                    {/* Mobile Links */}
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + index * 0.05 }}
                        >
                            <NavLink
                                to={link.to}
                                onClick={() => setMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-4 py-3 rounded-lg text-base font-medium ${isActive ? 'bg-teal-50 text-teal-600' : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </motion.div>
                    ))}

                    {/* Mobile Login */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="pt-2"
                    >
                        <motion.div
                            variants={hoverVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <NavLink
                                to="/auth"
                                onClick={() => setMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center justify-center gap-2 px-5 py-3 rounded-full text-base font-medium shadow-md ${isActive ? 'bg-gradient-to-r from-teal-600 to-rose-600' : 'bg-gradient-to-r from-teal-500 to-rose-500 hover:from-teal-600 hover:to-rose-600'} text-white`
                                }
                            >
                                <FaUser />
                                <span>Login / Register</span>
                            </NavLink>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;