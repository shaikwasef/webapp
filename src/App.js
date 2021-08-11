import React from "react";
import "./App.css";
import Navbar from "./components/NavbarComponents/Navbar";
import Home from "./pages/home/Home";

//app-navbar and app-home to implement the relative stacking contexts of the home page and the Nav bar
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
