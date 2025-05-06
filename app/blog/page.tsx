"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#111215] text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section 
          className="section-padding text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container-custom">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Tech Repair Blog: News, Tips, and Tutorials
            </motion.h1>
            <motion.p 
              className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Welcome to the ByteFix blog, your go-to source for IT advice,
              troubleshooting tips, and tech solutions to keep your systems
              running smoothly.
            </motion.p>
          </div>
        </motion.section>
        {/* Blog Grid */}
        <motion.section 
          className="container-custom pb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <BlogSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
