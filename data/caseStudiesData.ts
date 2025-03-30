import { HardDrive, Shield, Wifi } from "lucide-react";
import { CaseStudyProps } from "@/models/case_studies";

export const caseStudies: CaseStudyProps[] = [
  {
    id: "data-recovery-finance",
    title: "Critical Data Recovery for Financial Institution",
    client: "Major Bank in Accra",
    challenge: "The client experienced a catastrophic RAID array failure containing critical financial records and customer data.",
    solution: "Our team performed emergency data recovery using specialized tools and clean room procedures to recover data from physically damaged drives.",
    result: "Successfully recovered 99.8% of all data, preventing potential financial losses exceeding $1.2 million.",
    icon: HardDrive,
    category: "Data Recovery",
    image: "/assets/images/case-studies/data-recovery-bank.jpg"
  },
  {
    id: "cybersecurity-ecommerce",
    title: "Cybersecurity Overhaul After Ransomware Attack",
    client: "E-commerce Business",
    challenge: "The client suffered a ransomware attack that encrypted critical business data and disrupted operations for several days.",
    solution: "Implemented comprehensive security solutions including advanced threat protection, network segmentation, and employee training.",
    result: "Enhanced security posture, prevented further attacks, and established robust backup systems to ensure business continuity.",
    icon: Shield,
    category: "Cybersecurity",
    image: "/assets/images/case-studies/cybersecurity-ecommerce.jpg"
  },
  {
    id: "it-infrastructure-manufacturing",
    title: "IT Infrastructure Modernization",
    client: "Manufacturing Company",
    challenge: "Outdated IT infrastructure causing frequent downtime and inefficiencies in business operations.",
    solution: "Designed and implemented a modern IT infrastructure with cloud integration, updated hardware, and improved networking.",
    result: "Reduced IT-related downtime by 85% and improved overall operational efficiency by 40%.",
    icon: Wifi,
    category: "IT Support",
    image: "/assets/images/case-studies/it-infrastructure.jpg"
  },
  {
    id: "data-recovery-healthcare",
    title: "Data Migration and Recovery for Healthcare Provider",
    client: "Medical Clinic in Kumasi",
    challenge: "The client needed to migrate patient records to a new system while recovering corrupted files from their old database.",
    solution: "Executed a carefully planned data migration strategy alongside specialized recovery procedures for the corrupted files.",
    result: "Successfully migrated all patient records with no data loss and recovered 95% of the previously inaccessible medical records.",
    icon: HardDrive,
    category: "Data Recovery",
    image: "/assets/images/case-studies/healthcare-data.jpg"
  },
  {
    id: "cybersecurity-government",
    title: "Network Security Implementation for Government Agency",
    client: "Government Department",
    challenge: "Vulnerable network infrastructure with multiple security gaps exposing sensitive government data.",
    solution: "Comprehensive security audit followed by implementation of multi-layered security architecture and monitoring systems.",
    result: "Secured critical infrastructure, achieved compliance with international security standards, and prevented several attempted breaches.",
    icon: Shield,
    category: "Cybersecurity",
    image: "/assets/images/case-studies/government-security.jpg"
  },
  {
    id: "cloud-migration-education",
    title: "Cloud Migration for Educational Institution",
    client: "University in Ghana",
    challenge: "Legacy on-premises systems creating maintenance burdens and limiting accessibility for students and faculty.",
    solution: "Planned and executed migration to cloud-based infrastructure with integrated security and backup solutions.",
    result: "Improved system availability to 99.9%, reduced IT costs by 30%, and enhanced accessibility for all users.",
    icon: Wifi,
    category: "IT Support",
    image: "/assets/images/case-studies/cloud-education.jpg"
  }
];

export const testimonials = [
  {
    quote: "Kworld Network saved our business after what seemed like a catastrophic data loss. Their expertise and quick response were invaluable.",
    author: "Emmanuel Agyei",
    position: "CFO, Ghana Commercial Bank",
    rating: 5
  },
  {
    quote: "The cybersecurity solutions implemented by Kworld have transformed our approach to data protection. We now have confidence in our security posture.",
    author: "Abena Mensah",
    position: "CIO, TechSolutions Ghana",
    rating: 5
  },
  {
    quote: "Working with Kworld for our IT infrastructure upgrade was a seamless experience. They understood our business needs and delivered beyond our expectations.",
    author: "Kwame Osei",
    position: "Director of Operations, Manufacturing Plus",
    rating: 4
  }
];