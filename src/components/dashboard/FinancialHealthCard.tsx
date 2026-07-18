import { TrendingUp, TrendingDown, Activity } from "lucide-react";

type Props = {
  score: number;
  status: string;
};

export default function FinancialHealthCard({
  score,
  status,
}: Props) {
  const getColor = () => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    if (score >= 40) return "text-orange-500";
    return "text-red-500";
  };

  const getIcon = () => {
    if (score >= 80)
      return <TrendingUp className="w-7 h-7 text-green-500" />;

    if (score >= 60)
      return <Activity className="w-7 h-7 text-yellow-500" />;

    return <TrendingDown className="w-7 h-7 text-red-500" />;
  };

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-lg transition-all">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm text-muted-foreground">
            Financial Health
          </p>

          <h2 className={`text-5xl font-bold mt-3 ${getColor()}`}>
            {score}
          </h2>

          <p className={`mt-2 font-semibold ${getColor()}`}>
            {status}
          </p>

        </div>

        <div>{getIcon()}</div>

      </div>

      <div className="mt-6">

        <div className="w-full h-3 rounded-full bg-muted overflow-hidden">

          <div
            className="h-full rounded-full bg-green-500 transition-all duration-700"
            style={{
              width: `${score}%`,
            }}
          />

        </div>

      </div>

      <p className="mt-5 text-sm text-muted-foreground">
        Your financial health score is calculated using your income,
        expenses and savings pattern.
      </p>

    </div>
  );
}