"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

interface ContactMethodProps {
  icon: React.ElementType;
  sectionTitle: string;
  link?: string;
  link_2?: string;
  linkText?: string;
  link_2_Text?: string;
}

const ContactMethod = ({
  icon: Icon,
  sectionTitle,
  link,
  link_2,
  linkText,
  link_2_Text,
}: ContactMethodProps) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 items-start mb-6 sm:mb-8">
      <div className="bg-primary rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <p className="mb-1 text-sm sm:text-base">{sectionTitle}</p>
      <div className="flex flex-col">
        {/* <h4 className="font-bold mb-1">{title}</h4> */}
        {/* <p className="text-lg mb-1">{info}</p> */}
        {link && (
          <a href={link} className="text-base sm:text-lg hover:text-primary transition-colors">
            {linkText}
          </a>
        )}
        {link_2 && (
          <a href={link_2} className="text-base sm:text-lg hover:text-primary transition-colors">
            {link_2_Text}
          </a>
        )}
      </div>
    </div>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 bg-[#0A0A0A]"
      style={{
        backgroundImage: "url('/assets/contact_image.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8 lg:w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Need quick help?
              <br className="hidden sm:block" />
              Contact us now!
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
              Our team of experts is ready to assist you with any tech issues or
              questions. Reach out to us through any of these channels for
              prompt support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <ContactMethod
                icon={MapPin}
                sectionTitle="Address"
                link="#"
                linkText="Adenta Shopping Mall, Adenta, Ghana"
              />

              <ContactMethod
                icon={Phone}
                sectionTitle="Contact"
                link="tel:+233200063564"
                linkText="0200 063 564"
                link_2="mailto:datasoln@outlook.com"
                link_2_Text="datasoln@outlook.com"
              />

              {/* <ContactMethod
                icon={Mail}
                title="Email Us"
                info="support@datasol.tech"
                link="mailto:support@datasol.tech"
                linkText="Send Email"
              /> */}
            </div>
            <p className="text-base sm:text-lg border-t border-gray-800 pt-6 sm:pt-8">
              Office Hours: Mon – Sat: 8:00 AM – 10:00 PM
            </p>

            {/* <div className="mt-8">
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-[#161616] hover:bg-primary/20 text-primary p-3 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-[#161616] hover:bg-primary/20 text-primary p-3 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-[#161616] hover:bg-primary/20 text-primary p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
