"use client";

import React, { useEffect, useState } from "react";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesFilter from "@/components/case-studies/CaseStudiesFilter";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import CaseStudiesTestimonials from "@/components/case-studies/CaseStudiesTestimonials";
import CaseStudiesPartners from "@/components/case-studies/CaseStudiesPartners";
import CaseStudiesCTA from "@/components/case-studies/CaseStudiesCTA";
import { caseStudies } from "@/data/caseStudiesData";

const CaseStudiesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredCaseStudies(caseStudies);
    } else {
      setFilteredCaseStudies(
        caseStudies.filter((study) => study.category === activeFilter)
      );
    }
  }, [activeFilter]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen">
      <CaseStudiesHero />

      <CaseStudiesFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Case Studies Grid */}
      <section className="section-padding py-16">
        {filteredCaseStudies.length === 0 ? (
          <div className="text-center py-8">
            <h3 className="text-xl text-gray-600">
              No case studies found for this category.
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id || index}
                {...study}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        )}
      </section>

      <CaseStudiesTestimonials />

      <CaseStudiesPartners />

      <CaseStudiesCTA />
    </div>
  );
};

export default CaseStudiesPage;
