"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Computer, Network, Settings } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  delay: number;
}

const ServiceCard = ({ icon: Icon, title, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative p-8 rounded-lg bg-[#161616] border border-gray-800 hover:border-[#00E0FF]/30 transition-all group overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00E0FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="bg-[#1E1E1E] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#00E0FF]/10 transition-colors">
        <Icon className="w-8 h-8 text-[#00E0FF]" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">
        Professional {title.toLowerCase()} services with expert technicians and
        quick turnaround times.
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    { icon: Computer, title: "Computer Repair" },
    { icon: Network, title: "Network Solutions" },
    { icon: Settings, title: "IT Support" },
  ];

  return (
    <section id="services" className="py-20 bg-[#0A0A0A]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="col-span-3"
          >
            <h2 className="text-5xl font-bold mb-4">
              Trusted Computer Repair
              <br />
              and Expert IT Support
            </h2>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-2"
          >
            <p className="text-gray-400 max-w-3xl text-xl mx-auto">
              Our team of certified technicians provides comprehensive repair
              and IT services tailored to your specific needs and requirements.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
