import React from "react";
import { Link } from "react-router-dom";
import { localProjects } from "../../../data/localProjects";
import { motion } from "framer-motion";

const NewAddition = () => {
  const project = localProjects[localProjects.length - 1];
  if (!project) return null;

  return (
    <section className="bg-theme-surface w-full py-32 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(68,160,118,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1200px] mx-auto w-full px-4">

        {/* Section Header */}
        <div className="text-left mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#44A076]/40 bg-[#44A076]/10 mb-5"
          >
            <span className="text-sm font-semibold text-[#44A076] tracking-wide uppercase">
              New Addition
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold text-theme-primary mb-4"
          >
            Latest <span className="text-[#44A076]">Project</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-1 w-16 bg-[#44A076] rounded-full origin-left"
          />
        </div>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="group relative flex flex-col lg:flex-row w-full bg-theme-card border border-theme rounded-3xl overflow-hidden hover:border-[#44A076]/50 transition-all duration-500 shadow-[0_8px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_60px_rgba(68,160,118,0.18)]"
        >
          {/* Left: Screenshot */}
          <div className="relative lg:w-1/2 w-full h-64 lg:h-auto min-h-[360px] overflow-hidden flex-shrink-0 bg-theme-secondary">
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#44A076] text-white text-xs font-bold shadow-lg">
              Open Source
            </div>
            <img
              src={project.img1}
              alt={project.title}
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center flex-1 p-8 lg:p-12 gap-5">
            <div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-theme-primary group-hover:text-[#44A076] transition-colors duration-300 leading-tight mb-2">
                {project.title}
              </h3>
              {project.tagline && (
                <p className="text-[#44A076] text-sm font-semibold italic border-l-2 border-[#44A076] pl-3 leading-snug">
                  {project.tagline}
                </p>
              )}
            </div>

            <p className="text-theme-secondary text-sm md:text-base leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[11px] font-semibold rounded-md border"
                  style={{ background: "rgba(68,160,118,0.08)", borderColor: "rgba(68,160,118,0.25)", color: "#44A076" }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <hr style={{ borderColor: "var(--border-color)", borderTopWidth: 1, margin: 0 }} />

            <div className="flex flex-wrap gap-3">
              <Link to={`/projects/${project._id}`}>
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[#44A076] text-white hover:bg-[#358B63] transition-all duration-300 shadow-[0_4px_20px_rgba(68,160,118,0.3)] hover:shadow-[0_6px_28px_rgba(68,160,118,0.5)]">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border-2 border-[#44A076]/50 text-[#44A076] hover:border-[#44A076] hover:bg-[#44A076]/10 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#44A076] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
        </motion.div>

      </div>
    </section>
  );
};

export default NewAddition;
