import ExpenseItem from "./ExpenseItem";

function Expenses({ items }) {
  const expenseItems = items.map((ex, i) => {
    return (
      <ExpenseItem
        key={i}
        title={ex.title}
        amount={ex.amount}
        date={ex.date}
      ></ExpenseItem>
    );
  });
  return <div className="expenses">{expenseItems}</div>;
}
export default Expenses;
