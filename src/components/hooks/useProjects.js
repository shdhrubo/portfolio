import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://limitless-atoll-67186.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return [projects, setProjects];
};
export default useProjects;
