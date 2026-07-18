import ForecastHeader from "@/components/forecast/ForecastHeader";
import ForecastSummary from "@/components/forecast/ForecastSummary";
import ExpensePrediction from "@/components/forecast/ExpensePrediction";
import ForecastTrend from "@/components/forecast/ForecastTrend";
import ForecastRecommendations from "@/components/forecast/ForecastRecommendations";
export default function ForecastPage() {
  return (
    <main className="space-y-8 p-6">
      <ForecastHeader />

      <ForecastSummary />

      <ExpensePrediction />

      <ForecastTrend />
      <ForecastRecommendations />
    </main>
  );
}