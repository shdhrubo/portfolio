import React from "react";
import { Link } from "react-router-dom";
import img from "../../../images/banner/NO - 211.jpg";

import Social from "../../Social/Social";
const Banner = () => {
  return (
    <div class="hero min-h-screen bg-[#10121B]  text-white lg:px-10">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={img} class="max-w-sm rounded-lg  w-72 h-72" alt="" />
        <div className="m-10 text-left">
          <h1 class="text-5xl font-bold ">Shoriful Habib</h1>
          <p className="py-1">Front-end Web Developer</p>
          <p className="inline-block">
            <Social></Social>
          </p>
          <br />
          <p class="py-6 text-sm text-gray-400">
            A self-motivated, ambitious and enthusiastic web designer and
            developer with highly interested in JavaScript, HTML5, CSS3, and
            front-end web development with modern web tech like React.js. To
            work in Software industry with modern web technologies of different
            local and multinational Software/IT agency of Bangladesh and grow
            rapidly with increasing skills and responsibilities.
          </p>

          <button class="btn btn-sm mt-3">
            <a href="https://docs.google.com/uc?export=download&id=1d3bWAX8A7TUewZ07CLS3zmjSdU07yvtJ">
              Download Resume
            </a>
          </button>
          <Link to={"/projects"}>
            <button class="btn btn-sm bg-[#44A076] ml-3 mt-1">
              My Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
