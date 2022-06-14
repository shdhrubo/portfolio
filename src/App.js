import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Projects from "./components/Projects/Projects";
import ProjectsDetails from "./components/Projects/ProjectsDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/projects/:id" element={<ProjectsDetails></ProjectsDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
