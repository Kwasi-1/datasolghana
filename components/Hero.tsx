"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <section
      className={`relative flex items-center ${
        isHomePage ? "min-h[700px]" : "h-[65vh]"
      } `}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>

      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>

      {/* Content */}
      <div className="section-padding relative z-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl max-w-3xl mx-auto opacity-90 mb-10 animate-fade-in">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          {buttonText && buttonLink && (
            <Link href={buttonLink}>
              <Button className="bg-kworld-accent hover:bg-kworld-accent/90 text-white shadow-lg hover:scale-105 transition-transform w-full sm:w-auto">
                {buttonText}
              </Button>
            </Link>
          )}
          {secondaryButtonText && secondaryButtonLink && (
            <a
              href={secondaryButtonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-kworld-primary w-full sm:w-auto shadow-lg"
              >
                {secondaryButtonText}
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
