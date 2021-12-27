import React, { useState } from "react";
import "./NewUser.css";
import Error from "../ErrorComponent/Error";

function NewUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (username.length === 0 || age.length === 0) {
      setError("User didnt input the form correctly");
    } else if (age < 0) {
      setError("User didnt enter a valid age ( > 0 )");
    } else {
      const data = {
        id: Math.random(),
        username: username,
        age: age,
      };
      props.onAddUser(data);
      setAge("");
      setUsername("");
    }
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const errorDissapear = () => {
    setError("");
  }

  return (
    <div className="allWrap">
      {error.length > 0 && <Error errorMessage={error} errorCorrect={errorDissapear}/>}
      <form onSubmit={submitFormHandler}>
        <div className="formWrapper">
          <label>Username</label>
          <input
            type="text"
            onChange={usernameChangeHandler}
            value={username}
          />
          <label>Age (Years)</label>
          <input type="number" onChange={ageChangeHandler} value={age} />
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default NewUser;
