import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faArrowLeft, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ProjectsDetails = () => {
  const { id } = useParams();
  const [projects] = useProjects();
  const projectDetails = projects.find((project) => project._id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!projectDetails) return <div className="h-screen bg-[#10121B] flex items-center justify-center text-white">Loading...</div>;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projectDetails.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectDetails.images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-[#10121B] text-white min-h-screen pb-20 w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full px-4 pt-12">
        {/* Top Header Row */}
        <div className="flex flex-col items-start gap-4 mb-10 border-b border-gray-800/60 pb-6">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/projects" className="inline-flex items-center gap-2 text-[#44A076] hover:text-white transition-colors duration-300 font-semibold text-sm uppercase tracking-wider">
              <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
            </Link>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            {projectDetails.title}
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: React State Automated Slider */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/5 w-full flex flex-col"
          >
            <div className="relative w-full rounded-2xl overflow-hidden border border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#10121B] aspect-[4/3] sm:aspect-video">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={projectDetails.images[currentIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                  alt={`Screenshot ${currentIndex + 1}`}
                />
              </AnimatePresence>

              {/* Navigation Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#44A076] transition-colors z-10"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#44A076] transition-colors z-10"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mt-6">
              {projectDetails.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative overflow-hidden rounded-md border-2 transition-all duration-300 w-12 h-10 sm:w-16 sm:h-12 ${
                    currentIndex === idx ? "border-[#44A076] opacity-100 scale-110 shadow-lg" : "border-transparent opacity-40 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Project Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5 w-full flex flex-col justify-center"
          >
            <div className="bg-[#1E2A3A]/40 backdrop-blur-md border border-gray-800 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                {projectDetails.description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#44A076] mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projectDetails.technologies?.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-[#10121B] text-gray-300 text-sm font-semibold rounded-md border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#44A076] mb-4">Project Links</h4>
              <div className="flex w-full gap-4">
                {projectDetails.frontEnd && projectDetails.frontEnd !== "#" && (
                  <a href={projectDetails.frontEnd} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 border border-[#44A076] text-[#44A076] hover:bg-[#44A076] hover:text-white rounded-lg transition-all duration-300 font-semibold text-sm shadow-sm">
                    <FontAwesomeIcon icon={faGithub} />
                    GitHub Repo
                  </a>
                )}
                {projectDetails.live && projectDetails.live !== "#" && (
                  <a href={projectDetails.live} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 bg-[#44A076] border border-[#44A076] text-white hover:bg-[#358B63] hover:border-[#358B63] rounded-lg transition-all duration-300 font-semibold text-sm shadow-[0_5px_15px_rgba(68,160,118,0.25)]">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    Live Demo
                  </a>
                )}
              </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ProjectsDetails;
