import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  let [title, setTitle] = useState("");
  let [amount, setAmount] = useState("");
  let [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // console.log(title);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // console.log(amount);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // console.log(date);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
