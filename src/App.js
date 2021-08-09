import React from "react";
import "./App.css";
import Navbar from "./components/NavbarComponents/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
