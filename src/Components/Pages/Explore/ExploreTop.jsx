import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ExploreTop() {
  const [loaded, setLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.6]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.05]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Modern video background with parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale }}
      >
        <video
          className="w-full h-full object-cover"
          src="/images/Explore/gellary bg video.MP4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90"></div>
      </motion.div>

      {/* Floating glass morphic elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-2xl backdrop-blur-md bg-white/5 border border-white/10"
            initial={{
              width: `${Math.random() * 120 + 80}px`,
              height: `${Math.random() * 120 + 80}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main content with smooth animations */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full px-4"
        style={{ y, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Modern typography with gradient mask */}
          <motion.h1 
            className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: loaded ? 0 : 40, opacity: loaded ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Explore Pink City
            </span>
          </motion.h1>
          
          {/* Animated description */}
          <motion.p 
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: loaded ? 0 : 30, opacity: loaded ? 1 : 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Transforming moments into timeless visual narratives through our lens
          </motion.p>
          
          {/* Modern 3D button with hover effects */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: loaded ? 0 : 20, opacity: loaded ? 1 : 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block perspective-1000"
          >
            <motion.a
              href="/gallery"
              className="relative inline-block px-8 py-4 text-lg font-medium rounded-xl bg-gradient-to-br from-pink-600 to-purple-700 text-white shadow-2xl hover:shadow-purple-500/40 transition-all duration-300"
              whileHover={{ 
                y: -4,
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(192, 38, 211, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center">
                Explore Collection
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 rounded-xl border border-white/20 mix-blend-overlay"></span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Modern scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="animate-bounce-slow w-5 h-8 rounded-full border border-white/30 flex justify-center">
          <div className="w-0.5 h-2 bg-white rounded-full mt-1 opacity-80"></div>
        </div>
      </motion.div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default ExploreTop;