"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import CashFlowChart from "@/components/dashboard/CashFlowChart";
import SpendingChart from "@/components/dashboard/SpendingChart";
import AIInsights from "@/components/dashboard/AIInsights";
import FraudAlerts from "@/components/dashboard/FraudAlerts";
import BudgetAnalysis from "@/components/dashboard/BudgetAnalysis";
import ExpenseForecast from "@/components/dashboard/ExpenseForecast";
import SmartSavings from "@/components/dashboard/SmartSavings";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import FinancialHealthCard from "@/components/dashboard/FinancialHealthCard";
import MonthlySummaryCard from "@/components/dashboard/MonthlySummaryCard";
import { getMonthlySummary } from "@/lib/monthlySummary"; 
import { calculateFinancialHealth } from "@/lib/financialHealth";
import { useTransactions } from "@/context/TransactionsContext";
import FinancialReport from "@/components/dashboard/FinancialReport";
import FinanceAssistant from "@/components/dashboard/FinanceAssistant";
export default function DashboardPage() {
  const router = useRouter();
  const { transactions } = useTransactions();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
      }
    };

    checkUser();
  }, [router]);

  // ====================================================
  // Summary Statistics
  // ====================================================

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = income - expenses;

  // Estimated savings
  const savings = balance * 0.2;

  const totalTransactions = transactions.length;

  const { score, status } = calculateFinancialHealth(
    income,
    expenses,
    savings
  );

  // ====================================================
  // Cash Flow Chart
  // ====================================================

  const monthlyMap = new Map<
    string,
    {
      month: string;
      income: number;
      expense: number;
    }
  >();

  transactions.forEach((transaction) => {
    const month = new Date(transaction.date).toLocaleString("default", {
      month: "short",
    });

    if (!monthlyMap.has(month)) {
      monthlyMap.set(month, {
        month,
        income: 0,
        expense: 0,
      });
    }

    const current = monthlyMap.get(month)!;

    if (transaction.type === "income") {
      current.income += Number(transaction.amount);
    } else {
      current.expense += Number(transaction.amount);
    }
  });

  const cashFlowData = Array.from(monthlyMap.values());

  // ====================================================
  // Category Spending
  // ====================================================

  const categorySpending = Object.values(
    transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, transaction) => {
        if (!acc[transaction.category]) {
          acc[transaction.category] = {
            category: transaction.category,
            amount: 0,
          };
        }

        acc[transaction.category].amount += Number(transaction.amount);

        return acc;
      }, {} as Record<string, { category: string; amount: number }>)
  );
const {
  topCategory,
  largestExpense,
  totalTransactions: monthlyTransactionCount,
} = getMonthlySummary(transactions);
  return (
    <main className="space-y-8 p-6">

      <DashboardHeader />

      {/* ================= Summary Cards ================= */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

        <StatCard
          title="Income"
          value={`₹${income.toLocaleString()}`}
        />

        <StatCard
          title="Expenses"
          value={`₹${expenses.toLocaleString()}`}
      
        />

        <StatCard
          title="Balance"
          value={`₹${balance.toLocaleString()}`}
        
        />

        <StatCard
          title="Savings"
          value={`₹${savings.toLocaleString()}`}
    
        />

        <StatCard
          title="Transactions"
          value={totalTransactions}
          
        />

      </section>

      {/* ================= Cash Flow + Health ================= */}

      <section className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <CashFlowChart data={cashFlowData} />
        </div>

        <FinancialHealthCard
          score={score}
          status={status}
        />

      </section>

      {/* ================= Spending ================= */}

      <section className="grid gap-6 lg:grid-cols-3">

  <div className="lg:col-span-2">
    <SpendingChart data={categorySpending} />
  </div>

  <MonthlySummaryCard
    topCategory={topCategory}
    totalTransactions={monthlyTransactionCount}
    largestExpense={largestExpense}
  />

</section>

      {/* ================= AI Insights ================= */}

      <section>
        <AIInsights
          income={income}
          expenses={expenses}
          balance={balance}
          savings={savings}
          transactions={transactions}
        />
      </section>
<section>
  <FinancialReport />
</section>

<section>
  <FinanceAssistant />
</section>

      {/* ================= Fraud Detection ================= */}

      <section>
        <FraudAlerts transactions={transactions} />
      </section>

      {/* ================= Budget Analysis ================= */}

      <section>
        <BudgetAnalysis transactions={transactions} />
      </section>

      {/* ================= Forecast ================= */}

      <section>
        <ExpenseForecast currentExpense={expenses} />
      </section>

      {/* ================= Smart Savings ================= */}

      <section>
        <SmartSavings transactions={transactions} />
      </section>

      {/* ================= Recent Transactions ================= */}

      <section>
        <RecentTransactions />
      </section>

    </main>
  );
}