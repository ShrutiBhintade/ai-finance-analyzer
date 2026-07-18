import { TransactionsProvider } from "@/context/TransactionsContext";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function DashboardRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <TransactionsProvider>
    <DashboardLayout>{children}</DashboardLayout>
  </TransactionsProvider>
);
}