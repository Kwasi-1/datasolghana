"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = [
  "/assets/hero-1.jpg",
  "/assets/hero-2.jpg",
  "/assets/hero-3.jpg",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <section
        id="herosection"
        className="relative flex items-center justify-center h-[700px] text-center text-white select-none"
      >
        {/* Background Image Slider */}
        <div className="absolute inset-0 overflow-hidden bg-[#225EA6]">
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-[#0B2545]/70" />{" "}
          {/* Dark blue overlay */}
        </div>

        {/* Animated Content */}
        <div className="relative z-10 max-w-3xl px-6 mt-[5%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Heading from Top */}
              <motion.h1
                className="text-[40px] md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Rapid Recovery. <br className="hidden md:block" /> Relentless
                Protection.
              </motion.h1>

              {/* Short Paragraph from Bottom */}
              <motion.p
                className="mt-4 text-lg sm:text-xl text-gray-200 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                We recover lost files, secure hacked systems, and prevent future
                breaches.
              </motion.p>

              {/* Button from Bottom */}
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
    </div>
  );
};

export default HeroSection;
