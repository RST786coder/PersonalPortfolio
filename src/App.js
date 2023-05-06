import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./navigation/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <Home />
      <Projects/>
    </div>
  );
};

export default App;
