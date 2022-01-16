import React from "react";
import classes from "./Header.module.css";
import img from "./img/meals.jpg";

function Header(props) {


  return (
    <div>
      <div className={classes.mainHeader}>
        <div className={classes.header}>
          <h1>ReactMeals</h1>
          <button onClick={props.cartHandler}>Click</button>
        </div>
        <div className={classes.mainImage}>
          <img src={img} alt="Meals" />;
        </div>
      </div>
    </div>
  );
}

export default Header;
