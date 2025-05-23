"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

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
  { month: "January", dispatch: 175, fill: "var(--color-January)" },
  { month: "February", dispatch: 200, fill: "var(--color-February)" },
  { month: "March", dispatch: 187, fill: "var(--color-March)" },
  { month: "April", dispatch: 173, fill: "var(--color-April)" },
  { month: "May", dispatch: 190, fill: "var(--color-May)" },
];

const chartConfig = {
  dispatch: {
    label: "ordersDispatched",
  },
  January: {
    label: "Jan",
    color: "hsl(var(--chart-1))",
  },
  February: {
    label: "Feb",
    color: "hsl(var(--chart-2))",
  },
  March: {
    label: "Mar",
    color: "hsl(var(--chart-3))",
  },
  April: {
    label: "Apr",
    color: "hsl(var(--chart-4))",
  },
  May: {
    label: "May",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function BarChartMixed() {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>monthly-dispatch</CardTitle>
        <CardDescription>January - May 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="flex h-48 ">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 5,
            }}
          >
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={15}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="dispatch" type="number" />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="dispatch" layout="vertical" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
