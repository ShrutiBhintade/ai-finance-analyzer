import InsightsHeader from "@/components/insights/InsightsHeader";
import FinancialHealth from "@/components/insights/FinancialHealth";
import SpendingAnalysis from "@/components/insights/SpendingAnalysis";
import Recommendations from "@/components/insights/Recommendations";
export default function InsightsPage() {
  return (
    <main className="space-y-8 p-6">
      <InsightsHeader />
      <FinancialHealth />
      <SpendingAnalysis />
      <Recommendations />
    </main>
  );
}
