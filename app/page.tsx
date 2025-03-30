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

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-r from-kworld-primary to-kworld-secondary py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="section-padding relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Recover Your Data & Secure Your Business
            </h1>
            <p
              className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Industry-leading data recovery & cybersecurity solutions in Ghana
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="/contact">
                <Button className="btn-secondary w-full sm:w-auto">
                  Get a Free Quote
                </Button>
              </Link>
              <a
                href="https://wa.me/233XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-kworld-primary w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat with an Expert
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Counter end={500} suffix="+" />
              <p className="mt-2 text-gray-600">Successful Data Recoveries</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Counter end={100} suffix="+" />
              <p className="mt-2 text-gray-600">Trusted Businesses in Ghana</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Counter end={10} suffix="+" />
              <p className="mt-2 text-gray-600">
                Years of IT Security Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive IT solutions to protect your data, secure
            your business, and support your IT infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Data Recovery"
            description="Recover lost or damaged data from all storage devices with our professional recovery services."
            icon={HardDrive}
            link="/services#data-recovery"
          />
          <ServiceCard
            title="Cybersecurity Solutions"
            description="Protect your business from cyber threats with our advanced security measures and monitoring."
            icon={Shield}
            link="/services#cybersecurity"
          />
          <ServiceCard
            title="IT Support & Networking"
            description="Get reliable IT support and network solutions to keep your business running smoothly."
            icon={Wrench}
            link="/services#it-support"
          />
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button
              variant="outline"
              className="border-kworld-primary text-kworld-primary hover:bg-kworld-primary hover:text-white"
            >
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. See what our clients have to say
              about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="John Mensah"
              company="ABC Corporation"
              quote="Kworld recovered critical business data from our crashed server. Their quick response saved our company thousands of dollars."
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
              quote="Kworld's IT support has been invaluable for our business. They respond quickly to issues and provide proactive solutions."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-white">
        <div className="bg-kworld-primary rounded-lg p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Help? Let's Talk!
              </h2>
              <p className="mb-6">
                Contact us today for a free consultation. Our experts are ready
                to help you with your IT needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/233XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <Button
                    variant="secondary"
                    className="bg-green-500 hover:bg-green-600 w-full sm:w-auto"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                  </Button>
                </a>
                <a
                  href="tel:+233XXXXXXXXX"
                  className="inline-flex items-center justify-center"
                >
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-kworld-primary w-full sm:w-auto"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call Us
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
