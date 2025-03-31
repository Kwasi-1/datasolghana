"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-kworld-primary">
                Data
              </span>
              <span className="text-kworld-accent font-bold">SOL</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-kworld-dark hover:text-kworld-primary/60 transition duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-kworld-dark hover:text-kworld-primary/60 transition duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-kworld-dark hover:text-kworld-primary/60 transition duration-300 font-medium"
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="text-kworld-dark hover:text-kworld-primary/60 transition duration-300 font-medium"
            >
              Case Studies
            </Link>
            <Link
              href="/faq"
              className="text-kworld-dark hover:text-kworld-primary/60 transition duration-300 font-medium"
            >
              FAQ
            </Link>
            <Link href="/contact">
              <Button
                variant="default"
                className="bg-kworld-primary hover:bg-kworld-primary/90"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-kworld-dark hover:text-kworld-primary hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-kworld-dark hover:text-kworld-primary hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-kworld-dark hover:text-kworld-primary font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-kworld-dark hover:text-kworld-primary hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="block px-3 py-2 rounded-md text-base font-medium text-kworld-dark hover:text-kworld-primary hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Case Studies
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-kworld-dark hover:text-kworld-primary hover:bg-gray-100"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-kworld-primary hover:bg-kworld-primary/90"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
