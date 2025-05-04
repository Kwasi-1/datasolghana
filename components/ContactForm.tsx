"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm: React.FC = () => {
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
    <div className="bg-white text-black rounded-[20px] p-12 border border-gray-800">
      <h3 className="text-2xl font-[600] mb-4 text-black/90">
        Send Us a Message
      </h3>
      <p className="text-lg tracking-tight text-gray-600 mb-8">
        Have a question or need support? Fill out the form below, and we’ll get
        back to you as soon as possible
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <Input
            id="name"
            name="name"
            placeholder="Full Name"
            className="rounded-lg text-[#929292] pl-5 h-14 border-stone-200 border-2 focus:border-primary"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
            className="rounded-lg h-14 border-stone-200 pl-5 border-2 focus:border-primary"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="rounded-lg h-14 border-stone-200 pl-5 border-2 focus:border-primary"
            value={formData.phone}
            onChange={handleChange}
          />

          <Textarea
            id="message"
            rows={4}
            placeholder="How can we help you?"
            className="rounded-lg border-stone-200 pl-5 border-2 focus:border-primary"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary text-[17px] rounded-lg hover:border hover:text-[#0A0A0A] hover:bg-white py-6"
          disabled={loading}
        >
          {loading ? "Sending..." : " Request a Repair Today"}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          By submitting this form, you agree to our Privacy Policy and Terms of
          Service.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
