
import React from 'react';
import { Star, Quote } from 'lucide-react';

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
  image
}) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:shadow-kworld-primary/5 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="absolute -top-4 left-8">
        <div className="w-9 h-9 bg-kworld-primary/90 rounded-full flex items-center justify-center">
          <Quote size={19} className="text-white" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-6 pt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 md:text-lg leading-relaxed mb-8 flex-grow font-[400]">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center mt-auto">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gray-100"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-kworld-primary to-kworld-secondary text-white flex items-center justify-center mr-4 text-lg font-semibold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-[600] text-gray-900 text-lg">{name}</p>
          <p className="text-kworld-primary text-sm font-medium">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;