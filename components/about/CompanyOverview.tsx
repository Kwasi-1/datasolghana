"use client";

import Image from "next/image";
import React from "react";

const CompanyOverview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-kworld-primary">
              Who We Are
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Kworld Network & Support Services is a leading IT solutions
              provider in Ghana, dedicated to protecting businesses and
              individuals from data loss, cyber threats, and IT failures.
            </p>
            <p className="text-lg text-gray-700">
              Since our inception, we have successfully helped over 500+
              businesses recover lost data, prevent cyberattacks, and streamline
              IT operations.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <Image
              src="/assets/images/diverse-it-team.jpg"
              alt="Kworld Network Team"
              className="w-full h-auto object-cover"
              height={400}
              width={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
