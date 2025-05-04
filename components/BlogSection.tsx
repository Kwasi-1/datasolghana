"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface BlogProps {
  image: string;
  title: string;
  description: string;
  date: string;
  delay: number;
}

const BlogCard = ({ image, title, description, date, delay }: BlogProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-3xl overflow-hidden bg-[#161616] borde border-gray-800 group hover:border-primary/30 transition-all"
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-5 left-5 rounded-full bg-white text-[#0A0A0A] py-1 px-3 flex items-center font-[400]">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
      </div>
      <div className="p-6 min-h-60 tracking-tight font-[400]">
        <h3 className="text-xl font-[600] mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href="#"
          className="inline-flex items-center group-hover:text-primary transition-colors duration-300  hover:underline"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:animate-pulse" />
        </a>
      </div>
    </motion.div>
  );
};

const BlogSection = ({ isHome = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const blogs = [
    {
      image: "/assets/blog_1.webp",
      title: "5 Steps to Recover Data After an Accidental Deletion",
      description:
        "Learn how to recover your deleted files and prevent data loss in the future.",
      date: "May 2, 2024",
    },
    {
      image: "/assets/blog_2.webp",
      title: "How to Safeguard Your Devices From Ransomware",
      description:
        "Essential tips to protect your computer systems from increasingly sophisticated ransomware attacks.",
      date: "April 28, 2024",
    },
    {
      image: "/assets/blog_3.webp",
      title: "Choosing the Right IT Support Solution for Your Business",
      description:
        "A comprehensive guide to help businesses select IT support services that match their needs.",
      date: "April 15, 2024",
    },
    {
      image: "/assets/blog_4.webp",
      title: "Quick Fixes for Common Remote Work Tech Issues",
      description:
        "Troubleshooting tips for the most frequent technical problems encountered during remote work.",
      date: "April 10, 2024",
    },
  ];

  const visibleBlogs = isHome ? blogs.slice(0, 3) : blogs;

  return (
    <section id="blog" className="py-20 bg-[#121212]">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              The Tech Repair Blog:
              <br />
              News, Tips, and Tutorials
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Stay updated with the latest tech news and expert advice from our
              specialists.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button className="bg-[#161616] hover:bg-[#1E1E1E] text-white">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
