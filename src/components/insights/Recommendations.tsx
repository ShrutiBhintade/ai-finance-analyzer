"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransactions } from "@/context/TransactionsContext";

export default function Recommendations() {
  const { transactions } = useTransactions();

  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryTotals = expenses.reduce((acc, transaction) => {
    acc[transaction.category] =
      (acc[transaction.category] || 0) + transaction.amount;

    return acc;
  }, {} as Record<string, number>);

  const recommendations: string[] = [];

  Object.entries(categoryTotals).forEach(([category, amount]) => {
    if (amount > 2000) {
      recommendations.push(
        `Reduce ${category} spending. You spent ₹${amount.toLocaleString()} this month.`
      );
    }
  });

  if (recommendations.length === 0) {
    recommendations.push(
      "Excellent spending habits! Keep maintaining your current budget."
    );
  }

  recommendations.push(
    "Set aside at least 20% of your monthly income as savings."
  );

  recommendations.push(
    "Track your daily expenses to avoid unnecessary purchases."
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>💡 Personalized Recommendations</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {recommendations.map((tip, index) => (
          <div
            key={index}
            className="rounded-lg border p-4 bg-muted/20"
          >
            {tip}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}