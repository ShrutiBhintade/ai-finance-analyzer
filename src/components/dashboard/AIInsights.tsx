"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AIInsightsProps {
  income: number;
  expenses: number;
  balance: number;
  savings: number;
  transactions: {
    category: string;
    amount: number;
    type: "income" | "expense";
  }[];
}

export default function AIInsights({
  income,
  expenses,
  balance,
  savings,
  transactions,
}: AIInsightsProps) {
  const expenseTransactions = transactions.filter(
    (t) => t.type === "expense"
  );

  const categoryTotals = expenseTransactions.reduce(
    (acc, transaction) => {
      acc[transaction.category] =
        (acc[transaction.category] || 0) + transaction.amount;

      return acc;
    },
    {} as Record<string, number>
  );

  const highestCategory =
    Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0];

  return (
    <Card>
      <CardHeader>
        <CardTitle>🤖 AI Insights</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

  <div className="rounded-lg border p-4">
    💰 You spent the most on{" "}
    <strong>{highestCategory?.[0] ?? "N/A"}</strong>.
  </div>

  <div className="rounded-lg border p-4">
    📈 Income exceeds expenses by{" "}
    <strong>₹{balance.toLocaleString()}</strong>.
  </div>

  <div className="rounded-lg border p-4">
    💵 Estimated savings:
    <strong> ₹{savings.toLocaleString()}</strong>
  </div>

  <div className="rounded-lg border p-4">
    💡 Savings Rate:
    <strong>
      {" "}
      {income > 0
        ? ((savings / income) * 100).toFixed(1)
        : 0}
      %
    </strong>
  </div>

  {expenses > income * 0.8 && (
    <div className="rounded-lg border border-red-500 bg-red-500/10 p-4">
      ⚠️ Your expenses are above 80% of your income. Consider reducing discretionary spending.
    </div>
  )}

  {savings > income * 0.2 && (
    <div className="rounded-lg border border-green-500 bg-green-500/10 p-4">
      🎉 Great job! You are saving more than 20% of your income.
    </div>
  )}

  {highestCategory && (
    <div className="rounded-lg border border-yellow-500 bg-yellow-500/10 p-4">
      💡 Tip: Try reducing your spending on{" "}
      <strong>{highestCategory[0]}</strong> to increase your monthly savings.
    </div>
  )}

</CardContent>
    </Card>
  );
}