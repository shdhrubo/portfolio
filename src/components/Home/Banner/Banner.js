import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import img from "../../../images/banner/profile.jpg";

const Banner = () => {
  return (
    <div className="hero py-20 lg:py-48 bg-[#10121B] text-white lg:px-10 overflow-hidden relative">
      {/* Background glowing effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#44A076] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="hero-content flex-col lg:flex-row-reverse relative z-10 w-full max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group lg:w-1/2 flex justify-center py-10 lg:py-0"
        >
          {/* An extremely elegant, attractive design using a single element and pure green styling */}
          <img
            src={img}
            className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-[2rem] shadow-[0_0_60px_rgba(68,160,118,0.4)] border border-[#44A076]/40 hover:border-[#44A076] hover:shadow-[0_0_80px_rgba(68,160,118,0.6)] transition-all duration-500 hover:-translate-y-2"
            alt="Shoriful Habib"
          />
        </motion.div>

        <div className="m-4 lg:m-10 text-left lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Shoriful Habib
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-2 text-gray-300">
              Full-Stack Software Engineer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="py-4 text-base text-gray-400 leading-relaxed max-w-xl"
          >
            With 2 years of experience building scalable applications, I
            specialize in{" "}
            <span className="text-[#44A076] font-medium">
              Angular, .NET, Node.js, PostgreSQL and MongoDB
            </span>
            . Dedicated to crafting high-performance systems and applying
            AI-assisted development across modern architectures like CQRS and
            Microservices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="https://docs.google.com/uc?export=download&id=1jU_fXlAWohUmQ2srttwu37w9YHjOEA0j"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn border-none bg-gradient-to-r from-[#44A076] to-[#2E7A56] hover:from-[#358B63] hover:to-[#216142] text-white px-8 font-semibold shadow-lg shadow-[#44A076]/20"
              >
                Download Resume
              </motion.button>
            </a>
            <Link to={"/projects"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline border-[#44A076] text-[#44A076] hover:bg-[#44A076] hover:text-white px-8 font-semibold"
              >
                My Projects
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 flex items-center gap-8"
          >
            <a
              href="https://www.linkedin.com/in/shorifulhabib/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-xl group-hover:text-[#0077B5] transition-colors"
              />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/shdhrubo"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-xl group-hover:text-white transition-colors"
              />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://leetcode.com/u/user9074Cq/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
            >
              <FontAwesomeIcon
                icon={faCode}
                className="text-xl group-hover:text-[#FFA116] transition-colors"
              />
              <span className="text-sm font-medium">LeetCode</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
