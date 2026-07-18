"use client";

import { useState } from "react";
import { useTransactions } from "@/context/TransactionsContext";

export default function TransactionsPage() {
  const { transactions } = useTransactions();

  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((transaction) =>
    Object.values(transaction)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="space-y-6 p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold">
            Transactions
          </h1>

          <p className="text-muted-foreground">
            View and search all uploaded transactions.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 bg-background w-full md:w-72"
        />

      </div>

      <div className="rounded-xl border overflow-hidden">

        <table className="w-full">

          <thead className="bg-muted">

            <tr>

              <th className="text-left p-3">Date</th>

              <th className="text-left p-3">Description</th>

              <th className="text-left p-3">Category</th>

              <th className="text-left p-3">Type</th>

              <th className="text-right p-3">Amount</th>

            </tr>

          </thead>

          <tbody>

            {filteredTransactions.map((transaction) => (

              <tr
                key={transaction.id}
                className="border-t hover:bg-muted/40 transition"
              >

                <td className="p-3">
                  {transaction.date}
                </td>

                <td className="p-3 font-medium">
                  {transaction.description}
                </td>

                <td className="p-3">

                  <span className="px-3 py-1 rounded-full text-xs bg-secondary">
                    {transaction.category}
                  </span>

                </td>

                <td className="p-3">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      transaction.type === "income"
                        ? "bg-green-600/20 text-green-400"
                        : "bg-red-600/20 text-red-400"
                    }`}
                  >
                    {transaction.type}
                  </span>

                </td>

                <td
                  className={`p-3 text-right font-semibold ${
                    transaction.type === "income"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}₹
                  {Number(transaction.amount).toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredTransactions.length} of {transactions.length} transactions
      </div>

    </main>
  );
}