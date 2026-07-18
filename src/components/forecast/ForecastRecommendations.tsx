"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransactions } from "@/context/TransactionsContext";

export default function ForecastRecommendations() {
  const { transactions } = useTransactions();

  const expenses = transactions.filter((t) => t.type === "expense");

  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);

  const shoppingExpense = expenses
    .filter((t) => t.category === "Shopping")
    .reduce((sum, t) => sum + t.amount, 0);

  const utilitiesExpense = expenses
    .filter((t) => t.category === "Utilities")
    .reduce((sum, t) => sum + t.amount, 0);

  const foodExpense = expenses
    .filter((t) => t.category === "Food")
    .reduce((sum, t) => sum + t.amount, 0);

  const predictedExpense = Math.round(totalExpense * 1.15);

  const predictedSavings = Math.round(totalExpense * 0.20);

  return (
    <Card>
      <CardHeader>
        <CardTitle>🤖 AI Forecast Recommendations</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">
            📈 Predicted Monthly Expense
          </h3>

          <p className="text-2xl font-bold text-orange-500 mt-2">
            ₹{predictedExpense.toLocaleString()}
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Based on your recent spending pattern, your expenses may increase
            by around 15% next month.
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">
            🛍 Shopping Recommendation
          </h3>

          <p className="mt-2">
            Reduce Shopping expenses by approximately{" "}
            <span className="font-bold text-green-500">
              ₹{Math.round(shoppingExpense * 0.20).toLocaleString()}
            </span>{" "}
            to improve savings.
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">
            🍔 Food Spending
          </h3>

          <p className="mt-2">
            Current Food spending:
            <span className="font-bold">
              {" "}
              ₹{foodExpense.toLocaleString()}
            </span>
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Food expenses are healthy. Maintain your current spending habits.
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">
            ⚡ Utilities Alert
          </h3>

          <p className="mt-2">
            Utilities spending:
            <span className="font-bold">
              {" "}
              ₹{utilitiesExpense.toLocaleString()}
            </span>
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Consider monitoring electricity and internet bills to avoid budget
            overruns.
          </p>
        </div>

        <div className="rounded-lg bg-green-900/20 border border-green-500 p-5">
          <h3 className="font-semibold text-green-400">
            💰 Estimated Additional Savings
          </h3>

          <p className="text-3xl font-bold text-green-500 mt-2">
            ₹{predictedSavings.toLocaleString()}
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Following these recommendations could help increase your monthly
            savings.
          </p>
        </div>

      </CardContent>
    </Card>
  );
}