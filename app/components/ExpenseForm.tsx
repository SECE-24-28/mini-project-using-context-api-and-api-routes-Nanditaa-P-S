"use client";
import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";

export default function ExpenseForm() {
  const { addExpense } = useExpense();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, amount: Number(amount), category }),
    });
    const data = await res.json();
    addExpense(data.expense);
    setName(""); setAmount(""); setCategory("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <button type="submit">Add</button>
    </form>
  );
}
