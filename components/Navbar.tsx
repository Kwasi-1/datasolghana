"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
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
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isSheetOpen, setIsSheetOpen] = useState(false);
  const logo = "/assets/Datasol_logo.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white shadow-sm md:sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "animate-navbar-slide" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-25 py-4">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src={logo}
                alt="logo"
                width={50}
                height={100}
                className="h-16 md:h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 text-base font-normal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-kworld-accent text-lg transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/#contact"
              className="text-white capitalize bg-brand-primary py-4 px-7 rounded-lg"
            >
              Get a repair now
            </a>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger
                className="transition-transform duration-200 hover:scale-110"
                // onClick={() => setIsSheetOpen(true)}
              >
                <Menu className="h-7 w-7" />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-1/2 min-w-64 p-6 bg-white 
                  data-[state=open]:animate-sheet-slide-in-left 
                  data-[state=closed]:animate-sheet-slide-out-left
                  transition-transform duration-300 ease-in-out"
              >
                <div className="mb-4 animate-fade-in-up">
                  <Image
                    src={logo}
                    alt="datasol Logo"
                    width={50}
                    height={50}
                    className="h-16 w-auto"
                  />
                </div>
                <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
                  {navLinks.map((link, index) => (
                    // <SheetClose asChild key={link.label}>

                    <a
                      href={link.href}
                      key={link.label}
                      // onClick={() => setIsSheetOpen(false)}
                      className="transition-all duration-300 hover:text-accent/50 font-light 
                          animate-fade-in-up hover:translate-x-2 hover:bg-gray-50 
                          px-3 py-2 rounded-md"
                      style={{
                        animationDelay: `${(index + 1) * 100}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      {link.label}
                    </a>
                    // </SheetClose>
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
