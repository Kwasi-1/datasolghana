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
            <p className="text-gray-700 max-w-xs">
              23 1st Freetown Link, Okponglo, Accra, Ghana
            </p>
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
            <div className="text-2xl font-bold space-y-1 hover:text-[#007BFF] cursor-pointer transistion duration-300">
              +233 302 421429
            </div>
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
              <p>info@datasol.dev</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
