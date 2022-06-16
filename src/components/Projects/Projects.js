import React from "react";
import { Link } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import ProjectsDetails from "../ProjectsDetails/ProjectsDetails";

const Projects = () => {
  const [projects] = useProjects([]);
  console.log(projects);
  return (
    <div className="bg-[#10121B] pb-10">
      <h3 className="text-2xl font-bold inline-block text-[#44A076] border-b-4 border-[#44A076] mt-8 mb-6">
        My projects
      </h3>

      <div className="grid  lg:grid-cols-2  gap-8 mx-10">
        {projects.map((project) => (
          <div className="w-full ">
            <div class="card w-full bg-[#1E2A3A] text-white shadow-xl p-0">
              <img src={project.img1} alt="" className="w-auto " />
              <div class="card-body text-left">
                <h2 class="card-title text-[#44A076]">{project.serial}</h2>
                <h2 class="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <Link className="mx-auto" to={`/projects/${project._id}`}>
                  {" "}
                  <button className="btn btn-sm w-52  bg-[#44A076]">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
