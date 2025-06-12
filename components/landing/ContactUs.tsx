"use client";

import { Icon } from "@iconify/react";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-gray-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 2xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          {/* Office Info */}
          <div className="flex flex-col px-10 items-center space-y-4 md:border-r border-black/70 pb-10 md:pb-0">
            <div className="w-20 h-20 rounded-full bg-[#EAF6FF] border border-[#007BFF] flex items-center justify-center">
              <Icon
                icon="ph:building-office-thin"
                className="text-[#007BFF]"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-[500] text-[#102B5F]">
              Visit Our Office
            </h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Adenta+Shopping+Mall,+Adenta,+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 max-w-xs hover:text-[#007BFF] transition duration-300 cursor-pointer"
            >
              Adenta Shopping Mall, Adenta, Ghana
            </a>
          </div>

          {/* Call Info */}
          <div className="flex flex-col px-10 items-center space-y-4 md:border-r border-black/70 pb-10 md:pb-0">
            <div className="w-20 h-20 rounded-full bg-[#EAF6FF] border border-[#007BFF] flex items-center justify-center">
              <Icon
                icon="mdi-light:phone"
                className="text-[#007BFF]"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-[500] text-[#102B5F]">
              Have any issues?
            </h3>
            <a
              href="https://wa.me/233200063564?text=Hello%20Datasoln,%20I%20need%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold space-y-1 hover:text-[#007BFF] cursor-pointer transistion duration-300"
            >
              +233 200 063564
            </a>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col px-10 items-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-[#EAF6FF] border border-[#007BFF] flex items-center justify-center">
              <Icon
                icon="streamline:mail-send-email-message"
                className="text-[#007BFF]"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-[500] text-[#102B5F]">Email address</h3>
            <div className="text-gray-700 space-y-1">
              <a
                href="mailto:datasoln@outlook.com"
                className="hover:text-[#007BFF] transistion duration-300"
              >
                datasoln@outlook.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
