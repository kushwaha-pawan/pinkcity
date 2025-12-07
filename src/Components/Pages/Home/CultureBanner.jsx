import React, { useState, useEffect } from 'react';

const CultureBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate image loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return ( 
    <section className="relative w-full h-screen max-h-[800px] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image with loading state */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: "url('/images/JaipurCulture/desurt.jpg')" }}
        aria-label="Jaipur cultural heritage background"
      />
     

      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-amber-400 animate-text-shimmer">
            Explore the Soul of Jaipur
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover the traditions, art, and culture that make the Pink City truly timeless.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Explore Culture
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-amber-400 text-amber-300 hover:bg-amber-400/10 font-medium rounded-lg transition-all duration-300">
            View Gallery
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-10 border-2 border-rose-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rose-400 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default CultureBanner;