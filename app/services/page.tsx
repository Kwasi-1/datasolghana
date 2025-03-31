"use client";

import React, { useEffect } from "react";
import {
  HardDrive,
  Database,
  Shield,
  Lock,
  Server,
  Wifi,
  Cloud,
  Settings,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceItemProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  id,
  title,
  description,
  icon,
  features,
}) => {
  return (
    <div id={id} className="py-12 scroll-mt-20">
      <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="bg-kworld-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-kworld-primary">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-6 w-6 text-kworld-accent mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link href="/contact">
          <Button className="bg-kworld-primary hover:bg-kworld-primary/90">
            Get a Quote
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services: ServiceItemProps[] = [
    {
      id: "data-recovery",
      title: "Data Recovery",
      description:
        "Our expert team specializes in recovering lost, damaged, or deleted data from all types of storage devices. We use advanced techniques and tools to retrieve your valuable information.",
      icon: <HardDrive size={36} className="text-kworld-primary" />,
      features: [
        "Recovery from failed hard drives, SSDs, and external devices",
        "RAID array data recovery",
        "Deleted file recovery",
        "Recovery from formatted or corrupted devices",
        "Secure and confidential process",
        "Free diagnostic assessment",
      ],
    },
    {
      id: "cybersecurity",
      title: "Digital Forensic Analysis",
      description:
        "We provide comprehensive digital forensic analysis to investigate cybersecurity incidents, data breaches, and recover critical evidence for legal proceedings.",
      icon: <Shield size={36} className="text-kworld-primary" />,
      features: [
        "Computer forensic examination",
        "E-discovery services",
        "Forensic data recovery",
        "Email forensics",
        "Mobile device forensics",
        "Cyber incident response",
      ],
    },
    {
      id: "it-support",
      title: "IT Support & Equipment Sales",
      description:
        "Keep your business running smoothly with our reliable IT support, network solutions, and quality IT equipment. We provide both on-site and remote support to address your technology needs.",
      icon: <Wifi size={36} className="text-kworld-primary" />,
      features: [
        "IT equipment sales",
        "Computer upgrades & repairs",
        "Network design and implementation",
        "Hardware and software troubleshooting",
        "System maintenance",
        "IT infrastructure management",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Backup Solutions",
      description:
        "Secure backup solutions to protect your critical business data.",
      icon: <Cloud size={24} className="text-kworld-primary" />,
    },
    {
      title: "IT Consulting",
      description:
        "Expert consulting to optimize your IT infrastructure and business processes.",
      icon: <Database size={24} className="text-kworld-primary" />,
    },
    {
      title: "Cyber Security",
      description:
        "Comprehensive security solutions to protect your digital assets.",
      icon: <Lock size={24} className="text-kworld-primary" />,
    },
    {
      title: "Computer Repairs",
      description:
        "Professional repair services for all types of computer systems.",
      icon: <Server size={24} className="text-kworld-primary" />,
    },
  ];

  return (
    <div>
      {/* Services Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-kworld-primary to-kworld-secondary z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="section-padding relative z-20 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Expert IT Services Tailored for Your Business
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 animate-fade-in">
            Comprehensive solutions to recover your data, secure your systems,
            and optimize your IT infrastructure.
          </p>
          <Link href="/contact">
            <Button
              variant="secondary"
              size="lg"
              className="shadow-lg hover:scale-105 transition-transform animate-fade-in"
            >
              Request a Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="bg-white shadow-md sticky top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-8 min-w-max">
            <a
              href="#data-recovery"
              className="text-kworld-primary font-medium hover:text-kworld-accent transition-colors flex items-center"
            >
              <HardDrive size={18} className="mr-2" /> Data Recovery
            </a>
            <a
              href="#cybersecurity"
              className="text-kworld-primary font-medium hover:text-kworld-accent transition-colors flex items-center"
            >
              <Shield size={18} className="mr-2" /> Cybersecurity
            </a>
            <a
              href="#it-support"
              className="text-kworld-primary font-medium hover:text-kworld-accent transition-colors flex items-center"
            >
              <Wifi size={18} className="mr-2" /> IT Support & Networking
            </a>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="space-y-12">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gray-50 opacity-95 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed"></div>
        <div className="section-padding relative z-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-kworld-primary">
              Additional Services
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer a wide range of additional services to meet all your IT
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md card-hover backdrop-blur-sm bg-white/90"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="bg-gradient-to-br from-kworld-primary to-kworld-secondary text-white rounded-lg p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Kworld Network
            </h2>
            <p className="max-w-2xl mx-auto">
              We are committed to providing the highest quality IT services with
              a focus on security, reliability, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <div className="bg-white/20 rounded-full p-4 mb-4">
                <Settings size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2">Expert Team</h3>
              <p>
                Our certified professionals bring years of experience to every
                project.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <div className="bg-white/20 rounded-full p-4 mb-4">
                <ExternalLink size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2">Fast Response</h3>
              <p>
                We understand the urgency of IT issues and respond quickly to
                minimize downtime.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <div className="bg-white/20 rounded-full p-4 mb-4">
                <Lock size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2">Security Focus</h3>
              <p>
                We prioritize the security and confidentiality of your data and
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-kworld-primary opacity-60 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="section-padding relative z-20">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation. Our team is ready to
              help you with all your IT needs.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-kworld-accent hover:bg-kworld-accent/90 shadow-lg hover:scale-105 transition-transform"
              >
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
