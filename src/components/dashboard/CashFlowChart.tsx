"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export interface CashFlowDataPoint {
  month: string;
  income: number;
  expense: number;
}

interface CashFlowChartProps {
  data: CashFlowDataPoint[];
}

export default function CashFlowChart({
  data,
}: CashFlowChartProps) {
  const formattedData = data.map((item) => ({
    ...item,
    income: Number(item.income.toFixed(2)),
    expense: Number(item.expense.toFixed(2)),
  }));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Monthly Cash Flow</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={formattedData}
              margin={{
                top: 10,
                right: 20,
                left: 10,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />

              <XAxis
                dataKey="month"
                tick={{ fontSize: 12 }}
                tickLine={false}
              />

              <YAxis
                tickFormatter={(value) =>
                  `₹${(Number(value) / 1000).toFixed(0)}k`
                }
                tickLine={false}
                axisLine={false}
              />

              <Tooltip
                formatter={(value: number, name) => [
                  `₹${Number(value).toLocaleString()}`,
                  name === "income" ? "Income" : "Expense",
                ]}
              />

              <Legend />

              <Line
                type="monotone"
                dataKey="income"
                name="Income"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

              <Line
                type="monotone"
                dataKey="expense"
                name="Expense"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}