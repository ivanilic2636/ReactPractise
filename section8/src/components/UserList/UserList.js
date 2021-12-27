import React from "react";
import UserContainer from "./UserContainer";
import "./UserList.css";

function UserList(props) {
  const userList = props.usersData;

 const list = Array.from(userList)

  return (
    <div className="listWrapp">
      {list.map((userOne) => (
      <UserContainer
        key={userOne.id}
        username={userOne.username}
        age={userOne.age}
      />
    ))}
    </div>
  );
}

export default UserList;
