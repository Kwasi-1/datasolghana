"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const getLinkClasses = (path: string) => {
    return isActive(path)
      ? "text-blue-500 font-semibold"
      : "text-white hover:text-blue-400 transition duration-300 font-medium";
  };

  const getMobileLinkClasses = (path: string) => {
    return isActive(path)
      ? "block px-4 py-3 text-blue-500 font-bold bg-gray-50 rounded-lg"
      : "block px-4 py-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg transition-colors";
  };

  return (
    <nav className="z-50 border-b border-stone-100/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/Datasol_logo.png"
              alt="logo"
              width={40}
              height={64}
              className="w-8 h-auto sm:w-10 md:w-[50px]"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className={`${getLinkClasses("/")} text-sm lg:text-base`}>
              Home
            </Link>
            <Link href="/about" className={`${getLinkClasses("/about")} text-sm lg:text-base`}>
              About us
            </Link>
            <Link href="/services" className={`${getLinkClasses("/services")} text-sm lg:text-base`}>
              Service
            </Link>
            <Link href="/blog" className={`${getLinkClasses("/blog")} text-sm lg:text-base`}>
              Blog
            </Link>
            <Link href="/contact" className={`${getLinkClasses("/contact")} text-sm lg:text-base`}>
              Contact us
            </Link>
            <Link href="/pages" className={`${getLinkClasses("/pages")} text-sm lg:text-base`}>
              Pages
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition text-sm lg:text-base lg:px-6">
                Request a Repair Today
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-500 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-1">
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
              About us
            </Link>
            <Link
              href="/services"
              className={getMobileLinkClasses("/services")}
              onClick={toggleMenu}
            >
              Service
            </Link>
            <Link
              href="/blog"
              className={getMobileLinkClasses("/blog")}
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={getMobileLinkClasses("/contact")}
              onClick={toggleMenu}
            >
              Contact us
            </Link>
            <Link
              href="/pages"
              className={getMobileLinkClasses("/pages")}
              onClick={toggleMenu}
            >
              Pages
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="block mt-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition text-sm">
                Request a Repair Today
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
