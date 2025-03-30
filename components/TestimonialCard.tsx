"use client";

import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  quote: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  company,
  quote,
  rating,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 card-hover">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <blockquote className="text-gray-600 italic mb-6">{quote}</blockquote>
      <div className="flex items-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-kworld-primary text-white flex items-center justify-center mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-bold text-kworld-primary">{name}</p>
          <p className="text-gray-500 text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
