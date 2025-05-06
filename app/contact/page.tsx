"use client";

import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bytefix-dark text-white">
      <Navbar />
      <motion.section 
        className="section-padding"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch
            </motion.h1>
            <motion.p 
              className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're here to help! Whether you need IT support, device repair, or
              just have a question, our team is ready to assist you. Get in
              touch with us through any of the methods below.
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left: Contact Info */}
            <motion.div 
              className="space-y-10 lg:w-[85%]"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <span className="mt-1">
                  <Phone className="w-7 h-7 text-blue-400" />
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call/ Email Us</h3>
                  <p className="text-gray-300 mb-1">
                    Have a detailed question or need a quote? Send us an email
                    and we'll get back to you within 24 hours.
                  </p>
                  <p className="text-gray-100">Call: (123) 456-7890</p>
                  <p className="text-gray-100">
                    Email: support@yourbusiness.com
                  </p>
                </div>
              </motion.div>
              <hr className="border-gray-700" />
              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <span className="mt-1">
                  <MapPin className="w-7 h-7 text-blue-400" />
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-300 mb-1">
                    Stop by our shop for face-to-face assistance or to drop off
                    your device.
                  </p>
                  <p className="text-gray-100">
                    4517 Washington Ave. Manchester, KY 39495
                  </p>
                </div>
              </motion.div>
              <hr className="border-gray-700" />
              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <span className="mt-1">
                  <Clock className="w-7 h-7 text-blue-400" />
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Hours of Operation:
                  </h3>
                  <p className="text-gray-100">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-100">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-100">Sunday: Closed</p>
                </div>
              </motion.div>
            </motion.div>
            {/* Right: Contact Form */}
            <motion.div variants={itemVariants}>
              <ContactForm dark />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
