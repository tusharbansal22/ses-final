import React from "react";
import "./styles/card.css";

function Cards(props) {
  return (
    <div class="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.img} alt="Avatar"></img>
        </div>
        <div className="flip-card-back">
          <h1>{props.name}</h1>
          <p>{props.postion}</p>
          <p>{props.dept}</p>
        </div>
      </div>
    </div>
  );
}
export default Cards;
