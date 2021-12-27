import React, { useState } from "react";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  let [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={changeFilterHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>

      {/* {filteredExpenses.length === 0 && expensesContent}
      { filteredExpenses.length > 0 && expensesContent} */}
      {/* {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
    </Card>
  );
}

export default Expenses;
