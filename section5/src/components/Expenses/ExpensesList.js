import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  let filteredExpenses = props.items;

  //Ovako mogu da se vracaju JSX kodovi koji vracaju samo jednu vrstu podataka, odnosno jedan component blok
  //Ukoliko bih imao vise razlicitih podataka ovaj nacin nije validan
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
     {filteredExpenses.map((filterExpense) => (
      <ExpenseItem
        key={filterExpense.id}
        title={filterExpense.title}
        amount={filterExpense.amount}
        date={filterExpense.date}
      />
    ))}
    </ul>
  );
}

export default ExpensesList;
