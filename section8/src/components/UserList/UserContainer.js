import React from "react";
import "./UserContainer.css";

function UserContainer(props) {
  return (
    <div className="userWrap">
      <p>{props.username + " (" + props.age + " years old)"}</p>
    </div>
  );
}

export default UserContainer;
