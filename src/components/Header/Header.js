import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link to={"/projects"}>Projects</Link>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <Link to={"/about"}>About Me</Link>
      </li>
      <li>
        <Link to={"/blogs"}>Blogs</Link>
      </li>
      <li>
        <button className="btn capitalize  bg-[#44A076]">
          {" "}
          <a href="https://docs.google.com/uc?export=download&id=1d3bWAX8A7TUewZ07CLS3zmjSdU07yvtJ">
            Download Resume
          </a>
        </button>
      </li>
    </>
  );
  return (
    <div class="navbar bg-[#1E2A3A] text-neutral-content sticky top-0 z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#1E2A3A] rounded-box w-52 font-bold"
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
      <div class=" navbar-center  hidden lg:flex ">
        <ul class="menu menu-horizontal p-0 font-bold">{menuItems}</ul>
      </div>
      <div class="navbar-end"></div>
    </div>
  );
};

export default Header;
