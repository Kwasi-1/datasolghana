"use client";

import React from "react";
import { Shield, Zap, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Mission: React.FC = () => {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-kworld-primary" />,
      title: "Security First",
      description: "Protecting your data is our top priority.",
    },
    {
      icon: <Clock className="h-10 w-10 text-kworld-primary" />,
      title: "Reliability",
      description: "We deliver dependable, long-term IT solutions.",
    },
    {
      icon: <Zap className="h-10 w-10 text-kworld-primary" />,
      title: "Innovation",
      description: "We leverage the latest technology to keep you ahead.",
    },
    {
      icon: <Users className="h-10 w-10 text-kworld-primary" />,
      title: "Customer-Centric",
      description: "Your success is our success.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-kworld-primary/5 to-kworld-secondary/5">
      <div className="section-padding text-center">
        <h2 className="text-3xl font-bold mb-4 text-kworld-primary">
          Our Commitment to Excellence
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-700">
          We are committed to providing top-tier IT solutions that ensure
          business continuity, data security, and technological efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-shadow card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-kworld-primary">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
