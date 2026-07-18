"use client";

import {
  PieChart,
  Pie,
  Cell,
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

export interface SpendingDataPoint {
  category: string;
  amount: number;
}

interface SpendingChartProps {
  data: SpendingDataPoint[];
}

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#f97316",
  "#84cc16",
];

export default function SpendingChart({
  data,
}: SpendingChartProps) {
  const total = data.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Spending Categories</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={105}
                paddingAngle={3}
                label={({ category, percent }) =>
                  `${category} ${((percent ?? 0) * 100).toFixed(1)}%`
                }
              >
                {data.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value: number) => [
                  `₹${Number(value).toLocaleString()}`,
                  "Amount",
                ]}
              />

              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}