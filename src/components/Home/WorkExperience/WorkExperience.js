import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleNodes,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { workExperience } from "../../../data/workExperience";

const WorkExperience = () => {
  // Determine which icons to use for sub-projects based on index or name if needed
  const getProjectIcon = (index) => {
    return index === 0 ? faCircleNodes : faCogs;
  };

  return (
    <div className="bg-[#10121B] py-24 w-full" id="experience">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Left-Aligned Section Title */}
        <div className="text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Work <span className="text-[#44A076]">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            className="h-1 w-16 bg-[#44A076] rounded-full origin-left"
          ></motion.div>
        </div>

        {/* Vertical Journey Stream */}
        {workExperience.map((exp, index) => (
          <div key={index} className="relative pb-20 last:pb-0">
            {/* 1. High-Visibility Vertical Timeline Line (Green Gradient) */}
            <div className="absolute left-[23px] md:left-[31px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-[#44A076]/40 via-gray-800/40 to-transparent"></div>

            {/* 2. Perfectly Balanced Company Header */}
            <div className="relative z-10 flex items-center gap-4 md:gap-6 mb-10 -ml-1">
              {/* Briefcase Icon (Centered on Line) */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1A2235] border-2 border-gray-800 flex items-center justify-center text-[#44A076] shadow-xl flex-shrink-0">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-xl md:text-2xl"
                />
              </div>

              {/* Company Name (Case as in data) */}
              <h3 className="text-2xl md:text-5xl font-black text-white tracking-tight leading-none truncate">
                {exp.company}
              </h3>
            </div>

            {/* 3. Role & Project Content (Adaptive Indentation) */}
            <div className="ml-12 md:ml-24 space-y-12">
              {/* Role Details and High-Visibility Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] md:text-base pr-4"
              >
                <span className="text-[#44A076] font-bold tracking-wider">
                  {exp.role}
                </span>
                <span className="text-gray-700 hidden md:inline">•</span>
                <span className="text-gray-400 font-mono italic">
                  {exp.duration}
                </span>
                <span className="text-gray-700 hidden md:inline">|</span>
                <span className="text-gray-400">{exp.location}</span>
              </motion.div>

              {/* Sharp Gradient Divider */}
              <div className="h-[1.5px] w-full max-w-[800px] bg-gradient-to-r from-[#44A076]/40 via-gray-800/60 to-transparent -mt-6"></div>

              {/* Project Cards (Individually Framed) */}
              <div className="space-y-10">
                {exp.projects.map((project, pIdx) => (
                  <motion.div
                    key={pIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group bg-[#161D2C]/80 backdrop-blur-xl border border-gray-800/60 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 hover:border-[#44A076]/30 hover:scale-[1.005] transition-all duration-500 shadow-2xl"
                  >
                    {/* Subtle Border Glow (Hover) */}
                    <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#44A076]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                    {/* Precision Project Header */}
                    <div className="flex items-center gap-3 md:gap-5 mb-8 relative z-10">
                      <div className="w-9 h-9 md:w-12 p-3 md:h-12 rounded-xl bg-[#10121B] border border-gray-800 flex items-center justify-center text-[#44A076] shadow-inner group-hover:scale-110 group-hover:bg-[#44A076] group-hover:text-white transition-all duration-500">
                        <FontAwesomeIcon
                          icon={getProjectIcon(pIdx)}
                          className="text-sm md:text-lg"
                        />
                      </div>
                      <h4 className="text-[17px] md:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-[#44A076] transition-colors">
                        {project.name}
                      </h4>
                    </div>

                    {/* Precision Bullet Points */}
                    <ul className="space-y-5 mb-10 relative z-10">
                      {project.points.map((point, k) => (
                        <li
                          key={k}
                          className="flex gap-4 items-start text-gray-400 group-hover:text-gray-300 transition-colors"
                        >
                          <div className="mt-[8px] md:mt-[10px] w-1.5 h-1.5 rounded-full bg-[#44A076]/40 group-hover:bg-[#44A076] transition-colors flex-shrink-0"></div>
                          <span className="text-[13.5px] md:text-[17px] leading-relaxed text-left flex-grow">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* High-Contrast Tech Stream */}
                    <div className="flex flex-wrap gap-2 md:gap-3 pt-4 relative z-10">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3.5 py-1.5 bg-[#10121B] text-[#44A076] text-[9.5px] md:text-[10.5px] font-bold uppercase tracking-widest rounded-lg border border-gray-800/80 group-hover:border-[#44A076]/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
