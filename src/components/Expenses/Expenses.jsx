import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(`2020`);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  let expensesFiltered = props.items.filter((el) => el.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
      <ExpensesChart expenses = {expensesFiltered} />
      <ExpensesList items = {expensesFiltered} />
    </Card>
  );
}

export default Expenses;
