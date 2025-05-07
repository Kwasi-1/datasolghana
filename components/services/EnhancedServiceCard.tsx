"use client";

import { motion } from "framer-motion";

interface EnhancedServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const EnhancedServiceCard = ({
  title,
  description,
  image,
}: EnhancedServiceCardProps) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl sm:rounded-2xl group h-[350px] sm:h-[350px]"
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Overlay by default */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />

      {/* Icon and Title (always visible) */}
      <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-12 z-10">
        <h3 className="text-xl sm:text-2xl font-[600] text-white pb-2">
          {title}
        </h3>
      </div>

      {/* Blue Overlay that Slides Up on Hover */}
      <div
        className="absolute inset-x-0 bottom-0 bg-[#0061FE] z-50 p-6 sm:p-8 md:p-10 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 flex flex-col justify-end"
        style={{ height: "100%" }}
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[#F9F9FA]/90 mb-3 sm:mb-4">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center text-sm sm:text-base text-white hover:text-white/80 font-medium"
        >
          Learn More <span className="ml-1">→</span>
        </a>
      </div>
    </motion.div>
  );
};

export default EnhancedServiceCard;
