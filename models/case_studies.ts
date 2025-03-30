
import { LucideIcon } from "lucide-react";

export interface CaseStudyProps {
  id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  icon: LucideIcon;
  category: string;
  image?: string;
}