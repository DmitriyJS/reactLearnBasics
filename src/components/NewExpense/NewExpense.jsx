import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpens = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    props.onAddExpense(expenseData);
  };

  const [isEditing, setIsEditing] = useState(false);

  const stopEditingHandler = (e) => {
    setIsEditing(false);
  };

  const startEditingHandler = (e) => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick = {startEditingHandler} >Add new expense</button>}
      {isEditing && <ExpenseForm onCancel = {stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpens;
