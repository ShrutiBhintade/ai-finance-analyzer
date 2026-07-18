"use client";

import { generateFinancialReport } from "@/lib/generateFinancialReport";
import { useTransactions } from "@/context/TransactionsContext";

export default function FinancialReport() {
  const { transactions } = useTransactions();

  const report = generateFinancialReport(transactions);

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">

      <h2 className="text-2xl font-bold mb-2">
        🤖 AI Financial Report
      </h2>

      <p className="text-muted-foreground mb-6">
        AI-generated summary of your financial activity.
      </p>

      <div className="grid gap-4 md:grid-cols-2">

        <div>
          <h4 className="font-semibold">💰 Income</h4>
          <p>₹{report.income.toLocaleString()}</p>
        </div>

        <div>
          <h4 className="font-semibold">💸 Expenses</h4>
          <p>₹{report.expenses.toLocaleString()}</p>
        </div>

        <div>
          <h4 className="font-semibold">💵 Balance</h4>
          <p>₹{report.balance.toLocaleString()}</p>
        </div>

        <div>
          <h4 className="font-semibold">📈 Savings Rate</h4>
          <p>{report.savingsRate}%</p>
        </div>

        <div>
          <h4 className="font-semibold">🏆 Highest Spending Category</h4>
          <p>{report.topCategory}</p>
        </div>

      </div>

      <div className="mt-8 rounded-lg bg-blue-500/10 border border-blue-500/20 p-4">

        <h3 className="font-semibold text-blue-400 mb-2">
          AI Recommendation
        </h3>

        <p>{report.recommendation}</p>

      </div>

    </div>
  );
}