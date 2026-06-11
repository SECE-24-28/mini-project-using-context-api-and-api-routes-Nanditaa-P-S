"use client";
import { createContext, useContext, useState } from "react";

type Expense = { id: number; name: string; amount: number; category: string };

type ExpenseContextType = {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  addExpense: (expense: Expense) => void;
  total: number;
};

const ExpenseContext = createContext<ExpenseContextType | null>(null);

export const ExpenseProvider = ({ children }: { children: React.ReactNode }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses, addExpense, total }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => useContext(ExpenseContext)!;
