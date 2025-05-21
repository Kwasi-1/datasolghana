"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = ["/assets/hero.jpg", "/assets/hero-2.jpg", "/assets/hero-3.jpg"];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="herosection"
      className="relative h-screen max-h-[700px] flex items-center justify-center text-white select-none overflow-hidden"
    >
      {/* Image Slider with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        role="img"
        aria-label="Background slideshow"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{ backgroundImage: `url(${src})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/90 via-[#0B2545]/70 to-[#0B2545]/10 " />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 px-4 text-center max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-[42px] md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Rapid Recovery. <br className="hidden md:block" /> Relentless
              Protection.
            </motion.h1>

            <motion.p
              className="mt-4 text-lg sm:text-xl text-gray-200 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              We recover lost files, secure hacked systems, and prevent future
              breaches.
            </motion.p>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#225EA6] text-white px-6 py-3 text-lg font-medium rounded-lg hover:bg-[#1E4F8C] transition duration-300"
              >
                Get Help Now <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
