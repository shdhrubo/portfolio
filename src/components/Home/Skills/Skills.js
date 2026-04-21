import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLayerGroup,
  faDatabase,
  faCloud,
  faWrench,
  faCheckCircle,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    icon: faCode,
    skills: ["JavaScript", "TypeScript", "C", "C++", "C#", "Java", "Python"],
  },
  {
    category: "Frameworks",
    icon: faLayerGroup,
    skills: [
      "Angular",
      "React",
      "Express",
      ".NET",
      "Next.js",
      "React Hook Form",
      "Zod",
      "Redux",
      "RxJs",
    ],
  },
  {
    category: "Databases",
    icon: faDatabase,
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "DevOps & Cloud",
    icon: faCloud,
    skills: ["GitHub", "Git", "Docker", "RabbitMQ"],
  },
  {
    category: "Tools & IDEs",
    icon: faWrench,
    skills: ["VS Code", "Visual Studio", "Cursor", "Antigravity"],
  },
  {
    category: "Soft Skills",
    icon: faHandshake,
    skills: [
      "Communication",
      "Problem Solving",
      "Time Management",
      "Critical Thinking",
      "Leadership",
      "Collaboration",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  }),
};

const skillVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <div className="bg-theme-primary w-full py-20" id="skills">
      <div className="max-w-[1200px] mx-auto w-full px-4 text-left">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-theme-primary mb-4"
          >
            Professional <span className="text-[#44A076]">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            className="h-1 w-16 bg-[#44A076] rounded-full origin-left"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              className="relative bg-theme-sec-alpha backdrop-blur-lg p-8 rounded-xl border border-theme hover:border-[#44A076]/80 transition-all duration-500 overflow-hidden shadow-2xl group"
            >
              {/* Elegant continuous top highlight line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#44A076] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-theme-primary flex items-center justify-center text-[#44A076] text-xl shadow-[0_0_15px_rgba(68,160,118,0.1)] group-hover:shadow-[0_0_20px_rgba(68,160,118,0.4)] transition-shadow duration-500">
                  <FontAwesomeIcon icon={group.icon} />
                </div>
                <h3 className="text-xl font-bold text-theme-primary tracking-widest uppercase text-sm">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.div
                    variants={skillVariants}
                    key={i}
                    className="px-4 py-2 bg-theme-surface text-theme-secondary text-sm font-semibold rounded-md border border-theme hover:border-[#44A076] hover:text-[#44A076] hover:shadow-[0_0_10px_rgba(68,160,118,0.2)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
