"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CaseStudyProps } from "@/models/case_studies";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props extends CaseStudyProps {
  className?: string;
}

const CaseStudyCard: React.FC<Props> = ({
  id,
  title,
  client,
  challenge,
  solution,
  result,
  icon: Icon,
  category,
  image,
  className,
}) => {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${className} bg-white`}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-kworld-primary/10 rounded-full p-3 mr-4">
            <Icon size={24} className="text-kworld-primary" />
          </div>
          <span className="text-sm font-medium text-kworld-accent">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl text-kworld-primary">{title}</CardTitle>
        <CardDescription className="text-gray-500">
          Client: {client}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0 space-y-4">
        <div>
          <h4 className="font-bold text-kworld-secondary">Challenge:</h4>
          <p className="text-gray-600 text-sm">{challenge}</p>
        </div>
        <div>
          <h4 className="font-bold text-kworld-secondary">Solution:</h4>
          <p className="text-gray-600 text-sm">{solution}</p>
        </div>
        <div>
          <h4 className="font-bold text-kworld-secondary">Result:</h4>
          <p className="text-gray-600 text-sm">{result}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-end">
        <Link href={`/case-studies/${id}`}>
          <Button
            variant="ghost"
            className="text-kworld-primary hover:text-kworld-accent hover:bg-transparent p-0"
          >
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
