
import React from "react";
import "../CSS/home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home-container">

        <span class="letter-1">DAYSTAR</span>
        <span class="letter-2">DAYCARE</span> 

        <div signin><Link to="/login" className="">Login</Link></div>
  </div>

  

  
  );
}

export default Home;
