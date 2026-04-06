import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  const coursework = [
    "Data Structures and Algorithms",
    "Object Oriented Programming",
    "Database Management Systems",
    "Software Requirements Specifications and Analysis",
    "Artificial Intelligence",
    "Software Testing and Quality Assurance",
    "Web Technology",
    "Design Pattern",
  ];

  return (
    <div className="bg-theme-primary py-24 w-full" id="education">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Title */}
        <div className="text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-theme-primary mb-4"
          >
            Academic <span className="text-[#44A076]">Background</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            className="h-1 w-16 bg-[#44A076] rounded-full origin-left"
          ></motion.div>
        </div>

        {/* Primary Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-theme-card-alpha backdrop-blur-xl border border-theme rounded-[2rem] p-8 md:p-12 overflow-hidden group hover:border-[#44A076]/30 transition-all duration-500"
        >
          {/* Subtle Gradient Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#44A076]/5 blur-[100px] pointer-events-none group-hover:bg-[#44A076]/10 transition-all duration-700"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Left Side: Institution Info */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="w-16 h-16 rounded-2xl bg-theme-primary border border-theme flex items-center justify-center text-[#44A076] group-hover:text-theme-primary transition-all duration-500 group-hover:bg-black group-hover:text-white dark:group-hover:text-white dark:group-hover:bg-[#44A076] ">
                <FontAwesomeIcon icon={faUniversity} className="text-2xl" />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-theme-primary mb-2 leading-tight">
                  BSc. in Software Engineering
                </h3>
                <p className="text-[#44A076] font-semibold text-lg">
                  Noakhali Science and Technology University
                </p>
                <div className="space-y-1 mt-4">
                  <p className="text-theme-secondary text-sm font-mono">
                    Academic Period:{" "}
                    <span className="text-theme-primary font-bold">
                      2020 – 2025
                    </span>
                  </p>
                  <p className="text-theme-secondary text-sm font-mono">
                    CGPA:{" "}
                    <span className="text-theme-primary font-bold">
                      3.57 / 4.00
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Coursework Grid */}
            <div className="lg:col-span-7">
              <h4 className="text-[#44A076] text-lg font-bold mb-8 flex items-center gap-3 text-left">
                Core Coursework
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left">
                {coursework.map((course, idx) => (
                  <div key={idx} className="flex gap-4 items-start group/item">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#44A076]/40 group-hover/item:bg-[#44A076] transition-colors flex-shrink-0"></div>
                    <p className="text-theme-secondary group-hover/item:text-theme-primary transition-colors text-[15px] md:text-[16px] leading-snug">
                      {course}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
