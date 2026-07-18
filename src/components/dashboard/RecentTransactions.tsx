"use client";

import { useTransactions } from "@/context/TransactionsContext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function RecentTransactions() {
  const { transactions } = useTransactions();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactions.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-8 text-muted-foreground"
                >
                  No transactions uploaded yet.
                </TableCell>
              </TableRow>
            ) : (
              transactions
                .slice(-5)
                .reverse()
                .map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {transaction.description}
                    </TableCell>

                    <TableCell>
                      <span
                        className={cn(
                          "inline-flex rounded-full px-2 py-1 text-xs",
                          transaction.type === "income"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        )}
                      >
                        {transaction.category}
                      </span>
                    </TableCell>

                    <TableCell>
                      {transaction.date}
                    </TableCell>

                    <TableCell
                      className={cn(
                        "text-right font-semibold",
                        transaction.type === "income"
                          ? "text-green-500"
                          : "text-red-500"
                      )}
                    >
                      {transaction.type === "income"
                        ? "+"
                        : "-"}
                      ₹
                      {transaction.amount.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}