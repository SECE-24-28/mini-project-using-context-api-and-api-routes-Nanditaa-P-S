import { NextRequest } from "next/server";

// in-memory store
const expenses: { id: number; name: string; amount: number; category: string }[] = [
  { id: 1, name: "Groceries", amount: 500, category: "Food" },
  { id: 2, name: "Netflix", amount: 200, category: "Entertainment" },
];

export async function GET() {
  return Response.json({ expenses });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newExpense = { id: Date.now(), ...body };
  expenses.push(newExpense);
  return Response.json({ expense: newExpense });
}
