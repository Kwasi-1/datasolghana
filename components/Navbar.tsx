"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine if a link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Get link classes based on active state
  const getLinkClasses = (path: string) => {
    return isActive(path)
      ? "text-kworld-accent border-b-2 border-kworld-accent font-bold"
      : "text-kworld-dark hover:text-kworld-primary font-medium";
  };

  // Get mobile link classes based on active state
  const getMobileLinkClasses = (path: string) => {
    return isActive(path)
      ? "block px-3 py-2 rounded-md text-base font-bold text-kworld-accent bg-gray-50 border-l-4 border-kworld-accent"
      : "block px-3 py-2 rounded-md text-base font-medium text-kworld-dark hover:text-kworld-primary hover:bg-gray-100";
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/assets/Datasol_logo.png"
                alt="logo"
                width={50}
                height={80}
              />
              {/* <span className="text-2xl font-bold text-kworld-primary">
                Data
              </span>
              <span className="text-kworld-accent font-medium">Network</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>
            <Link href="/about" className={getLinkClasses("/about")}>
              About
            </Link>
            <Link href="/services" className={getLinkClasses("/services")}>
              Services
            </Link>
            <Link
              href="/case-studies"
              className={getLinkClasses("/case-studies")}
            >
              Case Studies
            </Link>
            <Link href="/faq" className={getLinkClasses("/faq")}>
              FAQ
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/contact">
              <Button
                variant="default"
                className={`${
                  isActive("/contact")
                    ? "bg-kworld-accent"
                    : "bg-kworld-primary"
                } hover:bg-kworld-primary/90`}
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
        <div className="md:hidden bg-white h-screen border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={getMobileLinkClasses("/")}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={getMobileLinkClasses("/about")}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className={getMobileLinkClasses("/services")}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className={getMobileLinkClasses("/case-studies")}
              onClick={toggleMenu}
            >
              Case Studies
            </Link>
            <Link
              href="/faq"
              className={getMobileLinkClasses("/faq")}
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={`${
                isActive("/contact")
                  ? "block px-3 py-2 rounded-md text-base font-bold text-white bg-kworld-accent"
                  : "block px-3 py-2 rounded-md text-base font-medium text-white bg-kworld-primary hover:bg-kworld-primary/90"
              }`}
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
