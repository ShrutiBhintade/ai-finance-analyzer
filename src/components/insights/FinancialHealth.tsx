"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransactions } from "@/context/TransactionsContext";

export default function FinancialHealth() {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const savingsRate =
    income > 0 ? ((income - expense) / income) * 100 : 0;

  let score = 100;

  if (savingsRate < 20) score -= 20;
  if (expense > income) score -= 30;
  if (expense > income * 0.8) score -= 10;

  score = Math.max(0, Math.min(100, score));

  let status = "Excellent";
  let color = "text-green-500";

  if (score < 80) {
    status = "Good";
    color = "text-yellow-500";
  }

  if (score < 60) {
    status = "Needs Improvement";
    color = "text-orange-500";
  }

  if (score < 40) {
    status = "Poor";
    color = "text-red-500";
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>🏆 Financial Health Score</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className={`text-5xl font-bold ${color}`}>
          {score}/100
        </div>

        <p className="text-lg font-medium">
          Status: <span className={color}>{status}</span>
        </p>

        <p className="text-muted-foreground">
          Savings Rate: {savingsRate.toFixed(1)}%
        </p>
      </CardContent>
    </Card>
  );
}