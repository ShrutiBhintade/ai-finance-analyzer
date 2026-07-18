import { Receipt, Tag, IndianRupee } from "lucide-react";

type Props = {
  topCategory: string;
  totalTransactions: number;
  largestExpense: {
    description: string;
    amount: number;
  } | null;
};

export default function MonthlySummaryCard({
  topCategory,
  totalTransactions,
  largestExpense,
}: Props) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">

      <h2 className="text-xl font-bold mb-6">
        📅 This Month at a Glance
      </h2>

      <div className="space-y-5">

        <div className="flex items-center gap-4">
          <Tag className="text-blue-500" />
          <div>
            <p className="text-sm text-muted-foreground">
              Top Category
            </p>

            <p className="font-semibold">
              {topCategory}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Receipt className="text-green-500" />
          <div>
            <p className="text-sm text-muted-foreground">
              Transactions
            </p>

            <p className="font-semibold">
              {totalTransactions}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <IndianRupee className="text-red-500" />
          <div>
            <p className="text-sm text-muted-foreground">
              Largest Expense
            </p>

            <p className="font-semibold">
              {largestExpense
                ? `${largestExpense.description} • ₹${largestExpense.amount.toLocaleString()}`
                : "No expenses"}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}