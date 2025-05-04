"use client";

import React from "react";
import Hero from "@/components/Hero";
import CompanyOverview from "@/components/about/CompanyOverview";
import Mission from "@/components/about/Mission";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import TeamSection from "@/components/about/TeamSection";
import Testimonials from "@/components/about/Testimonials";
import ContactCTA from "@/components/about/ContactCTA";
import AboutHeader from "@/components/about/AboutHeader";
import MissionVision from "@/components/about/MissionVision";
import WhyTrustUsSection from "@/components/WhyTrustUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/about/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* <Hero
        title="Your Trusted IT Solutions Partner"
        subtitle="With over a decade of experience, we help businesses recover data, secure systems, and optimize IT infrastructures."
        buttonText="Get a Free Consultation"
        buttonLink="/contact"
      /> */}
      <Navbar />
      <AboutHeader />
      <MissionVision />
      <WhyTrustUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
