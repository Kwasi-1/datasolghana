"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedServiceCard from "@/components/services/EnhancedServiceCard";
import { Computer, Shield, Database, Network, Settings } from "lucide-react";

const services = [
  {
    title: "Computer Repair",
    description:
      "Expert hardware and software repair services for all computer types. Fast diagnosis and reliable fixes for any technical issues.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    icon: Computer,
  },
  {
    title: "Data Recovery",
    description:
      "Professional data recovery services for all storage media. We recover your valuable data from damaged, failed, or inaccessible devices.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60",
    icon: Database,
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets. We provide advanced threat detection, prevention, and response services.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    icon: Shield,
  },
  {
    title: "Network Solutions",
    description:
      "End-to-end network design, implementation, and management services. We ensure your network infrastructure is reliable, secure, and scalable.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60",
    icon: Network,
  },
  {
    title: "IT Support",
    description:
      "Reliable and responsive IT support for businesses of all sizes. Our certified technicians provide prompt resolution for all your tech issues.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60",
    icon: Settings,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-bytefix-dark text-[#FFFFFF]">
      <Navbar />

      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container-custom pt-24 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-[#F9F9FA] max-w-3xl mx-auto text-lg">
          Explore our trusted solutions across IT, data, and security. Our
          expert team delivers reliable and innovative tech services.
        </p>
      </motion.header>

      {/* Services Grid using EnhancedServiceCard */}
      <section className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EnhancedServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-[#0A0A0A] to-[#161616] p-10 md:p-16 rounded-2xl border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(0,97,254,0.5),transparent_70%)]"></div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need expert assistance with your tech issues?
              </h2>
              <p className="text-[#F9F9FA] mb-8 text-lg">
                Our certified technicians are ready to help you with all your
                technology needs. From hardware repairs to comprehensive IT
                support, we've got you covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => "https://wa.me/233200063564"}
                  className="bg-[#0061FE] hover:bg-[#0061FE]/90 text-white px-6 py-3 rounded-md font-medium"
                >
                  Request a Repair Today
                </button>
                <button className="border border-gray-600 hover:border-[#0061FE] text-white px-6 py-3 rounded-md font-medium">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
