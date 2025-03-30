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
      <section className="relative min-h-[700px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="section-padding relative z-20 text-white">
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
                <Button className="bg-kworld-accent hover:bg-kworld-accent/90 text-white shadow-lg hover:scale-105 transition-transform w-full sm:w-auto">
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
                  className="bg-transparent border-white text-white hover:bg-white hover:text-kworld-primary w-full sm:w-auto shadow-lg"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat with an Expert
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gray-50 opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed"></div>
        <div className="section-padding relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-lg shadow-md backdrop-blur-sm bg-white/90 hover:shadow-lg transition-shadow">
              <Counter end={500} suffix="+" />
              <p className="mt-4 text-gray-600 font-medium">
                Successful Data Recoveries
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md backdrop-blur-sm bg-white/90 hover:shadow-lg transition-shadow">
              <Counter end={100} suffix="+" />
              <p className="mt-4 text-gray-600 font-medium">
                Trusted Businesses in Ghana
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md backdrop-blur-sm bg-white/90 hover:shadow-lg transition-shadow">
              <Counter end={10} suffix="+" />
              <p className="mt-4 text-gray-600 font-medium">
                Years of IT Security Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-kworld-primary/10 text-kworld-primary rounded-full font-medium text-sm mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kworld-primary">
            Comprehensive IT Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide professional IT solutions to protect your data, secure
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
      <section className="relative py-16">
        <div className="absolute inset-0 bg-kworld-primary opacity-97 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed"></div>
        <div className="section-padding relative z-20">
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="max-w-2xl mx-auto">
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
      <section className="section-padding">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-kworld-primary/90 to-kworld-secondary/90 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
          <div className="p-8 md:p-12 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Help? Let's Talk!
                </h2>
                <p className="mb-6">
                  Contact us today for a free consultation. Our experts are
                  ready to help you with your IT needs.
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
                      className="bg-green-500 hover:bg-green-600 w-full sm:w-auto shadow-lg hover:scale-105 transition-transform"
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
                      className="bg-transparent border-white text-white hover:bg-white hover:text-kworld-primary w-full sm:w-auto shadow-lg"
                    >
                      <Phone className="mr-2 h-4 w-4" /> Call Us
                    </Button>
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg backdrop-blur-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
