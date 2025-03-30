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

const Footer: React.FC = () => {
  return (
    <footer className="bg-kworld-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DataSOL</h3>
            <p className="mb-4">
              Industry-leading data recovery & cybersecurity solutions in Ghana.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
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
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services#it-support"
                  className="hover:text-kworld-accent transition-colors"
                >
                  IT Support & Networking
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cloud-services"
                  className="hover:text-kworld-accent transition-colors"
                >
                  Cloud Services
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
                  href="tel:+233XXXXXXXXX"
                  className="hover:text-kworld-accent transition-colors"
                >
                  +233 XX XXX XXXX
                </a>
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:info@kworldnetwork.com"
                  className="hover:text-kworld-accent transition-colors"
                >
                  info@kworldnetwork.com
                </a>
              </p>
              <p className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>123 Tech Street, Accra, Ghana</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Kworld Network & Support Services.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
