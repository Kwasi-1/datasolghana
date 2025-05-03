import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section className="relative text-white min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6753c944298bec1f730af5a1/6753f11761e252d7240e7888_hero-image.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex flex-col items-center gap-6 fixed right-6 top-1/2 transform -translate-y-1/2 z-20">
        <a
          href="#"
          className="text-white hover:text-[#00E0FF] transition duration-300"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="#"
          className="text-white hover:text-[#00E0FF] transition duration-300"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="#"
          className="text-white hover:text-[#00E0FF] transition duration-300"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="#"
          className="text-white hover:text-[#00E0FF] transition duration-300"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />

        {/* Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 py-24 gap-10">
          {/* Left */}
          <div className="space-y-6 animate-fadeInLeft">
            <span className="text-sm uppercase tracking-widest text-[#00E0FF] font-medium">
              Bytefix Repair Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Fast, Reliable <br /> IT & Gadget Repairs
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              From smartphones to laptops, we fix it all. Bytefix offers
              same-day repair with quality you can trust.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="bg-[#00E0FF] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#00cbe6] transition">
                Book a Repair
              </button>
              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Content Placeholder */}
          <div className="w-full flex justify-center animate-fadeInUp">
            {/* Optional animation or image goes here */}
          </div>
        </div>
      </div>
    </section>
  );
}
