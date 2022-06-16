import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return [projects, setProjects];
};
export default useProjects;
