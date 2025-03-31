"use client";

import React from 'react';

const FAQHero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-kworld-primary to-kworld-secondary z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/assets/images/faq-hero-bg.jpg')",
          backgroundPosition: "center",
        }}
      ></div>
      
      {/* Content */}
      <div className="section-padding relative z-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
          Frequently Asked Questions
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-white/90 animate-fade-in">
          Find answers to common questions about our services, processes, and expertise.
          Can't find what you're looking for? Contact us directly.
        </p>
      </div>
    </section>
  );
};

export default FAQHero;
