import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/banner/img.png";
const About = () => {
  return (
    <div className="bg-[#10121B] pb-10">
      {/* <h4 className="text-xl  text-[#44A076] pt-5">About Me</h4> */}
      <h3 className="text-2xl font-bold inline-block text-[#44A076] border-b-4 border-[#44A076] mt-8 mb-6 ">
        About Me
      </h3>
      <div className=" bg-[#1E2A3A] lg:mx-10 md:mx-1">
        <div className="grid  lg:grid-cols-2 md:grid-cols-2 sm-grid-cols-1 gap-5 mt-5 pt-5 px-8">
          <div className="text-white text-left">
            <h1 class="text-5xl font-bold ">Shoriful Habib</h1>
            <p className="py-1">Front-end Web Developer</p>
          </div>
          <div className="text-left lg:mx-auto">
            <a
              href="mailto:shorifulhabib.iit@gmail.com"
              className="text-gray-400 text-sm "
            >
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
              shorifulhabib.iit@gmail.com
            </a>
            <p>
              <a href="tel:+8801612939235" className="text-gray-400 text-sm ">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{" "}
                +8801612939235{" "}
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/shorifulhabib/"
                className="text-gray-400 text-sm "
              >
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>{" "}
                linkedin.com/in/shorifulhabib/
              </a>
            </p>
          </div>
        </div>

        <div class="hero min-h-screen ">
          <div class="hero-content flex-col lg:flex-row-reverse items-center lg:px-20">
            <div className="w-auto">
              <p class=" text-gray-400 text-left w-full">
                A self-motivated, ambitious and enthusiastic web designer and
                developer with highly interested in JavaScript, HTML5, CSS3, and
                front-end web development with modern web tech like React.js. To
                work in Software industry with modern web technologies of
                different local and multinational Software/IT agency of
                Bangladesh and grow rapidly with increasing skills and
                responsibilities.
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
            <img src={img} class="max-w-sm rounded-lg " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
