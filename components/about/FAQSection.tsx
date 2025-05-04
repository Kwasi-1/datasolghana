"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const faqs = [
    {
      question: "What types of devices does DataSol support?",
      answer:
        "We support a wide range of devices including desktops, laptops, servers, mobile phones, tablets, external hard drives, RAID systems, and specialized industrial equipment. Our technicians are trained to handle both consumer and enterprise-grade hardware.",
    },
    {
      question: "Do you provide IT support for businesses?",
      answer:
        "Yes, we offer comprehensive IT support services for businesses of all sizes. Our managed IT services include network setup and maintenance, cybersecurity solutions, cloud integration, data backup, and recovery. We can serve as your complete IT department or supplement your existing team.",
    },
    {
      question: "Can you recover data from formatted drives?",
      answer:
        "Yes, in many cases we can recover data from formatted drives. Our specialized tools and techniques can often retrieve data even after formatting, provided the drive hasn't been extensively overwritten. The success rate depends on the specific circumstances, but we offer free evaluations to assess recovery possibilities.",
    },
    {
      question: "Is remote assistance available?",
      answer:
        "Absolutely. We offer secure remote assistance for many software issues, system configurations, and diagnostics. Our technicians can connect to your devices safely over the internet to resolve problems without requiring an in-person visit, saving you time and getting your systems back up and running faster.",
    },
    {
      question: "What is your average response time to support tickets?",
      answer:
        "For standard support requests, we typically respond within 2-4 business hours. For emergency and critical issues, our response time is under 1 hour. We prioritize cases based on severity and business impact, ensuring the most urgent matters receive immediate attention.",
    },
    {
      question: "Do you offer preventive maintenance services?",
      answer:
        "Yes, we provide comprehensive preventive maintenance services to keep your systems running optimally. This includes regular system health checks, software updates, security patches, hardware diagnostics, and proactive monitoring to identify and address potential issues before they cause downtime.",
    },
  ];

  return (
    <section className="pt-20 pb-32 bg-[#0A0A0A]">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <div className="w-full flex flex-col md:flex-row gap-12">
              <div className="flex flex-col gap-6 w-full md:w-1/2">
                {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b-0 bg-bytefix-bg px-6 rounded-xl h-fit"
                  >
                    <AccordionTrigger className="text-left py-6 text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
              <div className="flex flex-col gap-6 w-full md:w-1/2">
                {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
                  <AccordionItem
                    key={index + Math.ceil(faqs.length / 2)}
                    value={`item-${index + Math.ceil(faqs.length / 2)}`}
                    className="border-b-0 bg-bytefix-bg px-6 rounded-xl h-fit"
                  >
                    <AccordionTrigger className="text-left py-6 text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            </div>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
