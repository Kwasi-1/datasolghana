"use client";

import React from "react";
import Hero from "@/components/Hero";
import CompanyOverview from "@/components/about/CompanyOverview";
import Mission from "@/components/about/Mission";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import TeamSection from "@/components/about/TeamSection";
import Testimonials from "@/components/about/Testimonials";
import ContactCTA from "@/components/about/ContactCTA";
import TopBanner from "@/components/shared/TopBanner";
import Navbar from "@/components/Navbar";

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <TopBanner />
      <Navbar />
      <Hero />
      <CompanyOverview />
      <Mission />
      <WhyChooseUs />
      <TeamSection />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default AboutPage;
