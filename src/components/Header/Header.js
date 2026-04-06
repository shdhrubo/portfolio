import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
  ];

  const resumeUrl =
    "https://docs.google.com/uc?export=download&id=1jU_fXlAWohUmQ2srttwu37w9YHjOEA0j";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[#0B0D13]/80 backdrop-blur-xl border-b border-gray-800/40 shadow-2xl"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-black text-white tracking-tighter group transition-all"
        >
          SHORIFUL
          <span className="text-[#44A076] group-hover:pl-1 transition-all">
            .
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative text-xs font-black uppercase tracking-[0.2em] transition-all hover:text-white ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-gray-400"
                  } group`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-[#44A076] transition-all duration-300 ${
                      location.pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Action CTA */}
          <a
            href={resumeUrl}
            className="flex items-center justify-center px-6 py-2.5 bg-transparent border-2 border-[#44A076] text-[#44A076] hover:bg-[#44A076] hover:text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-12 h-12 flex items-center justify-center text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0B0D13] border-b border-gray-800 p-8 lg:hidden shadow-2xl"
          >
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-black text-white uppercase tracking-tighter hover:text-[#44A076] transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={resumeUrl}
                  className="inline-flex items-center justify-center text-xl font-black text-[#44A076] uppercase tracking-tighter"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
