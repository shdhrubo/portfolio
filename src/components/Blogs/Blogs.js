import React from "react";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <div className="bg-theme-primary min-h-screen py-24 w-full">
      <div className="max-w-[1200px] mx-auto w-full px-6">
        <div className="text-left mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-theme-primary mb-4"
          >
            My <span className="text-[#44A076]">Blogs</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            className="h-1 w-16 bg-[#44A076] rounded-full origin-left"
          ></motion.div>
        </div>
        <div className="p-10 bg-theme-sec-alpha backdrop-blur-sm border border-theme rounded-3xl">
          <h4 className="text-xl text-gray-400">Blogs are coming soon...</h4>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
