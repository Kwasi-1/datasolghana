"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs: FAQItem[] = [
    // Data Recovery FAQs
    {
      question: "How long does data recovery take?",
      answer:
        "The time required for data recovery depends on several factors, including the extent of the damage, the storage device type, and the amount of data. Simple recoveries can be completed in 1-2 business days, while complex cases may take 5-7 business days or longer. We provide an estimated timeline after our initial diagnostic assessment.",
      category: "data-recovery",
    },
    {
      question: "Is my data safe during the recovery process?",
      answer:
        "Yes, your data's security and confidentiality are our top priorities. We follow strict security protocols and sign confidentiality agreements with all clients. Our recovery processes are designed to be non-invasive, and we create working copies of your data rather than manipulating the original whenever possible.",
      category: "data-recovery",
    },
    {
      question: "Can you recover data from physically damaged devices?",
      answer:
        "Yes, we can recover data from many physically damaged devices, including devices with bad sectors, head crashes, PCB failures, and other mechanical issues. Our technical experts have specialized tools and clean room facilities to handle even severe physical damage in many cases.",
      category: "data-recovery",
    },
    {
      question: "What types of storage media can you recover data from?",
      answer:
        "We can recover data from virtually all types of storage media, including hard drives (HDD), solid-state drives (SSD), RAID arrays, USB flash drives, memory cards, smartphones, tablets, and tape storage. Our recovery capabilities extend to both modern and legacy storage systems.",
      category: "data-recovery",
    },

    // Cybersecurity FAQs
    {
      question: "What cybersecurity services do you offer?",
      answer:
        "Our cybersecurity services include vulnerability assessments, penetration testing, security audits, incident response, security monitoring, malware removal, ransomware recovery, security awareness training, and implementation of comprehensive security solutions tailored to your business needs.",
      category: "cybersecurity",
    },
    {
      question: "How can I tell if my business needs a cybersecurity upgrade?",
      answer:
        "Signs that your business may need a cybersecurity upgrade include: outdated security software, frequent security incidents, lack of a formal security policy, no regular security training for employees, uncertain compliance status with industry regulations, or if you've never had a professional security assessment.",
      category: "cybersecurity",
    },
    {
      question: "What happens during a security assessment?",
      answer:
        "During a security assessment, our experts evaluate your current security posture by examining your systems, networks, applications, policies, and procedures. We identify vulnerabilities, assess risks, and provide a detailed report with recommended security improvements prioritized by risk level.",
      category: "cybersecurity",
    },
    {
      question: "How do you handle a security breach?",
      answer:
        "Our incident response process includes immediate containment of the breach, thorough investigation to determine the extent and cause, removal of threats, recovery of affected systems, and implementation of additional security measures to prevent similar breaches. We also provide guidance on any necessary reporting to authorities or affected parties.",
      category: "cybersecurity",
    },

    // IT Support FAQs
    {
      question: "What does your IT support service include?",
      answer:
        "Our IT support services include helpdesk support, hardware and software troubleshooting, network management, system updates and maintenance, data backup solutions, cloud services management, IT consultancy, and strategic technology planning. We offer both remote and on-site support options.",
      category: "it-support",
    },
    {
      question: "Do you offer 24/7 IT support?",
      answer:
        "Yes, we offer 24/7 emergency IT support for critical issues that affect business operations. Our standard support hours are Monday to Friday, 8:00 AM to 6:00 PM, and Saturday, 9:00 AM to 2:00 PM, but clients with premium support plans have access to round-the-clock assistance for urgent matters.",
      category: "it-support",
    },
    {
      question: "How quickly do you respond to IT support requests?",
      answer:
        "Our response times depend on the severity of the issue and your service level agreement. Critical issues affecting multiple users or business operations receive immediate attention, usually within 30 minutes. Non-critical issues are typically addressed within 2-4 business hours.",
      category: "it-support",
    },
    {
      question: "Can you help with cloud migration?",
      answer:
        "Yes, we provide comprehensive cloud migration services, including assessment of your current infrastructure, planning the migration strategy, executing the migration with minimal disruption, and ongoing management of your cloud environment. We work with major cloud platforms including AWS, Microsoft Azure, and Google Cloud.",
      category: "it-support",
    },
  ];

  return (
    <div>
      {/* FAQ Hero */}
      <section className="bg-gradient-to-r from-kworld-primary to-kworld-secondary text-white py-16">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about our services, processes, and
            expertise.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white shadow-sm sticky top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-6 min-w-max">
            <button className="text-kworld-accent font-medium border-b-2 border-kworld-accent pb-1">
              All Questions
            </button>
            <button className="text-kworld-dark font-medium hover:text-kworld-primary transition-colors">
              Data Recovery
            </button>
            <button className="text-kworld-dark font-medium hover:text-kworld-primary transition-colors">
              Cybersecurity
            </button>
            <button className="text-kworld-dark font-medium hover:text-kworld-primary transition-colors">
              IT Support
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-md px-6"
              >
                <AccordionTrigger className="text-left font-medium text-kworld-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gray-50">
        <div className="bg-kworld-primary rounded-lg p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, our team is
            ready to help. Contact us today for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
            <a href="tel:+233XXXXXXXXX">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-kworld-primary w-full sm:w-auto"
              >
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
