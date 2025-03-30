"use client";

import React from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/caseStudiesData";

const CaseStudiesTestimonials: React.FC = () => {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-gray-50 z-0"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 z-0"
        style={{ backgroundImage: "url('/assets/images/testimonial-bg.jpg')" }}
      ></div>
      <div className="section-padding relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.author}
              company={testimonial.position}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTestimonials;
