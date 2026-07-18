"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const data = [
  { month: "Jul", expense: 6100 },
  { month: "Aug", expense: 7010 },
  { month: "Sep", expense: 7400 },
  { month: "Oct", expense: 7800 },
  { month: "Nov", expense: 8200 },
  { month: "Dec", expense: 8600 },
];

export default function ForecastTrend() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>📈 6-Month Expense Forecast</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />

              <XAxis dataKey="month" />

              <YAxis
                tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
              />

              <Tooltip
                formatter={(value) => [
                  `₹${Number(value).toLocaleString("en-IN")}`,
                  "Predicted Expense",
                ]}
              />

              <Line
                type="monotone"
                dataKey="expense"
                stroke="#3b82f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}