"use client";

import Image from "next/image";
import React from "react";

const CompanyOverview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Who We Are
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              DATASOL TECHNOLOGIES is a trusted IT solutions provider specializing in data recovery, cybersecurity, and IT consulting services. Our mission is to help businesses and individuals secure their digital assets and optimize their IT infrastructure.
            </p>
            <p className="text-lg text-gray-700">
              With expertise in digital forensic analysis, backup solutions, and IT equipment sales, we ensure that our clients stay ahead in the ever-evolving technological landscape.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <Image
              src="/assets/images/diverse-it-team.jpg"
              alt="DATASOL TECHNOLOGIES Team"
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
