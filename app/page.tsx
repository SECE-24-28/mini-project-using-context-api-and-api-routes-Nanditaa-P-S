"use client";
import { useEffect } from "react";
import { useExpense } from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default function Home() {
  const { total, setExpenses } = useExpense();

  // fetch existing expenses from API on load
  useEffect(() => {
    fetch("/api/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data.expenses));
  }, []);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2>Total: ₹{total}</h2>
      <hr />
      <ExpenseForm />
      <hr />
      <ExpenseList />
    </div>
  );
}
