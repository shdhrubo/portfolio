import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = (
    <>
      <li>
        <Link to={"/projects"}>Projects</Link>
      </li>

      <li>
        <Link to={"/about"}>About Me</Link>
      </li>
      <li>
        <Link to={"/blogs"}>Blogs</Link>
      </li>
      <li>
        <button className="btn capitalize border-none bg-gradient-to-r from-[#44A076] to-[#2E7A56] hover:from-[#358B63] hover:to-[#216142] text-white shadow-lg ml-2">
          <a
            href="https://docs.google.com/uc?export=download&id=1jU_fXlAWohUmQ2srttwu37w9YHjOEA0j"
            className="hover:text-white"
          >
            Download Resume
          </a>
        </button>
      </li>
    </>
  );

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1E2A3A]/80 backdrop-blur-md shadow-xl" : "bg-[#1E2A3A]"} text-neutral-content w-full flex justify-center`}
    >
      <div className="navbar max-w-[1200px] w-full mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#1E2A3A]/95 backdrop-blur-md rounded-box w-52 font-bold"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost normal-case text-xl text-[#44A076]"
          >
            SHORIFUL
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex w-full">
          <ul className="menu menu-horizontal p-0 font-bold items-center">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
