import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./MealItem.module.css";

function MealItem(props) {
  const [amount, setAmount] = useState(0);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const data = { ...props.meal };
    data.qty = amount;
    props.onAdd(data);
  };

  const quantityChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitFormHandler} className={classes.form}>
        <div className={classes.mealWrapper}>
          <div className={classes.meal}>
            <h3>{props.meal.name}</h3>
            <h4 className={classes.description}>{props.meal.description}</h4>
            <h4 className={classes.price}>${props.meal.price}</h4>
          </div>
          <div className={classes.sideWrapp}>
            <div className={classes.sideQty}>
              <p>Amount</p>
              <input
                type="number"
                value={amount}
                onChange={quantityChangeHandler}
              />
            </div>
            <Button type="submit">+ Add</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MealItem;
