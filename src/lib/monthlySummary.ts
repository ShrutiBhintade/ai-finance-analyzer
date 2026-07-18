export function getMonthlySummary(transactions: any[]) {
  if (!transactions.length) {
    return {
      topCategory: "N/A",
      largestExpense: null,
      totalTransactions: 0,
    };
  }

  const expenses = transactions.filter(
    (t) => t.type === "expense"
  );

  const categoryTotals: Record<string, number> = {};

  expenses.forEach((t) => {
    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) + Number(t.amount);
  });

  const topCategory =
    Object.entries(categoryTotals).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] || "N/A";

  const largestExpense =
    expenses.sort((a, b) => b.amount - a.amount)[0] || null;

  return {
    topCategory,
    largestExpense,
    totalTransactions: transactions.length,
  };
}