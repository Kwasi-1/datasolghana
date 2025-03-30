"use client";

import Image from "next/image";
import React from "react";

const CaseStudiesPartners: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: "Ghana Commercial Bank",
      logo: "/assets/images/partners/logo1.png",
    },
    {
      id: 2,
      name: "Ministry of Communications",
      logo: "/assets/images/partners/logo2.png",
    },
    {
      id: 3,
      name: "TechSolutions Ghana",
      logo: "/assets/images/partners/logo3.png",
    },
    {
      id: 4,
      name: "Manufacturing Plus",
      logo: "/assets/images/partners/logo4.png",
    },
    {
      id: 5,
      name: "University of Ghana",
      logo: "/assets/images/partners/logo5.png",
    },
    {
      id: 6,
      name: "Accra General Hospital",
      logo: "/assets/images/partners/logo6.png",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We&apos;re proud to work with leading organizations across Ghana.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-gray-100 h-20 w-full rounded flex items-center justify-center p-4">
              <Image
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "data:image/svg+xml;charset=UTF-8,%3Csvg width='36' height='36' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ccc' fill-rule='evenodd'%3E%3Cpath d='M5 5h26v26H5z'/%3E%3Cpath d='M18 18h-4v-4h4v4zm4-4h4v4h-4v-4z' fill-opacity='.5'/%3E%3C/g%3E%3C/svg%3E";
                  target.alt = `Logo placeholder for ${partner.name}`;
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesPartners;
