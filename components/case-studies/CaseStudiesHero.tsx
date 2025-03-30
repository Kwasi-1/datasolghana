import React from "react";

const CaseStudiesHero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-kworld-primary to-kworld-secondary opacity-90 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/assets/images/case-studies-hero.jpg')",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="section-padding relative z-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in">
          Our Success Stories
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-white/90 animate-fade-in">
          Explore how we've helped businesses across Ghana overcome their IT
          challenges and achieve their goals.
        </p>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
