import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css"

function Home(){
  return(
    <div className="main">
    <Link to="/" className="logo"><img src={require("../images/logo.png")} alt="logo"></img></Link>
    <img className="rock" src={require("../images/rock.png")} alt="the wok"/>
    <img className="bubble" src={require("../images/bubble.png")} alt="the wok"/>
    <p className="motto">Proximity to </p>
    <p className="motto mottopp"> Infinity</p>

    </div>
  )
}

export default Home;