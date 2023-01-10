import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
  return <div>
  <nav className="nav">
    <ul>
      <li><Link to="/Member">Crew</Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Magazine">Magazine</Link></li>
    </ul>
  </nav>
 </div>
}

export default Navbar;