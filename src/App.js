import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Projects from "./components/Projects/Projects";
import ProjectsDetails from "./components/ProjectsDetails/ProjectsDetails";
import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route
          path="/projects/:id"
          element={<ProjectsDetails></ProjectsDetails>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
<Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
