import { useState } from "react";
import Clock from "./components/Clock";
import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";

const expense = [
  { title: "mazda", amount: 3000, date: new Date(2020, 2, 28) },
  { title: "ford", amount: 2000, date: new Date(2021, 3, 28) },
  { title: "nisan", amount: 1000, date: new Date(2022, 4, 28) },
  { title: "honda", amount: 500, date: new Date(2023, 5, 28) },
];

function App() {
  const [expenses, setExpenses] = useState(expense);
  function handleAddExpense(record) {
    setExpenses((expenses) => [...expense, record]);
  }

  return (
    <div>
      <Clock />
      <ExpenseForm addRecord={handleAddExpense} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
