"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FAQHero from "@/components/faq/FAQHero";
import { FAQItem, faqData } from "@/components/faq/faqData";

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs =
    activeCategory === "all"
      ? faqData
      : faqData.filter((faq) => faq.category === activeCategory);

  return (
    <div>
      {/* FAQ Hero Section */}
      <FAQHero />

      {/* FAQ Content */}
      <section className="section-padding">
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveCategory}
        >
          <TabsList className="mb-8 w-full overflow-x-auto flex justify-start p-1 bg-gray-100 rounded-lg">
            <TabsTrigger
              value="all"
              className="px-4 py-2 data-[state=active]:bg-kworld-primary data-[state=active]:text-white"
            >
              All Questions
            </TabsTrigger>
            <TabsTrigger
              value="data-recovery"
              className="px-4 py-2 data-[state=active]:bg-kworld-primary data-[state=active]:text-white"
            >
              Data Recovery
            </TabsTrigger>
            <TabsTrigger
              value="cybersecurity"
              className="px-4 py-2 data-[state=active]:bg-kworld-primary data-[state=active]:text-white"
            >
              Cybersecurity
            </TabsTrigger>
            <TabsTrigger
              value="it-support"
              className="px-4 py-2 data-[state=active]:bg-kworld-primary data-[state=active]:text-white"
            >
              IT Support
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
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
          </TabsContent>

          <TabsContent value="data-recovery" className="mt-0">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
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
          </TabsContent>

          <TabsContent value="cybersecurity" className="mt-0">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
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
          </TabsContent>

          <TabsContent value="it-support" className="mt-0">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
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
          </TabsContent>
        </Tabs>
      </section>

      {/* Still Have Questions CTA Section */}
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
                className="w-full sm:w-auto bg-kworld-accent hover:bg-kworld-accent/90"
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
