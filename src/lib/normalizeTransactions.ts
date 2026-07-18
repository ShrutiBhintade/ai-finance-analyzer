export type NormalizedTransaction = {
  id: string;
  date: string;
  description: string;
  category: string;
  type: "income" | "expense";
  amount: number;
};

export function normalizeTransactions(data: any[]): NormalizedTransaction[] {
  return data.map((row, index) => {
    const amount = Number(
      String(row.Amount)
        .replace(/₹/g, "")
        .replace(/,/g, "")
        .trim()
    );

    return {
      id: crypto.randomUUID(), // or String(index)
      date: row.Date,
      description: row.Description,
      category: row.Category,
      type:
        row.Type?.toLowerCase() === "income"
          ? "income"
          : "expense",
      amount,
    };
  });
}