"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { supabase } from "@/lib/supabase";

export type Transaction = {
  id?: string;
  user_id?: string;

  date: string;
  description: string;
  category: string;
  type: "income" | "expense";
  amount: number;
};

type TransactionContextType = {
  transactions: Transaction[];
  loading: boolean;

  fetchTransactions: () => Promise<void>;

  addTransaction: (
    transaction: Omit<Transaction, "id" | "user_id">
  ) => Promise<void>;
};

const TransactionsContext = createContext<
  TransactionContextType | undefined
>(undefined);

export function TransactionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchTransactions() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setTransactions([]);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("transactions")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false });

    if (!error && data) {
      setTransactions(data);
    }

    setLoading(false);
  }

  async function addTransaction(
    transaction: Omit<Transaction, "id" | "user_id">
  ) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { error } = await supabase.from("transactions").insert({
      ...transaction,
      user_id: user.id,
    });

    if (!error) {
      fetchTransactions();
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        loading,
        fetchTransactions,
        addTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  if (!context) {
    throw new Error(
      "useTransactions must be used inside TransactionsProvider"
    );
  }

  return context;
}