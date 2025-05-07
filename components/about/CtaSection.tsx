"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Fix Your IT Problems?
            </h2>
            <p className="text-white/90 max-w-xl">
              Contact us today to schedule a consultation with one of our expert
              technicians. We'll help you keep your technology running smoothly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => "https://wa.me/233200063564"}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-base"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-base"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
