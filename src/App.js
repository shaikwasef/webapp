import React from "react";
import "./App.css";
import Navbar from "./components/NavbarComponents/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <div className="app-navbar">
        <Navbar />
      </div>
      <div className="app-home">
        <Home />
      </div>
    </div>
  );
}

export default App;
