"use client";

import { MessageCircle } from "lucide-react";
import React from "react";

const WhatsAppButton: React.FC = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/233XXXXXXXXX", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;
