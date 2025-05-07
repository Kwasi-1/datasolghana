"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

type Testimonial = {
  image: string;
  heading: string;
  description: string;
  quote: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    image: "/assets/testimonial_1.webp",
    heading: "Our Customer Stories",
    description:
      "Learn how our timely IT solutions help growing companies and why local businesses rely on DataSol.",
    quote:
      "I was amazed by DataSol's expertise in recovering my critical data. From the initial consultation to the final recovery, their team was responsive, professional, and incredibly knowledgeable. I would highly recommend their services to anyone in need of reliable data recovery!",
    author: "Ronald Richards",
    role: "Web Developer",
  },
  {
    image: "/assets/testimonial_2.webp",
    heading: "Success Stories",
    description:
      "Discover how DataSol enabled businesses to overcome IT challenges with ease and efficiency.",
    quote:
      "Datasol recovered critical business data from our crashed server. Their quick response saved our company thousands of dollars. I can't thank them enough!",
    author: "John Mensah",
    role: "Tech Solutions Ltd.",
  },
  {
    image: "/assets/testimonial_3.webp",
    heading: "Success Stories",
    description:
      "Discover how DataSol enabled businesses to overcome IT challenges with ease and efficiency.",
    quote:
      "Their cybersecurity audit identified several vulnerabilities we weren't aware of. They provided comprehensive solutions that protected our client data. We feel much safer now!",
    author: "Sarah Asante",
    role: "IT Manager",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isHovered) {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    // Reset timer when manually navigating
    startTimer();
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
    // Reset timer when manually navigating
    startTimer();
  };

  const testimonial = testimonials[index];

  return (
    <div
      className="flex flex-col md:flex-row gap-5 w-full min-h-[400px] overflow-hidden rounded-2xl text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:w-1/3 h-full w-full relative rounded-2xl overflow-hidden group">
        <Image
          width={500}
          height={500}
          src={testimonial.image}
          alt="Customer"
          className="w-full h-full object-cover rounded-2xl fade-in-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/20 z-10 transition-opacity duration-300 group-hover:opacity-30" />
        <div className="absolute bottom-8 px-7 space-y-4 z-20 text-white">
          <h2 className="text-2xl font-semibold">{testimonial.heading}</h2>
          <p className="text-[15px] max-w-sm pb-4">{testimonial.description}</p>
          <a href="#" className="text-sm">
            Read Their Experience →
          </a>
        </div>
      </div>

      <div className="md:w-2/3 w-full min-h-full p-12 flex flex-col rounded-2xl justify-center bg-bytefix-bg">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between h-full"
          >
            <Icon
              icon="ri:double-quotes-l"
              className="text-blue-500 text-6xl mb-12"
            />
            <div className="flex flex-col gap-4 h-[70%] justify-between ease-in-out">
              <p className="text-lg md:text-xl leading-relaxed mb-10">
                {testimonial.quote}
              </p>

              <div className="flex justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-semibold text-xl">{testimonial.author}</p>
                  <p className="text-gray-400 text-lg">{testimonial.role}</p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-end gap-6 mt-10 text-white">
                  <button
                    aria-label="Previous testimonial"
                    onClick={handlePrev}
                  >
                    <Icon icon="lucide:arrow-left" className="text-2xl" />
                  </button>
                  <button aria-label="Next testimonial" onClick={handleNext}>
                    <Icon icon="lucide:arrow-right" className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
