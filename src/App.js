// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Signup from "./Components/signup";
import Dashboard from "./Components/Dash";
import Hello from "./Components/hello";


function App() {
  return (
    <div>
      <div>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="about" element={<About/>} />
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/" exact component={Dashboard} />
              <Route path="/hello" component={Hello} />
            </Routes>

            
          </div>
        </Router>
      </div>

      
    </div>
  );
}

export default App;
