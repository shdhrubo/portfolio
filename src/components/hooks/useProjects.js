import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://shdhrubo.onrender.com/projects")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => a.serial - b.serial);
        setProjects(data);
      });
  }, []);
  return [projects, setProjects];
};
export default useProjects;
