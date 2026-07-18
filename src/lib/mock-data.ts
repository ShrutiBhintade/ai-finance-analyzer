// Dashboard Statistics
export const dashboardStats = [
  {
    title: "Income",
    value: "₹85,400",
    change: "+12.5%",
    positive: true,
  },
  {
    title: "Expenses",
    value: "₹42,300",
    change: "-4.2%",
    positive: false,
  },
  {
    title: "Balance",
    value: "₹1,28,900",
    change: "+8.7%",
    positive: true,
  },
  {
    title: "Savings",
    value: "₹33,100",
    change: "+18.6%",
    positive: true,
  },
];

// Monthly Cash Flow
export const monthlyCashFlow = [
  { month: "Jan", income: 70000, expense: 40000 },
  { month: "Feb", income: 76000, expense: 42000 },
  { month: "Mar", income: 80000, expense: 45000 },
  { month: "Apr", income: 82000, expense: 47000 },
  { month: "May", income: 85000, expense: 43000 },
  { month: "Jun", income: 90000, expense: 48000 },
];

// Spending Categories
export const spendingCategories = [
  { category: "Food", amount: 12500 },
  { category: "Shopping", amount: 9800 },
  { category: "Transport", amount: 6200 },
  { category: "Bills", amount: 8500 },
  { category: "Entertainment", amount: 5600 },
  { category: "Others", amount: 3700 },
];

// Recent Transactions
export const recentTransactions = [
  {
    id: "1",
    description: "Amazon Purchase",
    category: "Shopping",
    amount: 2499,
    date: "2026-07-13",
    type: "expense" as const,
  },
  {
    id: "2",
    description: "Monthly Salary",
    category: "Income",
    amount: 85000,
    date: "2026-07-12",
    type: "income" as const,
  },
  {
    id: "3",
    description: "Netflix Subscription",
    category: "Entertainment",
    amount: 649,
    date: "2026-07-11",
    type: "expense" as const,
  },
  {
    id: "4",
    description: "Electricity Bill",
    category: "Utilities",
    amount: 1850,
    date: "2026-07-10",
    type: "expense" as const,
  },
];

// AI Insights
export const aiInsights = [
  {
    id: "1",
    title: "Excellent Savings Growth",
    description:
      "Your savings increased by 18% compared to last month. Keep up the great work!",
    type: "success" as const,
  },
  {
    id: "2",
    title: "Shopping Expenses Increased",
    description:
      "Shopping expenses are 12% higher than your monthly average. Consider setting a spending limit.",
    type: "warning" as const,
  },
  {
    id: "3",
    title: "Smart Recommendation",
    description:
      "Reducing entertainment expenses by 10% could save approximately ₹600 every month.",
    type: "info" as const,
  },
];