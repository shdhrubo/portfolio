import React from "react";
import js from "../../../images/skills/js.png";
import react from "../../../images/skills/react.png";
import backend from "../../../images/skills/backend.png";
import html from "../../../images/skills/html.png";
import css from "../../../images/skills/css.png";
import tools from "../../../images/skills/tools.png";

const Skills = () => {
  return (
    <div className="bg-[#10121B]" id="skills">
      <h4 className="text-2xl font-bold inline-block text-[#44A076] border-b-4 border-[#44A076] mt-8 mb-6">
        Skills
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 pb-8">
        <div class="card card-compact w-full bg-[#1E2A3A] shadow-xl text-white">
          <figure>
            <img src={js} alt="" className="w-12 mt-3 mr-auto ml-4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Javascript</h2>
            <ul className="text-left">
              <li>
                <span>-</span> ES-6
              </li>
              <li>
                <span>-</span> DOM
              </li>
              <li>
                <span>-</span> Typescript
              </li>
            </ul>
          </div>
        </div>
        <div class="card card-compact w-full bg-[#1E2A3A] shadow-xl text-white">
          <figure>
            <img src={react} alt="" className="w-12 mt-3 mr-auto ml-4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">ReactJs</h2>
            <ul className="text-left">
              <li>
                <span>-</span> Hooks
              </li>
              <li>
                <span>-</span> React Router
              </li>
              <li>
                <span>-</span> Context API
              </li>
            </ul>
          </div>
        </div>
        <div class="card card-compact w-full bg-[#1E2A3A] shadow-xl text-white">
          <figure>
            <img src={backend} alt="" className="w-12 mt-3 mr-auto ml-4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Backend</h2>
            <ul className="text-left">
              <li>
                <span>-</span> NodeJs
              </li>
              <li>
                <span>-</span> ExpressJs
              </li>
              <li>
                <span>-</span> MongoDB
              </li>
            </ul>
          </div>
        </div>
        <div class="card card-compact w-full bg-[#1E2A3A] shadow-xl text-white">
          <figure>
            <img src={html} alt="" className="w-12 mt-3 mr-auto ml-4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">HTML</h2>
            <ul className="text-left">
              <li>
                <span>-</span> HTML5
              </li>
              <li>
                <span>-</span> Symmantic Tag
              </li>
              <li>
                <span>-</span> JSX
              </li>
            </ul>
          </div>
        </div>
        <div class="card card-compact w-full bg-[#1E2A3A] shadow-xl text-white">
          <figure>
            <img src={css} alt="" className="w-12 mt-3 mr-auto ml-4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">CSS</h2>
            <ul className="text-left">
              <li>
                <span>-</span> CSS3
              </li>
              <li>
                <span>-</span> Bootstarap
              </li>
              <li>
                <span>-</span> Tailwind
              </li>
            </ul>
          </div>
        </div>
        <div class="card card-compact w-full bg-[#1E2A3A] shadow-xl text-white">
          <figure>
            <img src={tools} alt="" className="w-12 mt-3 mr-auto ml-4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Tools</h2>
            <ul className="text-left">
              <li>
                <span>-</span> GIT and Github
              </li>
              <li>
                <span>-</span> NPM
              </li>
              <li>
                <span>-</span> VS Code
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
