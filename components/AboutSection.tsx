"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="pt-20 bg-[#0A0A0A]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16  justify-center max-w-[900px] mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="max-w-48 max-h-48 w-44 h-44 flex items-center justify-center mx-auto mb-6">
              <Image
                alt="years of experience"
                src="/assets/years_of_experience.webp"
                width={180}
                height={180}
                className="max-w-[180px] max-h-[180px] animate-spin-very-slow"
              />
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-xl"
          >
            <h2 className="text-5xl font-bold mb-6">About Us</h2>
            <p className="text-gray-300 mb-8 ">
              DataSol Technologies is dedicated to providing fast, reliable IT
              support and data recovery solutions. With a focus on quality
              service and customer satisfaction, we've earned the trust of
              businesses and individuals across the region, delivering tech
              expertise when you need it most.
            </p>
            <p className="text-gray-300">
              Partners with notable organizations to provide reliable, scalable
              solutions for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
