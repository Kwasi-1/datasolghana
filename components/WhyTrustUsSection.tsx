"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Phone } from "lucide-react";
import Image from "next/image";

interface TrustFeatureProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
}

const TrustFeature = ({
  icon: Icon,
  title,
  description,
  delay,
}: TrustFeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start mb-8 border-b border-[#2a2a2a] last:border-0 pb-8 last:pb-0 last:mb-0"
    >
      <div className="mr-7">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <div>
        <h4 className="text-2xl font-bold mb-4">{title}</h4>
        <p className="text-lg">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyTrustUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Award,
      title: "Certified Technicians",
      description:
        "Our team consists of certified professionals with years of experience in IT services.",
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description:
        "We offer quick turnaround times and often provide same-day solutions for critical issues.",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description:
        "Our helpdesk is available around the clock to assist with any urgent tech problems.",
    },
  ];

  return (
    <section id="trust-us" className="py-32 bg-bytefix-bg">
      <div className="container-custom w-[80%] ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold mb-4">Top Reasons to Trust Us</h2>
          <p className="max-w-4xl text-lg mx-auto">
            At DataSol, we pride ourselves on providing exceptional service and
            support. Here's why customers continue to choose us for their tech
            needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:py-5">
            {features.map((feature, index) => (
              <TrustFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.2 * index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-full"
          >
            <Image
              src="/assets/testimonial_2.webp"
              width={500}
              height={500}
              alt="Technician working on hardware"
              className="rounded-3xl w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsSection;
