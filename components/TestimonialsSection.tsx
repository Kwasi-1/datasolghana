"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import TestimonialCarousel from "./TestimoniallsCarousel";
import Image from "next/image";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="testimonials" className="py-20 bg-[#0A0A0A]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-5xl font-bold mb-4">
            What Our Clients Are Saying
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="col-span-2"
          >
            <Image
              src="/assets/testimonial_hero.webp"
              width={500}
              height={500}
              alt="Satisfied client using a laptop"
              className="rounded-2xl lg:rounded-r-none w-full h-auto "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-[#0061FE] rounded-2xl p-8 h-full flex flex-col justify-between"
          >
            <h3 className="text-xl font-[400]">Facts & Numbers</h3>

            <div className="leading-tight">
              <p className="text-6xl font-bold">98%</p>
              <p className="mt-1 text-lg leading-tight">
                of customers recommend
              </p>
              <p className="text-lg leading-tight">Bytefix service</p>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <TestimonialCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
