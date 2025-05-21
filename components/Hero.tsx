"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    image: "/assets/hero-1.jpg",
    title: "Recover What Matters",
    description:
      "We help restore lost files and critical data with expert data recovery solutions.",
  },
  {
    image: "/assets/hero-2.jpg",
    title: "Fortify Your Business",
    description:
      "Get top-tier backup & cyber security solutions to protect against modern threats.",
  },
  {
    image: "/assets/hero-3.jpg",
    title: "Expert IT Support & Consulting",
    description:
      "From upgrades to consulting, our support keeps your business running smoothly.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const { image, title, description } = slides[currentIndex];

  return (
    <section
      id="herosection"
      className="relative h-screen max-h-[900px] flex items-center justify-center text-white select-none overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/90 via-[#0B2545]/70 md:to-[#0B2545]/10 to-[#0B2545]/30 " />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 px-4 text-center max-w-5xl -mt-[10%] lg:mt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Motto */}
            <motion.p
              className="uppercase tracking-widest text-sm sm:text-base text-[#00C6FF] font-semibold mb-3 px-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              RELIABILITY ENGINEERED INTO EVERY BYTE
            </motion.p>

            <motion.h1
              className="text-[42px] md:text-6xl lg:text-7xl xl:text-[90px] 2xl:text-8xl font-bold leading-tight drop-shadow-xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="mt-4 text-xl sm:text-2xl text-gray-200 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
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
