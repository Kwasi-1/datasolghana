"use client";

import React from "react";
import { Shield, Database, PhoneCall, Server } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Database className="h-12 w-12" />,
      title: "Expert Data Recovery",
      description: "Recover lost data quickly and securely.",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Advanced Cybersecurity",
      description: "Protect your business from digital threats.",
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: "IT Consulting & Support",
      description: "Optimize your IT infrastructure with expert guidance.",
    },
    {
      icon: <PhoneCall className="h-12 w-12 " />,
      title: "24/7 Assistance",
      description: "We’re always available to support your IT needs.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Why Choose DATASOL TECHNOLOGIES?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md animate-fade-in card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4 text-gray-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-primary/5 rounded-full py-4 px-8 border border-primary/20">
            <span className="text-xl font-bold text-primary">
              Your Trusted IT Solutions Partner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
