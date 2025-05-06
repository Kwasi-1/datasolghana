"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-16 sm:pt-24 md:pt-32 pb-6 sm:pb-8">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-16 sm:mb-20 md:mb-28">
          {/* Company Info */}
          <div className="lg:col-span-2 md:w-3/4 w-full">
            <div className="flex gap-2 items-center mb-4">
              <Image
                src="/assets/Datasol_logo.png"
                alt="logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <div className="text-2xl sm:text-3xl font-[500]">
                <span className="capitalize">dataSol</span>
              </div>
            </div>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg text-bytefix-lightGray/90 font-[400]">
              Professional data recovery and IT repair services for businesses
              and individuals. Fast, reliable tech support when you need it
              most.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573550787990"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-[#161616] hover:bg-primary hover:text-[#0A0A0A] transition-colors p-2 rounded-full"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="bg-[#161616] hover:bg-primary hover:text-[#0A0A0A] transition-colors p-2 rounded-full"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-[#161616] hover:bg-primary hover:text-[#0A0A0A] transition-colors p-2 rounded-full"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/233200063564"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-[#161616] hover:bg-green-600 hover:text-[#0A0A0A] transition-colors p-2 rounded-full"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-bytefix-lightGray/90">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-bytefix-lightGray/90">
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Data Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cybersecurity"
                  className="hover:text-primary transition-colors"
                >
                  Digital Forensic Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/services#it-support"
                  className="hover:text-primary transition-colors"
                >
                  IT Support & Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cloud-services"
                  className="hover:text-primary transition-colors"
                >
                  Computer Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  IT Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Contact Info
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start">
                <div className="text-bytefix-lightGray/90">
                  <span className="mr-2 text-bytefix-text">Address:</span>
                  Adenta Shopping Mall, Adenta, Ghana
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">Email:</span>
                <a
                  href="mailto:datasoln@outlook.com"
                  className="hover:text-primary text-bytefix-lightGray/90 transition-colors"
                >
                  datasoln@outlook.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">Phone:</span>
                <a
                  href="tel:+233200063564"
                  className="hover:text-primary text-bytefix-lightGray/90 transition-colors"
                >
                  0200 063 564
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm sm:text-base text-bytefix-lightGray/90">
            <p className="mb-4 md:mb-0 text-sm sm:text-base lg:text-lg">
              &copy; {new Date().getFullYear()} DataSol Technologies. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
