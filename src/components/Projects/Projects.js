import React, { useState } from "react";
import { Link } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Projects = () => {
  const [projects] = useProjects();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-theme-primary pb-28 w-full min-h-screen pt-20">
      <div className="max-w-[1200px] mx-auto w-full px-4">

        {/* ── Page Header ── */}
        <div className="text-left mb-16 pt-12 relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 -left-8 w-64 h-64 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(68,160,118,0.3) 0%, transparent 70%)",
            }}
          />


          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold text-theme-primary mb-4"
          >
            All <span className="text-[#44A076]">Projects</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-16 bg-[#44A076] rounded-full origin-left"
          />


        </div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              onMouseEnter={() => setHovered(project._id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative flex flex-col bg-theme-card border border-theme rounded-2xl overflow-hidden
                         hover:border-[#44A076]/60 transition-all duration-300 cursor-pointer"
              style={{
                boxShadow: hovered === project._id
                  ? "0 8px 40px rgba(68,160,118,0.18)"
                  : "0 2px 16px rgba(0,0,0,0.18)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* ── Serial Badge ── */}
              <div className="absolute top-4 left-4 z-20">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full border"
                  style={{
                    background: "rgba(68,160,118,0.15)",
                    borderColor: "rgba(68,160,118,0.4)",
                    color: "#44A076",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {project.serial}
                </span>
              </div>

              {/* ── Thumbnail ── */}
              <div className="relative w-full h-52 overflow-hidden bg-theme-secondary flex-shrink-0">
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, transparent 50%, rgba(10,15,28,0.85) 100%)",
                    opacity: hovered === project._id ? 0.5 : 1,
                    transition: "opacity 0.4s ease",
                  }}
                />
                <img
                  src={project.img1}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* ── Content ── */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                {/* Title */}
                <h3 className="text-lg font-bold text-theme-primary group-hover:text-[#44A076] transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                {/* Description — clamped to 3 lines */}
                <p className="text-theme-secondary text-sm leading-relaxed flex-1">
                  {project.description?.length > 200
                    ? project.description.slice(0, 200) + "..."
                    : project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.technologies?.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[10px] font-semibold rounded-md border"
                      style={{
                        background: "rgba(68,160,118,0.08)",
                        borderColor: "rgba(68,160,118,0.25)",
                        color: "#44A076",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies?.length > 4 && (
                    <span
                      className="px-2.5 py-1 text-[10px] font-semibold rounded-md"
                      style={{
                        background: "rgba(156,163,175,0.1)",
                        color: "var(--text-muted)",
                      }}
                    >
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Divider */}
                <div
                  className="w-full h-px mt-1"
                  style={{ background: "var(--border-color)" }}
                />

                {/* Action Row */}
                <div className="flex items-center gap-3 pt-1 flex-wrap">
                  <Link to={`/projects/${project._id}`}>
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold
                                       bg-[#44A076] text-white hover:bg-[#358B63] transition-all duration-300
                                       shadow-[0_4px_14px_rgba(68,160,118,0.3)] hover:shadow-[0_4px_20px_rgba(68,160,118,0.5)]">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border-2
                               border-[#44A076]/50 text-[#44A076] hover:border-[#44A076] hover:bg-[#44A076]/10
                               transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>

              {/* ── Bottom accent bar (slides in on hover) ── */}
              <div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#44A076] origin-left
                           scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
