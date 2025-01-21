import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <div className="main-content">
        <Home />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
