import { useState } from "react";
import { localProjects } from "../../data/localProjects";

const useProjects = () => {
  const [projects] = useState(localProjects);
  return [projects, () => {}];
};

export default useProjects;
