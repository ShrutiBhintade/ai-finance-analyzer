"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransactions } from "@/context/TransactionsContext";

export default function SpendingAnalysis() {
  const { transactions } = useTransactions();

  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryTotals = expenses.reduce((acc, transaction) => {
    acc[transaction.category] =
      (acc[transaction.category] || 0) + transaction.amount;

    return acc;
  }, {} as Record<string, number>);

  const sortedCategories = Object.entries(categoryTotals).sort(
    (a, b) => b[1] - a[1]
  );

  const highestCategory = sortedCategories[0];

  const totalExpense = expenses.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  const percentage = highestCategory
    ? ((highestCategory[1] / totalExpense) * 100).toFixed(1)
    : "0";

  return (
    <Card>
      <CardHeader>
        <CardTitle>📊 Spending Analysis</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {highestCategory ? (
          <>
            <p className="text-lg">
              Your highest spending category is
              <span className="font-bold text-primary">
                {" "}
                {highestCategory[0]}
              </span>
              .
            </p>

            <div className="text-3xl font-bold">
              ₹{highestCategory[1].toLocaleString()}
            </div>

            <p className="text-muted-foreground">
              This represents {percentage}% of your total expenses.
            </p>

            <div className="rounded-lg border p-4 bg-muted/20">
              <p className="font-semibold">🤖 AI Insight</p>

              <p className="text-muted-foreground mt-2">
                Most of your spending is concentrated in{" "}
                <strong>{highestCategory[0]}</strong>. Reducing this category
                could significantly improve your monthly savings.
              </p>
            </div>
          </>
        ) : (
          <p>No expense data available.</p>
        )}
      </CardContent>
    </Card>
  );
}