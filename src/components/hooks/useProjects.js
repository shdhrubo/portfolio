import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://limitless-atoll-67186.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => {
        data.sort(function (a, b) {
          return a.serial - b.serial;
        });
        setProjects(data);
      }).finally(() => {
        setLoading(false);
      });
  }, []);
  return [projects, setProjects,loading];
};
export default useProjects;
