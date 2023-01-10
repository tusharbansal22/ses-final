import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-li">
          <Link to="/Member">CREW</Link>
        </li>
        <li className="nav-li">
          <Link to="/Magazine">MAGAZINE</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
