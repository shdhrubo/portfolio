import React from "react";
import { useParams } from "react-router-dom";
import useProjects from "../hooks/useProjects";

const ProjectsDetails = () => {
  const { id } = useParams();
  const [projects] = useProjects([]);
  console.log(projects);
  //   const projectDetails = projects.find((projects) => projects.id === id);
  //   console.log(projectDetails);
  return (
    <div className="bg-[#10121B]">
      <h4 className="text-2xl text-white">{id}</h4>
    </div>
  );
};

export default ProjectsDetails;
