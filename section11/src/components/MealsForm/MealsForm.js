import React from "react";
import MealItem from "../MealItem/MealItem";
import Card from "../UI/Card";
import classes from "./MealsForm.module.css";

function MealsForm(props) {
  const {meals, onAdd} = props;

  return (
    <Card className={classes.wrap}>
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          meal={meal}
          onAdd={onAdd}
        />
      ))}
    </Card>
  );
}

export default MealsForm;
