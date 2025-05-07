"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm: React.FC<{ dark?: boolean }> = ({ dark = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_emw6sir", // from EmailJS dashboard
        "template_09iu99g", // from EmailJS template
        formData,
        "YiMGyzk6LiMweV97L" // from EmailJS account
      )
      .then(() => {
        toast.success("Message Sent!", {
          description: "We'll get back to you as soon as possible.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong!", {
          description: "Please try again later.",
        });
        console.error("EmailJS Error:", error);
        setLoading(false);
      });
  };

  return (
    <div
      className={
        dark
          ? "bg-bytefix-bg text-white rounded-[20px] p-6 sm:p-8 md:p-12 lg:p-14"
          : "bg-white text-black rounded-[20px] p-6 sm:p-8 md:p-12 border border-gray-800"
      }
    >
      <h3
        className={
          dark
            ? "text-xl sm:text-2xl font-[600] mb-3 sm:mb-4 text-white"
            : "text-xl sm:text-2xl font-[600] mb-3 sm:mb-4 text-black/90"
        }
      >
        {dark ? "Quick Contact Form" : "Send Us a Message"}
      </h3>
      <p
        className={
          dark
            ? "text-base sm:text-lg tracking-tight text-gray-300 mb-6 sm:mb-8"
            : "text-base sm:text-lg tracking-tight text-gray-600 mb-6 sm:mb-8"
        }
      >
        Have a question or need support? Fill out the form below, and we'll get
        back to you as soon as possible
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          <Input
            id="name"
            name="name"
            placeholder="Full Name"
            className={
              dark
                ? "rounded-lg text-white bg-[#ffffff] pl-4 sm:pl-5 h-12 sm:h-14 border-stone-700 border-2 focus:border-primary text-sm sm:text-base placeholder-gray-400"
                : "rounded-lg text-[#929292] pl-4 sm:pl-5 h-12 sm:h-14 border-stone-200 border-2 focus:border-primary text-sm sm:text-base"
            }
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
            className={
              dark
                ? "rounded-lg h-12 sm:h-14 border-stone-700 bg-[#18191c] text-white pl-4 sm:pl-5 border-2 focus:border-primary text-sm sm:text-base placeholder-gray-400"
                : "rounded-lg h-12 sm:h-14 border-stone-200 pl-4 sm:pl-5 border-2 focus:border-primary text-sm sm:text-base"
            }
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className={
              dark
                ? "rounded-lg h-12 sm:h-14 border-stone-700 bg-[#18191c] text-white pl-4 sm:pl-5 border-2 focus:border-primary text-sm sm:text-base placeholder-gray-400"
                : "rounded-lg h-12 sm:h-14 border-stone-200 pl-4 sm:pl-5 border-2 focus:border-primary text-sm sm:text-base"
            }
            value={formData.phone}
            onChange={handleChange}
          />

          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="How can we help you?"
            className={
              dark
                ? "rounded-lg border-stone-700 bg-[#18191c] text-white pl-4 sm:pl-5 border-2 focus:border-primary text-sm sm:text-base placeholder-gray-400"
                : "rounded-lg border-stone-200 pl-4 sm:pl-5 border-2 focus:border-primary text-sm sm:text-base"
            }
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          className={
            dark
              ? "w-full bg-primary text-base sm:text-[17px] rounded-lg hover:border hover:text-[#0A0A0A] hover:bg-white py-4 sm:py-6"
              : "w-full bg-primary text-base sm:text-[17px] rounded-lg hover:border hover:text-[#0A0A0A] hover:bg-white py-4 sm:py-6"
          }
          disabled={loading}
        >
          {loading ? "Sending..." : "Request a Repair Today"}
        </Button>

        <p
          className={
            dark
              ? "text-xs text-gray-500 text-center"
              : "text-xs text-gray-400 text-center"
          }
        >
          By submitting this form, you agree to our Privacy Policy and Terms of
          Service.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
