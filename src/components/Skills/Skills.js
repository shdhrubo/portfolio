import React from "react";
import { motion } from "framer-motion";
import html from "../../images/skills/html.png";
import css from "../../images/skills/css.png";
import js from "../../images/skills/js.png";
import typescript from "../../images/skills/typescript.png";
import react from "../../images/skills/react.png";
import angular from "../../images/skills/angular.png";
import next from "../../images/skills/next.png";
import node from "../../images/skills/node.png";
import express from "../../images/skills/express.png";
import dotnet from "../../images/skills/dotnet.svg";
import csharp from "../../images/skills/csharp.png";
import mongo from "../../images/skills/mongo.png";
import postgresql from "../../images/skills/postgresql.png";
import tailwind from "../../images/skills/tailwind.png";
import bootstrap from "../../images/skills/bootstrap.jpg";

const Skills = () => {
  const skills = [
    { name: "React", img: react },
    { name: "Angular", img: angular },
    { name: "Next.js", img: next },
    { name: "TypeScript", img: typescript },
    { name: "JavaScript", img: js },
    { name: "Node.js", img: node },
    { name: "Express", img: express },
    { name: ".NET Core", img: dotnet },
    { name: "C#", img: csharp },
    { name: "MongoDB", img: mongo },
    { name: "PostgreSQL", img: postgresql },
    { name: "Tailwind", img: tailwind },
    { name: "Bootstrap", img: bootstrap },
    { name: "HTML5", img: html },
    { name: "CSS3", img: css },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div
      className="min-h-screen bg-[#10121B] py-20 px-6 lg:px-20 relative overflow-hidden "
      id="skills"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#44A076]/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16 pt-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Technical <span className="text-[#44A076]">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            className="h-1 w-16 bg-[#44A076] rounded-full origin-left"
          ></motion.div>
        </div>

        {/* Ultimate Minimalist Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Simple Premium Card */}
              <div className="h-44 md:h-52 bg-[#1A2235]/40 backdrop-blur-xl border border-gray-800/60 rounded-[8px] p-6 flex flex-col items-center justify-center gap-6 transition-all duration-300 group-hover:border-[#44A076]/30 group-hover:border-b-4 group-hover:border-b-[#44A076] group-hover:bg-[#1A2235]">
                {/* Icon Frame */}
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-2 relative">
                  <div className="absolute inset-0 bg-[#44A076]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-full h-full object-contain relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>

                {/* Technology Name */}
                <h3 className="text-sm md:text-base font-bold text-gray-400 group-hover:text-white uppercase tracking-widest transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
