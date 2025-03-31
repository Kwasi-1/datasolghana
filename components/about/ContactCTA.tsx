"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone } from "lucide-react";

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-primary opacity-90 z-10"></div>

      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/assets/images/handshake.jpg')",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="section-padding relative z-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white animate-fade-in">
          Let’s Secure & Optimize Your IT Systems Today!
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90 animate-fade-in">
          Contact us for expert IT solutions, from data recovery to
          cybersecurity. Let’s build a more secure future together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-10">
          <Link href="/contact">
            <Button
              className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg"
              size="lg"
            >
              Get a Free Consultation
            </Button>
          </Link>
          <a href="tel:+233200063564">
            <Button
              className="bg-secondary hover:bg-secondary/90 text-blue-700 px-8 py-6 text-lg"
              size="lg"
            >
              <Phone className="mr-2" />
              Call Us Now
            </Button>
          </a>
        </div>

        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full py-3 px-6 animate-fade-in">
          <span className="text-white font-semibold">
            Trusted by businesses across Ghana | Expert IT Solutions
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
