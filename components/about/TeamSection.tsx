"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "John Doe",
      title: "Lead Cybersecurity Expert",
      description:
        "10+ years experience in threat detection & IT security consulting.",
      image: "/assets/images/team-member-1.jpg",
    },
    {
      name: "Jane Smith",
      title: "Head of IT Support",
      description:
        "Specialist in cloud infrastructure & enterprise networking.",
      image: "/assets/images/team-member-2.jpg",
    },
    {
      name: "Michael Johnson",
      title: "Data Recovery Specialist",
      description: "Expert in recovering data from all types of storage media.",
      image: "/assets/images/team-member-3.jpg",
    },
    {
      name: "Sarah Williams",
      title: "IT Project Manager",
      description:
        "Experienced in managing complex IT implementation projects.",
      image: "/assets/images/team-member-4.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/assets/images/team-bg.jpg')" }}
      ></div>

      <div className="section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-kworld-primary">
            Meet Our Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-none shadow-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-56 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  height={224}
                  width={224}
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-1 text-kworld-primary">
                  {member.name}
                </h3>
                <p className="text-kworld-secondary font-medium mb-2">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
