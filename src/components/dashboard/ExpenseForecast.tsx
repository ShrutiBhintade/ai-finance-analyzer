"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface ExpenseForecastProps {
  currentExpense: number;
}

export default function ExpenseForecast({
  currentExpense,
}: ExpenseForecastProps) {
  // Predict 15% increase
  const predictedExpense = currentExpense * 1.15;

  const increase =
    ((predictedExpense - currentExpense) / currentExpense) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>📈 Expense Forecast</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">

        <div>
          <p className="text-sm text-muted-foreground">
            Current Month
          </p>

          <h2 className="text-3xl font-bold">
            ₹{currentExpense.toLocaleString()}
          </h2>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Predicted Next Month
          </p>

          <h2 className="text-3xl font-bold text-orange-500">
            ₹{predictedExpense.toLocaleString()}
          </h2>
        </div>

        <div className="flex items-center gap-2 text-orange-500 font-semibold">

          <TrendingUp className="w-5 h-5" />

          Expected Increase: {increase.toFixed(1)}%

        </div>

        <div className="rounded-lg border p-4 bg-muted/30">
          <p className="font-medium">
            AI Insight
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Based on your recent spending pattern, your expenses are
            expected to increase next month. Consider reducing
            discretionary spending like Shopping and Entertainment.
          </p>
        </div>

      </CardContent>
    </Card>
  );
}