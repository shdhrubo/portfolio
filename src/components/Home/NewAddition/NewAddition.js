import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import nu1 from "../../../images/projects/nova-ui/nova-1.png";

const technologies = [
  "Angular",
  "TypeScript",
  "CSS Custom Properties",
  "CSS Cascade Layers",
  "Nx",
  "GitHub Actions",
  "Vercel",
  "npm",
];

const highlights = [
  { icon: "🎨", text: "Token-first design system with CSS custom properties" },
  { icon: "🧩", text: "16 Angular standalone UI components" },
  { icon: "♿", text: "WCAG 2.1 AA accessible out of the box" },
  { icon: "🚀", text: "Automated CI/CD & npm publishing pipeline" },
  { icon: "🤖", text: "Built end-to-end with AI-assisted engineering" },
];

const NewAddition = () => {
  return (
    <section className="bg-theme-surface w-full py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(68,160,118,0.08) 0%, transparent 70%)",
        }}
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
              ✨ New Addition
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

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-stretch bg-theme-sec-alpha backdrop-blur-sm border border-theme rounded-3xl overflow-hidden hover:border-[#44A076]/50 transition-all duration-500 shadow-2xl group"
        >
          {/* Left — Screenshot */}
          <div className="lg:w-1/2 w-full h-64 lg:h-auto min-h-[320px] overflow-hidden relative">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 group-hover:to-transparent transition-all duration-500 z-10 pointer-events-none" />
            {/* "Open Source" ribbon */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#44A076] text-white text-xs font-bold shadow-lg">
              <span>🌐</span> Open Source
            </div>
            <img
              src={nu1}
              alt="Nova UI component library preview"
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right — Content */}
          <div className="lg:w-1/2 w-full p-8 lg:p-12 text-left flex flex-col justify-center bg-theme-card-60 z-20">
            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-theme-primary mb-2 group-hover:text-[#44A076] transition-colors duration-300">
              Nova UI
            </h3>

            {/* Tagline */}
            <p className="text-[#44A076] text-sm font-semibold italic mb-5 border-l-2 border-[#44A076] pl-3 leading-snug">
              Open-source, production-ready UI component library and design
              system built end-to-end with AI-assisted engineering.
            </p>

            {/* Description */}
            <p className="text-theme-secondary text-sm md:text-base leading-relaxed mb-6">
              Designed, implemented, tested, published to npm, and deployed from
              scratch — using AI as a pair-programming assistant throughout the
              entire software development lifecycle.
            </p>

            {/* Highlights */}
            <ul className="flex flex-col gap-2 mb-6">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-theme-secondary"
                >
                  <span className="shrink-0">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-theme-primary text-[#44A076] text-xs font-semibold rounded-md border border-[#44A076]/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/projects/nova-ui">
                <button className="px-8 py-3 bg-gradient-to-r from-[#44A076] to-[#2E7A56] hover:from-[#358B63] hover:to-[#216142] text-white font-semibold rounded-lg shadow-[0_10px_25px_rgba(68,160,118,0.3)] hover:shadow-[0_10px_35px_rgba(68,160,118,0.5)] transition-all duration-300">
                  See Details →
                </button>
              </Link>
              <a
                href="https://nova-ui-docs-tau.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-transparent border-2 border-theme hover:border-[#44A076] text-theme-secondary hover:text-[#44A076] font-semibold rounded-lg transition-all duration-300"
              >
                Live Docs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewAddition;
