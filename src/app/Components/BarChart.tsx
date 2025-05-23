"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { date: "2024-07-15", dailySales: 450, expenses: 110 },
  { date: "2024-07-16", dailySales: 380, expenses: 80 },
  { date: "2024-07-17", dailySales: 520, expenses: 120 },
  { date: "2024-07-18", dailySales: 140, expenses: 50 },
  { date: "2024-07-19", dailySales: 600, expenses: 150 },
  { date: "2024-07-20", dailySales: 480, expenses: 100 },
];

const chartConfig = {
  running: {
    label: "dailySales",
    color: "hsl(var(--chart-1))",
  },
  swimming: {
    label: "expenses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function BarChartDual() {
  return (
    <Card className="flex-1 h-full ">
      <CardHeader>
        <CardTitle>sales-expenses</CardTitle>
        <CardDescription>2024-07-15 - 2024-07-20</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                });
              }}
            />
            <Bar
              dataKey="dailySales"
              stackId="a"
              fill="var(--color-dailySales)"
              radius={[4, 0, 4, 4]}
            />
            <Bar
              dataKey="expenses"
              stackId="a"
              fill="var(--color-expenses)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
