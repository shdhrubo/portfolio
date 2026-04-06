import React from "react";
import Contacts from "../../Contacts/Contacts";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import HomeProjects from "./HomeProjects";

import WorkExperience from "../WorkExperience/WorkExperience";
import Education from "../Education/Education";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Skills></Skills>
      <WorkExperience></WorkExperience>
      <HomeProjects></HomeProjects>
      <Education></Education>
      <Contacts></Contacts>
    </div>
  );
};

export default Home;
