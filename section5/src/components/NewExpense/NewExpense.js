import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'


function NewExpense(props) {
let [isEditing, setIsEditing] = useState(false);
        const saveExpenseDataHandler = (enteredExpenseData) => {
            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()
            };
            props.onAddExpense(expenseData);
            setIsEditing(false)
        };
    
        const isEditingHandler = () => {
          setIsEditing(true);
        }


  return (
    <div className="new-expense">
      {!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>}
    </div>
  );
}

export default NewExpense;
