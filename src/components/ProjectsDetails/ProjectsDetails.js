import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProjects from "../hooks/useProjects";

const ProjectsDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useProjects([]);
  const projectDetails = projects.find((project) => project._id === id);
  console.log(projectDetails);
  return (
    <div className="bg-[#10121B] text-white pb-10">
      <h4 className="text-2xl pt-8 text-[#44A076] pb-4">
        {" "}
        {projectDetails?.title}
      </h4>

      <div className="">
        <div class="carousel w-3/4 lg:w-1/2 mx-auto ">
          <div id="item1" class="carousel-item w-full">
            <img src={projectDetails?.img1} class="w-full" />
          </div>
          <div id="item2" class="carousel-item w-full">
            <img src={projectDetails?.img2} class="w-full" />
          </div>
          <div id="item3" class="carousel-item w-full">
            <img src={projectDetails?.img3} class="w-full" />
          </div>
        </div>
        <div class="flex justify-center w-full py-2 gap-2">
          <a href="#item1" class="btn btn-xs">
            1
          </a>
          <a href="#item2" class="btn btn-xs">
            2
          </a>
          <a href="#item3" class="btn btn-xs">
            3
          </a>
        </div>
        <div className="w-3/4 lg:w-1/2 mx-auto">
          <h4 className="text-left text-gray-400">
            {" "}
            {projectDetails?.description}
          </h4>
          <div className="mt-3 w-full">
            <h4 className="text-left text-gray-400">Tools:</h4>
            {projectDetails?.tools.map((tool) => (
              <p className="inline-block border text-left m-1 p-1 text-gray-400 rounded-lg text-sm">
                {tool}
              </p>
            ))}
          </div>
          <div className="mt-3">
            <h4 className="text-left text-gray-400">Links:</h4>
            <div className="mt-3 text-left">
              <a
                href={projectDetails?.frontEnd}
                target="_blank"
                
              >
                {" "}
                <button className="btn btn-sm mt-1">Front-end Repo</button>
              </a>
              <a
                href={projectDetails?.backEnd}
                target="_blank"
               
              >
                {" "}
                <button className="btn btn-sm mt-1">Back-end Repo</button>
              </a>
              <a href={projectDetails?.live} target="_blank" >
                {" "}
                <button className="btn btn-sm mt-1">Live Site</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
