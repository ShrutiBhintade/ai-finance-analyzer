"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Transaction {
  category: string;
  amount: number;
  type: string;
}

interface Props {
  transactions: Transaction[];
}

export default function SmartSavings({ transactions }: Props) {
  const expenses = transactions.filter((t) => t.type === "expense");

  const totalExpense = expenses.reduce(
    (sum, t) => sum + t.amount,
    0
  );

  const shopping =
    expenses
      .filter((t) => t.category === "Shopping")
      .reduce((sum, t) => sum + t.amount, 0);

  const entertainment =
    expenses
      .filter((t) => t.category === "Entertainment")
      .reduce((sum, t) => sum + t.amount, 0);

  const utilities =
    expenses
      .filter((t) => t.category === "Utilities")
      .reduce((sum, t) => sum + t.amount, 0);

  const possibleSavings =
    shopping * 0.20 +
    entertainment * 0.30 +
    Math.max(utilities - 1500, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>💡 Smart Savings Tips</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">

        <div className="rounded-lg border p-3">
          Reduce Shopping spending by about{" "}
          <strong>
            ₹{Math.round(shopping * 0.20).toLocaleString()}
          </strong>
        </div>

        <div className="rounded-lg border p-3">
          Cut Entertainment spending by{" "}
          <strong>
            ₹{Math.round(entertainment * 0.30).toLocaleString()}
          </strong>
        </div>

        <div className="rounded-lg border p-3">
          Utilities are{" "}
          {utilities > 1500 ? "above" : "within"} your recommended budget.
        </div>

        <div className="rounded-lg bg-green-500/10 border border-green-500 p-4">
          <p className="font-semibold">
            Estimated Monthly Savings
          </p>

          <p className="text-2xl font-bold text-green-500">
            ₹{Math.round(possibleSavings).toLocaleString()}
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Based on your recent spending pattern.
          </p>
        </div>

      </CardContent>
    </Card>
  );
}