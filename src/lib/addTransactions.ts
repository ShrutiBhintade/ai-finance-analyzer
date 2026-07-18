import { supabase } from "./supabase";

export async function addTransaction(transaction: {
  date: string;
  description: string;
  category: string;
  type: "income" | "expense";
  amount: number;
}) {
  const { data, error } = await supabase
    .from("transactions")
    .insert([
      {
        date: transaction.date,
        description: transaction.description,
        category: transaction.category,
        type: transaction.type,
        amount: transaction.amount,
      },
    ]);

  if (error) {
    console.error(error);
  }

  return data;
}