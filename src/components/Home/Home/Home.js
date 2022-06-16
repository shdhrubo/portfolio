import React from "react";
import Contacts from "../../Contacts/Contacts";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import HomeProjects from "./HomeProjects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Skills></Skills>
      <HomeProjects></HomeProjects>
      <Contacts></Contacts>
    </div>
  );
};

export default Home;
