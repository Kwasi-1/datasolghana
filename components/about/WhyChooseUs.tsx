"use client";

import React from "react";
import { Database, Shield, Clock, PhoneCall } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Database className="h-12 w-12 text-kworld-accent" />,
      title: "500+ Successful Data Recoveries",
      description: "Across businesses, individuals, and institutions.",
    },
    {
      icon: <Shield className="h-12 w-12 text-kworld-accent" />,
      title: "Certified IT & Cybersecurity Experts",
      description: "Highly skilled professionals with industry certifications.",
    },
    {
      icon: <Clock className="h-12 w-12 text-kworld-accent" />,
      title: "10+ Years of Experience",
      description: "Proven track record in IT support & security.",
    },
    {
      icon: <PhoneCall className="h-12 w-12 text-kworld-accent" />,
      title: "24/7 Customer Support",
      description: "We are always available when you need us.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-kworld-primary">
            Why Businesses Trust Kworld Network & Support Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md animate-fade-in card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-kworld-primary">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-kworld-primary/5 rounded-full py-4 px-8 border border-kworld-primary/20">
            <span className="text-xl font-bold text-kworld-primary">
              10+ Years of Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
