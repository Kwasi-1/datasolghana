"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CaseStudiesCTA: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="bg-kworld-primary rounded-lg p-8 md:p-12 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/assets/images/cta-background.jpg')",
          }}
        ></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today to discuss how we can help your business overcome
            IT challenges and achieve your goals.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="animate-pulse">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCTA;
