"use client";

import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/Hero";
import About from "@/components/landing/About";
// import ContactSection from "@/components/landing/ContactSection";
import ContactUs from "@/components/landing/ContactUs";
import ImpactSection from "@/components/landing/Impact";
import Services from "@/components/landing/Services";
import CallToAction from "@/components/shared/CalltoACtion";
import TopBanner from "@/components/shared/TopBanner";
import Navbar from "@/components/Navbar";
import TestimonialCard from "@/components/TestimonialCard";

function Landing() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <ImpactSection />
      <CallToAction />
      {/* <Testimonials /> */}
      <section id="testimonials" className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#225EA6] to-[#193e6e] z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed"></div>
        <div className="section-padding relative z-20">
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="max-w-3xl lg:text-xl mx-auto">
              Don't just take our word for it. See what our clients have to say
              about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="John Mensah"
              company="ABC Corporation"
              quote="DATASOL TECHNOLOGIES recovered critical business data from our crashed server. Their quick response saved our company thousands of dollars."
              rating={5}
            />
            <TestimonialCard
              name="Sarah Asante"
              company="Tech Solutions Ltd."
              quote="Their cybersecurity audit identified several vulnerabilities we weren't aware of. They provided comprehensive solutions that protected our client data."
              rating={5}
            />
            <TestimonialCard
              name="Michael Osei"
              company="Global Merchants"
              quote="DATASOL's IT support has been invaluable for our business. They respond quickly to issues and provide proactive solutions."
              rating={4}
            />
          </div>
        </div>
      </section>
      <ContactUs />
      <ContactForm />
    </div>
  );
}
export default Landing;
