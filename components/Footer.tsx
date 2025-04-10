"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto py-12 px-8 sm:px-10 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex gap-2 items-center mb-4">
              <Image
                src="/assets/Datasol_logo.png"
                alt="logo"
                width={50}
                height={50}
              />
              <div className="text- font-bold text-blue-500">
                <span className="block">DATASOL</span>{" "}
                <span className="text-blue-600">TECHNOLOGIES </span>
              </div>
            </div>
            <p className="mb-4 max-w-sm">
              Industry-leading data recovery & cybersecurity solutions in Ghana.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573550787990"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="hover:text-kworld-accent transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="hover:text-kworld-accent transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="hover:text-kworld-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-kworld-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-kworld-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-kworld-accent transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-kworld-accent transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-kworld-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#data-recovery"
                  className="hover:text-kworld-accent transition-colors"
                >
                  Data Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cybersecurity"
                  className="hover:text-kworld-accent transition-colors"
                >
                  Digital Forensic Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/services#it-support"
                  className="hover:text-kworld-accent transition-colors"
                >
                  IT Support & Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cloud-services"
                  className="hover:text-kworld-accent transition-colors"
                >
                  Computer Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a
                  href="tel:+233200063564"
                  className="hover:text-kworld-accent transition-colors"
                >
                  0200 063 564
                </a>
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:datasoln@outlook.com"
                  className="hover:text-kworld-accent transition-colors"
                >
                  datasoln@outlook.com
                </a>
              </p>
              <p className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>Adenta Shopping Mall, Adenta, Ghana</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <p className="text-center">
            &copy; {new Date().getFullYear()} DATASOL TECHNOLOGIES. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
