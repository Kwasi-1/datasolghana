"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const logo = "/assets/Datasol_logo.png";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-25 py-4">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src={logo}
                alt="logo"
                width={50}
                height={100}
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-base font-normal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`hover:text-kworld-accent transition duration-300`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#contact"
              className="text-white capitalize bg-brand-primary py-4 px-7 rounded-lg"
            >
              Get a repair now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 " />
              </SheetTrigger>
              <SheetContent side="left" className="w-1/2 min-w-64 p-6 bg-white">
                <div className="mb-4">
                  <Image
                    src={logo}
                    alt="datasol Logo"
                    width={50}
                    height={50}
                    className="h-16 w-auto"
                  />
                </div>
                <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <a
                        href={link.href}
                        className={`transition-colors duration-300 ${
                          pathname === link.href
                            ? "text-accent font-medium"
                            : "hover:text-accent/50 font-light"
                        }`}
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
