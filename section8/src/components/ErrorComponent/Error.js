import React from "react";
import "./Error.css";

function Error(props) {

  const errorHandler = () => {
    props.errorCorrect();
  } 

  return (
    <div>
      <div className="backdrop" onClick={errorHandler} />
      <div className="errorWrapper">
        <div className="headlineWrapper">
          <h1 className="headlineError">Invalid input</h1>
        </div>
        <div className="messageWrapper">
          <p className="errorMessage">{props.errorMessage}</p>
        </div>
        <div className="buttonWrapper">
          <button className="errorButton" onClick={errorHandler}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
