import React from "react";
// import ReactDOM from 'react-dom/client';
import Cards from "../components/Card"
import Navbar from "../components/Navbar";
import secy from "./membersfold/secretary.js";
import mentor from "./membersfold/mentors.js";
import astrocore from "./membersfold/astrocore.js";
import aerocore from "./membersfold/aerocore.js";
import "./styles/member.css"
function Member(){
  // console.log(member[0]);
  return <div>
    <Navbar />
    <h1>SECRETARY</h1>
    <dl className="dictionary">
        {secy.map(mem => (
          <Cards
            key={mem.id}
            name={mem.name}
            position={mem.position}
            dept={mem.dept}
          />
        ))}
      </dl>
      <h1>MENTOR</h1>
    <dl className="dictionary">
        {mentor.map(mem => (
          <Cards
            key={mem.id}
            name={mem.name}
            position={mem.position}
            dept={mem.dept}
          />
        ))}
      </dl>
      <h1>ASTRONOMY CORES</h1>
    <dl className="dictionary">
        {astrocore.map(mem => (
          <Cards
            key={mem.id}
            name={mem.name}
            position={mem.position}
            dept={mem.dept}
          />
        ))}
      </dl>
      <h1>AEROMODELLING CORES</h1>
    <dl className="dictionary">
        {aerocore.map(mem => (
          <Cards
            key={mem.id}
            name={mem.name}
            position={mem.position}
            dept={mem.dept}
          />
        ))}
      </dl>

  </div>
}

export default Member;
