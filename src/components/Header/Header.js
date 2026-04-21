import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

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
    "https://docs.google.com/uc?export=download&id=1TSWPVc0nmRfxbAgvHtf33ITyIKoF62Dg";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? isDark
            ? "py-4 bg-[#0B0D13]/90 backdrop-blur-xl border-b border-gray-800/40 shadow-2xl"
            : "py-4 bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-lg"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className={`text-2xl md:text-3xl font-black tracking-tighter group transition-all ${isDark ? "text-white" : "text-gray-900"}`}
        >
          SHORIFUL
          <span className="text-[#44A076] group-hover:pl-1 transition-all">
            .
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative text-xs font-black uppercase tracking-[0.2em] transition-all group ${
                    location.pathname === link.path
                      ? isDark
                        ? "text-white"
                        : "text-gray-900"
                      : isDark
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-500 hover:text-gray-900"
                  }`}
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

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`relative w-12 h-6 rounded-full transition-all duration-500 focus:outline-none ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`absolute top-1 w-4 h-4 rounded-full flex items-center justify-center shadow-md text-[8px] ${
                isDark
                  ? "bg-[#44A076] text-white left-7"
                  : "bg-white text-yellow-500 left-1"
              }`}
            >
              <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
            </motion.div>
          </button>

          {/* Action CTA */}
          <a
            href={resumeUrl}
            className={`flex items-center justify-center px-6 py-2.5 bg-transparent border-2 border-[#44A076] text-[#44A076] hover:bg-[#44A076] hover:text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95`}
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Right Side: Toggle + Hamburger */}
        <div className="lg:hidden flex items-center gap-4">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all ${
              isDark
                ? "bg-gray-800 text-[#44A076]"
                : "bg-gray-100 text-yellow-500"
            }`}
          >
            <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
          </button>

          {/* Hamburger */}
          <button
            className={`w-10 h-10 flex items-center justify-center text-xl rounded-xl transition-all ${
              isDark ? "text-white bg-gray-800" : "text-gray-900 bg-gray-100"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 w-full border-b p-8 lg:hidden shadow-2xl ${
              isDark
                ? "bg-[#0B0D13] border-gray-800"
                : "bg-white border-gray-200"
            }`}
          >
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-2xl font-black uppercase tracking-tighter transition-all hover:text-[#44A076] ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
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
