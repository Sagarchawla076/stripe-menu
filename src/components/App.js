import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import "../styles/main.scss";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
  );
};

export default App;
