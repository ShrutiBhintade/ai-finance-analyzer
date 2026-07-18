"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Transaction {
  category: string;
  amount: number;
  type: "income" | "expense";
}

interface BudgetAnalysisProps {
  transactions: Transaction[];
}

const budgets: Record<string, number> = {
  Food: 2000,
  Shopping: 5000,
  Transport: 1500,
  Utilities: 1500,
  Entertainment: 1000,
};

export default function BudgetAnalysis({
  transactions,
}: BudgetAnalysisProps) {
  const spending = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {} as Record<string, number>);

  return (
    <Card>
      <CardHeader>
        <CardTitle>📊 Budget Analysis</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {Object.entries(budgets).map(([category, budget]) => {
          const spent = spending[category] || 0;
          const percentage = Math.min((spent / budget) * 100, 100);

          return (
            <div key={category} className="space-y-2">
              <div className="flex justify-between font-medium">
                <span>{category}</span>
                <span>
                  ₹{spent.toLocaleString()} / ₹{budget.toLocaleString()}
                </span>
              </div>

              <Progress value={percentage} />

              <div className="text-sm text-muted-foreground">
                {percentage < 70 && "🟢 Within Budget"}

                {percentage >= 70 &&
                  percentage < 100 &&
                  "🟡 Near Budget Limit"}

                {spent > budget &&
                  "🔴 Over Budget"}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}