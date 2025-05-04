"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-32 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-28">
          {/* Company Info */}
          <div className="lg:col-span-2 md:w-3/4 w-full">
            <div className="flex gap-2 items-center mb-4">
              <Image
                src="/assets/Datasol_logo.png"
                alt="logo"
                width={40}
                height={40}
              />
              <div className="text-3xl font-[500] ">
                <span className="capitalize">dataSol</span>
                {/* <span>TECHNOLOGIES </span> */}
              </div>
            </div>
            <p className=" mb-6 text-lg text-bytefix-lightGray/90 font-[400]">
              Professional data recovery and IT repair services for businesses
              and individuals. Fast, reliable tech support when you need it
              most.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573550787990"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-[#161616] hover:bg-primary hover:text-[#0A0A0A] transition-colors p-2 rounded-full"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="bg-[#161616] hover:bg-primary hover:text-[#0A0A0A] transition-colors p-2 rounded-full"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-[#161616] hover:bg-primary hover:text-[#0A0A0A] transition-colors p-2 rounded-full"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/233200063564"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-[#161616] hover:bg-green-600 hover:text-[#0A0A0A] transition-colors p-2 rounded-full"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-bytefix-lightGray/90">
              <li>
                <Link
                  href="/"
                  className=" hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="about"
                  className=" hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="services"
                  className=" hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/#blog"
                  className=" hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className=" hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-bytefix-lightGray/90">
              <li>
                <Link
                  href="/services"
                  className=" hover:text-primary transition-colors"
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
                  className=" hover:text-primary transition-colors"
                >
                  IT Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
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
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-bytefix-lightGray/90">
            <p className="text-base mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DataSol Technologies. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
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
