"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { InputField } from "./shared/InputField";
import { SelectField } from "./shared/SelectField";
import { TextareaField } from "./shared/TextareaField";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    recoveryType: "",
    brand: "",
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
          recoveryType: "",
          brand: "",
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
    <div className="bg-white max-w-4xl mx-auto py-20 px-5 md:px-12 rounded-2xl md:rounded-3xl">
      <h2 className="text-4xl font-bold mb-4">Need Any Help? Drop us a Line</h2>
      <p className="mb-6 text-gray-600">
        Fill out the form below and we will get back to you shortly.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-8">
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
          <InputField
            label="Email Address"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />

          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            required
            onChange={handleChange}
          />

          <SelectField
            label="Service Needed"
            name="service"
            value={formData.service}
            required
            onChange={(val) =>
              setFormData((prev) => ({ ...prev, service: val }))
            }
            options={[
              { label: "Data Recovery", value: "data-recovery" },
              { label: "Cybersecurity Solutions", value: "cybersecurity" },
              { label: "Digital Forensic Analysis", value: "digital-forensic" },
              { label: "IT Support & Networking", value: "it-support" },
              { label: "Other", value: "other" },
            ]}
          />

          {formData.service === "data-recovery" && (
            <>
              <SelectField
                label="Type of Drive"
                name="recoveryType"
                value={formData.recoveryType}
                required
                onChange={(val) =>
                  setFormData((prev) => ({ ...prev, recoveryType: val }))
                }
                options={[
                  { label: "Internal Drive", value: "internal" },
                  { label: "External Drive", value: "external" },
                ]}
              />

              <SelectField
                label="DDrive Brand"
                name="brand"
                value={formData.brand}
                required
                onChange={(val) =>
                  setFormData((prev) => ({ ...prev, brand: val }))
                }
                options={[
                  { label: "Seagate", value: "seagate" },
                  { label: "Western Digital", value: "western-digital" },
                  { label: "Toshiba", value: "toshiba" },
                  { label: "Samsung", value: "samsung" },
                  { label: "Other", value: "other" },
                ]}
              />
            </>
          )}
        </div>

        <TextareaField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Write your message..."
        />
        <button
          type="submit"
          className={[
            "w-fit rounded-full px-10 py-4 text-lg font-semibold text-white transition duration-300",
            "bg-gradient-to-r from-[#007BFF] to-[#00C6FF] hover:from-[#005FCC] hover:to-[#00A4CC]",
            "disabled:opacity-60 disabled:cursor-not-allowed",
          ].join(" ")}
          disabled={loading}
        >
          {loading ? "Sending..." : "Let's Fix your Problem!"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
