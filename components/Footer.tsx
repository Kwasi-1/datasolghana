"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { navLinks } from "./Navbar";

const quickLinks = navLinks;
const logo = "/assets/datasol_logo.png";

const socialLinks = [
  {
    icon: "ri:facebook-fill",
    href: "https://www.facebook.com/profile.php?id=61573550787990",
  },
  { icon: "ri:twitter-fill", href: "#" },
  { icon: "ri:linkedin-box-fill", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white relative">
      <div className="max-w-7xl mx-auto py-16 lg:py-24 border-b border-white/50 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          width={80}
          height={120}
          className="h-20 w-auto mb-4"
        />

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-[15px] col-span-1 lg:col-span-2 sm:text-base lg:text-lg leading-[150%] font-[300]">
          <div>
            <p>datasoln@outlook.com</p>
            <p>www.datasolghana.net</p>
          </div>
          <div>
            <p>Address: Adenta Shopping Mall, Adenta, Ghana</p>
          </div>
          <div>+233 200 063 564</div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white mb-2 text-lg lg:text-xl leading-[150%] font-[600]">
            Quick Links
          </h4>
          <ul className="space-y-1 text-[#F5F5F5] text-sm">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-blue-500 transition-colors duration-200 text-base sm:text-lg leading-[150%] font-[300]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h4 className="text-white mb-2 text-lg lg:text-xl leading-[150%] font-[600]">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social Link"
                className="hover:text-blue-500 p-3 border border-white/30 rounded-full transition-colors duration-200"
              >
                <Icon icon={icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center font-light text-sm text-[#E4E5E7]/60 mt-6 px-4 pb-8">
        &copy; {new Date().getFullYear()} DATASOL TECHNOLOGIES. All rights
        reserved.
      </div>
    </footer>
  );
}
