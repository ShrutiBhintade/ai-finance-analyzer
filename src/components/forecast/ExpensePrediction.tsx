import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExpensePrediction() {
  const currentExpense = 6098;
  const predictedExpense = 7013;
  const growth = (
    ((predictedExpense - currentExpense) / currentExpense) *
    100
  ).toFixed(1);

  return (
    <Card>
      <CardHeader>
        <CardTitle>📈 Expense Prediction</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-muted-foreground text-sm">
              Current Month
            </p>

            <h2 className="text-3xl font-bold">
              ₹{currentExpense.toLocaleString()}
            </h2>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">
              Predicted Next Month
            </p>

            <h2 className="text-3xl font-bold text-orange-500">
              ₹{predictedExpense.toLocaleString()}
            </h2>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <p className="font-medium">
            Expected Increase
          </p>

          <p className="text-xl font-bold text-orange-500">
            +{growth}%
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Based on your recent spending behaviour, your expenses are likely to
            increase next month. Try reducing discretionary spending to improve
            your savings.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}