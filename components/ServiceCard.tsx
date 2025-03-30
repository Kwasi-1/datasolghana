"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 card-hover">
      <div className="bg-kworld-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <Icon size={28} className="text-kworld-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-kworld-primary">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={link}
        className="text-kworld-accent font-medium inline-flex items-center hover:underline"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
