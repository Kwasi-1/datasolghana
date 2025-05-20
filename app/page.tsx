"use client";

import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/Hero";
import About from "@/components/landing/About";
// import ContactSection from "@/components/landing/ContactSection";
import ContactUs from "@/components/landing/ContactUs";
import ImpactSection from "@/components/landing/Impact";
import Services from "@/components/landing/Services";
// import TestimonialSection from "@/components/landing/TestimonialSection";
import CallToAction from "@/components/shared/CalltoACtion";

function Landing() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <About />
      <Services />
      <ImpactSection />
      <CallToAction />
      <ContactUs />
      <ContactForm />
    </div>
  );
}
export default Landing;
