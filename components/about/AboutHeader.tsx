"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutHeader = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "95+", label: "Satisfied Customers" },
    { number: "99%", label: "Success & Uptime" },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300">
            Welcome to DataSol Technologies — your trusted IT and data solutions
            partner. We specialize in data recovery, cybersecurity, digital
            forensics, and proactive IT services for both individuals and
            businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#121212] p-8 rounded-lg text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="gap-8 w-full mt-16 px-8"
        >
          <Image
            src="/assets/about_hero.webp"
            width={500}
            height={500}
            alt="About Us"
            className="rounded-3xl  w-full h-auto max-h-[650px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeader;
