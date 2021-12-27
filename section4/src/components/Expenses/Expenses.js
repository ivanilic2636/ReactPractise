import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

  let [filteredYear, setFilteredYear] = useState('2020')

  const changeFilterHandler = (selectedYear) => {
    console.log("New filter");
    console.log(selectedYear);
    setFilteredYear(selectedYear)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={changeFilterHandler} value={filteredYear}>
      <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      />
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      />
      <ExpenseItem
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      />
      </ExpensesFilter>
    </Card>
  );
}

export default Expenses;
