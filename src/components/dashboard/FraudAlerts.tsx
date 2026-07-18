"use client";
import type { Transaction } from "@/context/TransactionsContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


interface FraudAlertsProps {
  transactions: Transaction[];
}

export default function FraudAlerts({
  transactions,
}: FraudAlertsProps) {
  const suspiciousTransactions = transactions.filter(
    (t) => t.type === "expense" && t.amount > 5000
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>🚨 Fraud Detection</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        {suspiciousTransactions.length === 0 ? (
          <div className="rounded-lg border border-green-500 bg-green-500/10 p-4">
            ✅ No suspicious transactions detected.
          </div>
        ) : (
          suspiciousTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="rounded-lg border border-red-500 bg-red-500/10 p-4"
            >
              <div className="font-semibold">
                🚨 {transaction.description}
              </div>

              <div className="text-sm text-muted-foreground mt-1">
                Category: {transaction.category}
              </div>

              <div className="text-sm text-muted-foreground">
                Date: {transaction.date}
              </div>

              <div className="font-bold text-red-500 mt-2">
                ₹{transaction.amount.toLocaleString()}
              </div>

              <div className="text-sm mt-2">
                Reason: High-value expense detected.
              </div>
            </div>
          ))
        )}

      </CardContent>
    </Card>
  );
}