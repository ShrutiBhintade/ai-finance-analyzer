import type { Transaction } from "@/context/TransactionsContext";

export function generateFinancialReport(
  transactions: Transaction[]
) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  const savingsRate =
    income > 0
      ? ((balance / income) * 100).toFixed(1)
      : "0";

  const categoryTotals: Record<string, number> = {};

  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    });

  const topCategory =
    Object.entries(categoryTotals).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] || "N/A";

  let recommendation = "";

  if (Number(savingsRate) >= 30) {
    recommendation =
      "Excellent savings rate. Keep maintaining your current financial habits.";
  } else if (Number(savingsRate) >= 15) {
    recommendation =
      "Your savings are healthy, but reducing discretionary expenses could improve them further.";
  } else {
    recommendation =
      "Your savings rate is low. Consider reviewing your largest spending category and setting a monthly budget.";
  }

  return {
    income,
    expenses,
    balance,
    savingsRate,
    topCategory,
    recommendation,
  };
}