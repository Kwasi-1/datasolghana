import Navbar from "./Navbar";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative text-white min-h-[500px] sm:min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/hero-image.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bytefix-dark to-black/45"></div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" /> */}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between max-w-7xl mx-auto">
        <Navbar />

        <div className="relative flex-grow grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-6 md:px-16 lg:px-0 py-12 sm:py-16 md:py-24 gap-6 md:gap-10">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            {/* <span className="text-sm uppercase tracking-widest text-[#00E0FF] font-semibold">
              Bytefix Repair Solutions
            </span> */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-md">
              Fixing Tech Issues <br className="hidden sm:block" /> Fast and
              Right
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-lg">
              Expert IT Support & repair services you can trust, ensuring your
              technology runs smoothly and efficiently, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
              <button className="w-full sm:w-auto bg-[#007BFF] hover:bg-[#0066cc] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition text-sm sm:text-base">
                Get Emergency Service
              </button>
              <button className="w-full sm:w-auto border border-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-white hover:text-black transition text-sm sm:text-base">
                Contact Us
              </button>
            </div>
          </div>

          {/* Optional right image/illustration */}
          <div className="w-full flex justify-center animate-fade-in-delay">
            {/* Add optional hero image or animation here */}
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-6 z-20 hidden md:flex flex-col items-center">
          <div className="w-px h-24 bg-white/20 mt-2" />

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1877f2] transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <X className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <div className="w-px h-24 bg-white/20 mt-2" />
        </div>

        {/* Mobile Social Icons */}
        <div className="md:hidden flex justify-center space-x-6 py-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1877f2] transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <X className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
