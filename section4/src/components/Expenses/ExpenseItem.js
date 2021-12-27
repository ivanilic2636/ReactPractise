import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


function ExpenseItem(props) {
  
  let [title, setTitle] = useState(props.title);
 
 
  const onClickEvent = () =>{
    setTitle('Updated')
  }

  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </div>
      <button onClick={onClickEvent}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
