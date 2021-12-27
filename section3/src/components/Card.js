import React from "react";
import "./Card.css";

function Card(props) {
  //dodavanje svih klasa koji su dodati na class wrapper component
  const classes = 'card ' + props.className;
  //pozivanje svih stvari unutar card componenta koristeci props.children
  return <div className={classes}>{props.children}</div>;
}

export default Card;
