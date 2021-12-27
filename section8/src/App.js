import React, { useState } from "react";
import NewUser from "./components/UserForm/NewUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState("");

  const newUserHandler = (userData) => {
    setUsers((prevUsers) => {
      return [userData, ...prevUsers];
    });
  };

  return (
    <div className="main" >
      <NewUser onAddUser={newUserHandler}/>
      <UserList usersData={users} />
    </div>
  );
}

export default App;
