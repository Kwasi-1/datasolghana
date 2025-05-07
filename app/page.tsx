"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  HardDrive,
  Shield,
  Wrench,
  ArrowRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Counter from "@/components/Counter";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyTrustUsSection from "@/components/WhyTrustUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      {/* <Hero
        title="Recover Your Data & Secure Your Business"
        subtitle="Industry-leading data recovery & cybersecurity solutions in Ghana"
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        secondaryButtonText="Chat with an Expert"
        secondaryButtonLink="https://wa.me/233200063564"
      /> */}

      {/* Trust Section */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyTrustUsSection />
      <TestimonialsSection />
      <BlogSection isHome={true} />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
