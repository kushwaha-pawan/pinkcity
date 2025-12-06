import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const images = [
    '/images/Slider/s1.jpg',
    '/images/Slider/s2.jpg',
    '/images/Slider/s3.jpg',
    '/images/Slider/s4.jpg',
    '/images/Slider/s5.jpg',
    '/images/Slider/s6.jpg',
    '/images/Slider/s7.jpg',
    '/images/Slider/s8.jpg',
    '/images/Slider/s9.jpg',
];

const ImageSlider = () => {
    const [[current, direction], setCurrent] = useState([0, 0]);
    const [autoPlay, setAutoPlay] = useState(true);
    const timeoutRef = useRef();
    const sliderRef = useRef();

    const nextSlide = useCallback(() => {
        setCurrent([(current + 1) % images.length, 1]);
    }, [current]);

    const prevSlide = useCallback(() => {
        setCurrent([(current - 1 + images.length) % images.length, -1]);
    }, [current]);

    const goToSlide = (index) => {
        const newDirection = index > current ? 1 : -1;
        setCurrent([index, newDirection]);
    };

    // Auto Slide with pause on hover
    useEffect(() => {
        if (!autoPlay) return;

        const startAutoSlide = () => {
            timeoutRef.current = setTimeout(() => {
                nextSlide();
            }, 5000);
        };

        startAutoSlide();
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current, autoPlay, nextSlide]);

    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        const x = touch.clientX;
        sliderRef.current?.setAttribute('data-touch-start', x.toString());
    };

    const handleTouchEnd = (e) => {
        const startX = parseFloat(sliderRef.current?.getAttribute('data-touch-start') || '0');
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
        }
    };

    return (
        <section
            className="relative w-full h-[70vh] overflow-hidden group"
            ref={sliderRef}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <AnimatePresence custom={direction} initial={false}>
                <motion.div
                    key={current}
                    custom={direction}
                    initial={{ 
                        x: direction > 0 ? '100%' : '-100%',
                        opacity: 0.8
                    }}
                    animate={{ 
                        x: 0, 
                        opacity: 1,
                        transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] }
                    }}
                    exit={{ 
                        x: direction < 0 ? '100%' : '-100%', 
                        opacity: 0.8,
                        transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={images[current]}
                        alt={`Slide ${current + 1}`}
                        className="w-full h-full object-cover object-center select-none"
                        draggable={false}
                        loading="eager"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Preload next image for smoother transitions */}
            <div className="hidden">
                <img src={images[(current + 1) % images.length]} alt="Preload next" />
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                aria-label="Previous Slide"
            >
                <FiChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                aria-label="Next Slide"
            >
                <FiChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
                                ? 'bg-white scale-125'
                                : 'bg-white/50 hover:bg-white/80 scale-100'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-30">
                <motion.div
                    className="h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                    key={current}
                    onAnimationComplete={() => {
                        if (autoPlay) nextSlide();
                    }}
                />
            </div>
        </section>
    );
};

export default ImageSlider;