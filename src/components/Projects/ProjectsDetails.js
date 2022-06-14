import React from "react";
import { useParams } from "react-router-dom";
import useProjects from "../hooks/useProjects";

const ProjectsDetails = () => {
  const {id} = useParams();
  const [projects,setProjects]=useProjects([]);
  return (
    <div className="bg-[#10121B]">
      <h4 className="text-2xl text-white">{id}</h4>
    </div>
  );
};

export default ProjectsDetails;
