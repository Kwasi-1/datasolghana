"use client";

import { MessageCircle } from "lucide-react";
import React from "react";

const WhatsAppButton: React.FC = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/233200063564", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-button flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline text-sm font-medium">Chat with Us</span>
    </button>
  );
};

export default WhatsAppButton;
