"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4
    }
  }
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find the blog post that matches the slug
  const post = blogPosts.find(post => post.link === `/blog/${slug}`);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#111215] text-white">
        <Navbar />
        <motion.div 
          className="container-custom py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Blog post not found</h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111215] text-white">
      <Navbar />
      <motion.main 
        className="container-custom py-16"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.article 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="mb-4 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {post.date}
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {post.title}
          </motion.h1>
          <motion.div 
            className="prose prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-lg text-gray-300">{post.summary}</p>
            {/* You can add more content sections here */}
          </motion.div>
        </motion.article>
      </motion.main>
    </div>
  );
} 