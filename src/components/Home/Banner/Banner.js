import React from "react";
import picture from "../../../images/banner/picture.jpg";
const Banner = () => {
  return (
    <div class="hero min-h-screen bg-[#10121B]  text-white lg:px-10">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={picture}
          class="max-w-sm rounded-lg shadow-2xl w-full"
          alt=""
        />
        <div className="m-10 text-left">
          <h1 class="text-5xl font-bold">Shoriful Habib</h1>
          <p className="py-1">Front-end Web Developer</p>
          <p class="py-6">
            A self-motivated, ambitious and enthusiastic web designer and
            developer with highly interested in JavaScript, HTML5, CSS3, and
            front-end web development with modern web tech like React.js. To
            work in Software industry with modern web technologies of different
            local and multinational Software/IT agency of Bangladesh and grow
            rapidly with increasing skills and responsibilities.
          </p>
          <button class="btn btn-sm">Download Resume</button>
          <button class="btn btn-sm bg-[#44A076] ml-3">My Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
