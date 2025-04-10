"use client";

import React from "react";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah A.",
      company: "Business Owner",
      quote:
        "DataSol Technologies recovered my lost data in record time! Highly recommended.",
      rating: 5,
    },
    {
      name: "Michael T.",
      company: "IT Manager",
      quote:
        "Their cybersecurity solutions saved my company from a potential attack. Professional & reliable!",
      rating: 5,
    },
    {
      name: "David L.",
      company: "School Administrator",
      quote:
        "DataSol helped us set up our entire network infrastructure. The service was impeccable and the team highly knowledgeable.",
      rating: 5,
    },
    {
      name: "Rebecca K.",
      company: "Retail Manager",
      quote:
        "After a system failure that nearly cost us all our sales data, DataSol recovered everything within 24 hours. I can't thank them enough!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-kworld-primary">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard
                name={testimonial.name}
                company={testimonial.company}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
