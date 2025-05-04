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
      ? "block px-4 py-2 text-blue-500 font-bold bg-gray-100 rounded"
      : "block px-4 py-2 text-gray-800 font-medium hover:bg-gray-200 rounded";
  };

  return (
    <nav className=" z-50 border-b border-stone-100/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/Datasol_logo.png"
              alt="logo"
              width={50}
              height={80}
            />
            {/* <span className="text-white text-xl font-semibold">
              Byte<span className="text-gray-300">Fix</span>
            </span> */}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>
            <Link href="/about" className={getLinkClasses("/about")}>
              About us
            </Link>
            <Link href="/services" className={getLinkClasses("/services")}>
              Service
            </Link>
            <Link href="/blog" className={getLinkClasses("/blog")}>
              Blog
            </Link>
            <Link href="/contact" className={getLinkClasses("/contact")}>
              Contact us
            </Link>
            <Link href="/pages" className={getLinkClasses("/pages")}>
              Pages
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition">
                Request a Repair Today
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-500 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-2">
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
            <Link href="/contact" onClick={toggleMenu}>
              <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition">
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
