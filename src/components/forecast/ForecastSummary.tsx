"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransactions } from "@/context/TransactionsContext";

export default function ForecastSummary() {
  const { transactions } = useTransactions();

  const currentExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const predictedExpenses = currentExpenses * 1.15;

  const currentIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const currentSavings = currentIncome - currentExpenses;
  const predictedSavings = currentIncome - predictedExpenses;

  return (
    <Card>
      <CardHeader>
        <CardTitle>📊 Forecast Summary</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-muted-foreground">Current Expenses</p>
          <p className="text-3xl font-bold">
            ₹{currentExpenses.toLocaleString()}
          </p>

          <p className="text-muted-foreground mt-4">
            Predicted Next Month
          </p>

          <p className="text-3xl font-bold text-orange-500">
            ₹{predictedExpenses.toLocaleString()}
          </p>

          <p className="text-orange-500 font-medium">
            ▲ Expected Increase: 15%
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground">Current Savings</p>

          <p className="text-3xl font-bold">
            ₹{currentSavings.toLocaleString()}
          </p>

          <p className="text-muted-foreground mt-4">
            Predicted Savings
          </p>

          <p className="text-3xl font-bold text-green-500">
            ₹{predictedSavings.toLocaleString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}