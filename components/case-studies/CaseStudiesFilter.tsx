"use client";

import React from "react";
import { HardDrive, Shield, Wifi, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudiesFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const CaseStudiesFilter: React.FC<CaseStudiesFilterProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  return (
    <section className="bg-white shadow-sm sticky top-[80px] z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
        <div className="flex space-x-2 md:space-x-6 min-w-max items-center">
          <Filter
            size={18}
            className="text-kworld-primary mr-2 hidden md:block"
          />
          <Button
            variant={activeFilter === "all" ? "default" : "ghost"}
            size="sm"
            className={
              activeFilter === "all"
                ? "bg-kworld-accent text-white"
                : "text-kworld-dark"
            }
            onClick={() => onFilterChange("all")}
          >
            All Case Studies
          </Button>
          <Button
            variant={activeFilter === "Data Recovery" ? "default" : "ghost"}
            size="sm"
            className={`flex items-center ${
              activeFilter === "Data Recovery"
                ? "bg-kworld-accent text-white"
                : "text-kworld-dark"
            }`}
            onClick={() => onFilterChange("Data Recovery")}
          >
            <HardDrive size={16} className="mr-2" /> Data Recovery
          </Button>
          <Button
            variant={activeFilter === "Cybersecurity" ? "default" : "ghost"}
            size="sm"
            className={`flex items-center ${
              activeFilter === "Cybersecurity"
                ? "bg-kworld-accent text-white"
                : "text-kworld-dark"
            }`}
            onClick={() => onFilterChange("Cybersecurity")}
          >
            <Shield size={16} className="mr-2" /> Cybersecurity
          </Button>
          <Button
            variant={activeFilter === "IT Support" ? "default" : "ghost"}
            size="sm"
            className={`flex items-center ${
              activeFilter === "IT Support"
                ? "bg-kworld-accent text-white"
                : "text-kworld-dark"
            }`}
            onClick={() => onFilterChange("IT Support")}
          >
            <Wifi size={16} className="mr-2" /> IT Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesFilter;
