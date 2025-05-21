import { Icon } from "@iconify/react/dist/iconify.js";
import { Mail, MapPin, MessageSquare } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="hidden lg:block bg-white border-b border-black text-base text-gray-700 px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        {/* Email & Location */}
        <div className="flex items-center gap-16">
          {/* Email */}
          <a
            href="mailto:datasoln@outlook.com"
            className="flex items-center gap-1 hover:text-[#007BFF] transition cursor-pointer"
          >
            <Icon
              icon={`streamline:mail-send-email-message`}
              className="h-4 w-4"
            />
            <span>datasoln@outlook.com</span>
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Adenta+Shopping+Mall,+Adenta,+Ghana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#007BFF] transition cursor-pointer"
          >
            <Icon icon={`ion:location-sharp`} className="h-5 w-5" />
            <span>Adenta Shopping Mall, Adenta, Ghana</span>
          </a>
        </div>

        {/* Phone */}
        <a
          href="https://wa.me/233200063564"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-[#007BFF] transition cursor-pointer"
        >
          <Icon icon={`bi:chat-dots`} className="h-5 w-5" />
          <span>Let’s Chat: +233 200 063564</span>
        </a>
      </div>
    </div>
  );
};

export default TopBanner;
