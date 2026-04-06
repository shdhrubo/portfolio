import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import {
  faLinkedin,
  faGithub,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "About Me", path: "/about" },
  ];

  const socialLinks = [
    {
      icon: faGithub,
      url: "https://github.com/shdhrubo",
      hoverColor: "#44A076",
    },
    {
      icon: faLinkedin,
      url: "https://linkedin.com/in/shorifulhabib",
      hoverColor: "#0077B5",
    },
    {
      icon: faEnvelope,
      url: "mailto:shorifulhabib.iit@gmail.com",
      hoverColor: "#EA4335",
    },
  ];

  return (
    <footer className="bg-theme-nav relative overflow-hidden pt-24 pb-12">
      {/* Decorative Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#44A076]/40 to-transparent"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20 text-left">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Link
                to="/"
                className="text-3xl font-black text-theme-primary tracking-tighter"
              >
                SHORIFUL<span className="text-[#44A076]">.</span>
              </Link>
              <p className="text-theme-secondary text-lg leading-relaxed font-medium">
                Full-Stack Software Engineer specializing in building scalable,
                high-performance digital experiences. Crafting the future of web
                technology with precision and passion.
              </p>
            </div>

            {/* Contact Info Matrix */}
            <div className="space-y-4">
              <a
                href="mailto:shorifulhabib.iit@gmail.com"
                className="flex items-center gap-4 text-theme-secondary hover:text-theme-hover transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-theme-surface border border-theme flex items-center justify-center group-hover:border-[#44A076]/40 transition-all">
                  <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
                </div>
                <span className="font-mono text-sm">
                  shorifulhabib.iit@gmail.com
                </span>
              </a>
              <a
                href="tel:+8801612939235"
                className="flex items-center gap-4 text-theme-secondary hover:text-theme-hover transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-theme-surface border border-theme flex items-center justify-center group-hover:border-[#44A076]/40 transition-all">
                  <FontAwesomeIcon icon={faPhone} className="text-sm" />
                </div>
                <span className="font-mono text-sm">+880 1612-939235</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Matrix */}
          <div className="lg:col-span-3 space-y-8">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-theme-secondary hover:text-theme-hover flex items-center gap-2 group transition-all"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-[10px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    <span className="font-bold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Connection */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -5,
                    color: social.hoverColor,
                    borderColor: social.hoverColor,
                  }}
                  className="w-14 h-14 rounded-2xl bg-theme-surface border border-theme flex items-center justify-center text-theme-muted transition-all duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-xl" />
                </motion.a>
              ))}
            </div>
            <p className="text-theme-muted text-sm font-medium leading-relaxed italic border-l-2 border-[#44A076]/30 pl-4">
              "Code is the medium through which we architect the future."
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-theme flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-theme-muted text-xs font-bold uppercase tracking-widest">
            © {year} <span className="text-[#44A076]">Shoriful Habib</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
