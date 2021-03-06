import React from "react";
import classes from "./Button.modal.css";


function Button(props) {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
export default Button;
