import React from "react";
import { Link } from "react-router-dom";
import useProjects from "../../hooks/useProjects";
import { motion } from "framer-motion";

const HomeProjects = () => {
  const [projects] = useProjects();
  const homeProjects = projects.slice(0, 2);

  return (
    <div className="bg-theme-primary w-full py-20" id="projects">
      <div className="max-w-[1200px] mx-auto w-full px-4">
        
        <div className="text-left mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-theme-primary mb-4"
          >
            Featured <span className="text-[#44A076]">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-16 bg-[#44A076] rounded-full origin-left"
          ></motion.div>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16 items-center">
          {homeProjects.map((project, index) => (
            <motion.div 
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col lg:flex-row items-stretch bg-theme-sec-alpha backdrop-blur-sm border border-theme rounded-3xl overflow-hidden hover:border-[#44A076]/50 transition-all duration-500 shadow-xl group w-full ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 w-full h-64 lg:h-auto min-h-[300px] overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img 
                  src={project.img1} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 w-full p-8 lg:p-12 text-left flex flex-col justify-center bg-theme-card-60 z-20">
                <h3 className="text-2xl md:text-3xl font-bold text-theme-primary mb-4 group-hover:text-[#44A076] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-theme-secondary text-sm md:text-base leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-theme-primary text-[#44A076] text-xs font-semibold rounded-md border border-[#44A076]/30">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 items-center">
                  <Link to={`/projects/${project._id}`}>
                    <button className="px-8 py-3 bg-gradient-to-r from-[#44A076] to-[#2E7A56] hover:from-[#358B63] hover:to-[#216142] text-white font-semibold rounded-lg shadow-[0_10px_20px_rgba(68,160,118,0.2)] transition-all duration-300">
                      View Details
                    </button>
                  </Link>
                  <a href={project.live} target="_blank" rel="noreferrer" className="px-8 py-3 bg-transparent border-2 border-theme hover:border-[#44A076] text-theme-secondary hover:text-[#44A076] font-semibold rounded-lg transition-all duration-300">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="mt-20"
        >
          <Link to={"/projects"}>
            <button className="px-10 py-4 bg-transparent border-2 border-[#44A076] text-[#44A076] hover:bg-[#44A076] hover:text-white font-bold text-lg rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(68,160,118,0.2)] hover:shadow-[0_0_30px_rgba(68,160,118,0.5)]">
              Explore More Projects
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default HomeProjects;
