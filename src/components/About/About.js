import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faDownload,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../../images/banner/linkedindp.jpg";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#10121B] text-white min-h-screen pb-20 w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full px-4 pt-12">
        {/* Section Header */}
        <div className="text-left mb-16 pt-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            About <span className="text-[#44A076]">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            className="h-1 w-16 bg-[#44A076] rounded-full origin-left"
          ></motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Side: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#44A076] to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#1A2235] rounded-3xl overflow-hidden border border-gray-800">
                <img
                  src={img}
                  alt="Shoriful Habib"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-8 text-center sm:text-left">
                  <h3 className="text-3xl font-bold mb-1">Shoriful Habib</h3>
                  <p className="text-[#44A076] font-semibold mb-6">
                    Full-Stack Software Engineer
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-400 group/item">
                      <div className="w-10 h-10 rounded-full bg-[#10121B] flex items-center justify-center text-[#44A076] group-hover/item:bg-[#44A076] group-hover/item:text-white transition-colors duration-300">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <a
                        href="mailto:shorifulhabib.iit@gmail.com"
                        className="text-sm truncate"
                      >
                        shorifulhabib.iit@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 group/item">
                      <div className="w-10 h-10 rounded-full bg-[#10121B] flex items-center justify-center text-[#44A076] group-hover/item:bg-[#44A076] group-hover/item:text-white transition-colors duration-300">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <a href="tel:+8801612939235" className="text-sm">
                        +880 1612 939235
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 group/item">
                      <div className="w-10 h-10 rounded-full bg-[#10121B] flex items-center justify-center text-[#44A076] group-hover/item:bg-[#44A076] group-hover/item:text-white transition-colors duration-300">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <span className="text-sm">
                        Gulshan 1, Dhaka, Bangladesh
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8 justify-center sm:justify-start">
                    <a
                      href="https://www.linkedin.com/in/shorifulhabib/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#10121B] flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-md"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                      href="https://github.com/shdhrubo"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#10121B] flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 shadow-md"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Summary & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#44A076] rounded-full inline-block"></span>
                Professional Summary
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 italic">
                "Full-Stack Software Engineer with 2 years of experience in
                building scalable applications using Angular, .NET, Node.js and
                MongoDB. Skilled in AI and agent-assisted software development
                and familiar with CQRS, Microservices, and DDD."
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I specialize in developing high-performance systems and
                optimizing workflows. Currently, as a Software Engineer at{" "}
                <strong>BRAC IT Services Limited</strong>, I design and develop
                mission-critical modules for large-scale platforms supporting
                over 75,000 users nationwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#1E2A3A]/40 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-[#44A076]/30 transition-colors">
                <h4 className="font-bold text-white mb-2">Education</h4>
                <p className="text-sm text-[#44A076] font-semibold mb-1">
                  BSc. in Software Engineering
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  Noakhali Science and Technology University
                </p>
                <p className="text-sm text-gray-300">
                  CGPA: 3.57 / 4.00 (2020 – 2025)
                </p>
              </div>
              <div className="p-6 bg-[#1E2A3A]/40 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-[#44A076]/30 transition-colors">
                <h4 className="font-bold text-white mb-2">Current Role</h4>
                <p className="text-sm text-[#44A076] font-semibold mb-1">
                  Software Engineer
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  BRAC IT Services Limited
                </p>
                <p className="text-sm text-gray-300">April 2024 – Present</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://docs.google.com/uc?export=download&id=1jU_fXlAWohUmQ2srttwu37w9YHjOEA0j"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#44A076] to-[#2E7A56] hover:from-[#358B63] hover:to-[#216142] text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(68,160,118,0.25)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faDownload} />
                Download Resume
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A2235] border border-gray-700 hover:border-[#44A076] text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faProjectDiagram} />
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
