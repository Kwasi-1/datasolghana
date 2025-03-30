import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Contact Hero */}
      <section className="bg-gradient-to-r from-kworld-primary to-kworld-secondary text-white py-16">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with our team for expert IT solutions tailored to your
            business needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-kworld-primary">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-kworld-primary">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="text-kworld-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600">+233 XX XXX XXXX</p>
                    <p className="text-gray-600">+233 XX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-kworld-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">info@kworldnetwork.com</p>
                    <p className="text-gray-600">support@kworldnetwork.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-kworld-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600">
                      123 Tech Street, Accra, Ghana
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-kworld-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/233XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageCircle size={20} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="Visit our Facebook page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 text-white p-3 rounded-full hover:bg-sky-600 transition-colors"
                    aria-label="Follow us on Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-kworld-primary">
                Our Location
              </h2>
              <div className="h-64 bg-gray-200 rounded-md overflow-hidden">
                {/* Replace with actual Google Maps embed */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <p className="text-gray-600">Google Maps Embed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="section-padding bg-gray-50">
        <div className="bg-kworld-primary rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need Emergency IT Support?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our emergency response team is available 24/7 for critical IT
            issues. Don't wait if you're experiencing a data loss emergency or
            security breach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+233XXXXXXXXX">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" /> Call Emergency Support
              </Button>
            </a>
            <a
              href="https://wa.me/233XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-kworld-primary w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
