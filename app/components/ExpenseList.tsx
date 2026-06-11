"use client";
import { useExpense } from "../context/ExpenseContext";

export default function ExpenseList() {
  const { expenses } = useExpense();

  if (expenses.length === 0) return <p>No expenses yet.</p>;

  return (
    <div>
      <h2>All Expenses</h2>
      {expenses.map((e) => (
        <div key={e.id}>
          <span>{e.name} — ₹{e.amount} </span>
          <span>({e.category})</span>
          <hr />
        </div>
      ))}
    </div>
  );
}
