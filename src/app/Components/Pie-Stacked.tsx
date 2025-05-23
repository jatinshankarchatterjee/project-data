"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";

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
const desktopData = [
  { month: "april", desktop: 173, fill: "var(--color-april)" },
  { month: "may", desktop: 209, fill: "var(--color-may)" },
  { month: "june", desktop: 150, fill: "var(--color-june)" },
  { month: "july", desktop: 100, fill: "var(--color-july)" },
  { month: "august", desktop: 120, fill: "var(--color-august)" },
  { month: "september", desktop: 100, fill: "var(--color-september)" },
  { month: "october", desktop: 50, fill: "var(--color-october)" },
  { month: "november", desktop: 50, fill: "var(--color-november)" },
  { month: "december", desktop: 50, fill: "var(--color-december)" },
  { month: "january", desktop: 186, fill: "var(--color-january)" },
  { month: "february", desktop: 305, fill: "var(--color-february)" },
  { month: "march", desktop: 237, fill: "var(--color-march)" },
];

const mobileData = [
  { month: "april", mobile: 190, fill: "var(--color-april)" },
  { month: "may", mobile: 130, fill: "var(--color-may)" },
  { month: "june", mobile: 150, fill: "var(--color-june)" },
  { month: "july", mobile: 100, fill: "var(--color-july)" },
  { month: "august", mobile: 120, fill: "var(--color-august)" },
  { month: "september", mobile: 100, fill: "var(--color-september)" },
  { month: "october", mobile: 50, fill: "var(--color-october)" },
  { month: "november", mobile: 50, fill: "var(--color-november)" },
  { month: "december", mobile: 50, fill: "var(--color-december)" },
  { month: "january", mobile: 80, fill: "var(--color-january)" },
  { month: "february", mobile: 200, fill: "var(--color-february)" },
  { month: "march", mobile: 120, fill: "var(--color-march)" },
];

const chartConfig = {
  sales: {
    label: "sales",
  },
  desktop: {
    label: "online",
  },
  mobile: {
    label: "offline",
  },
  january: {
    label: "January",
    color: "hsl(var(--chart-1))",
  },
  february: {
    label: "February",
    color: "hsl(var(--chart-2))",
  },
  march: {
    label: "March",
    color: "hsl(var(--chart-3))",
  },
  april: {
    label: "April",
    color: "hsl(var(--chart-4))",
  },
  may: {
    label: "May",
    color: "hsl(var(--chart-5))",
  },
  june: {
    label: "June",
    color: "hsl(var(--chart-6))",
  },
  july: {
    label: "July",
    color: "hsl(var(--chart-7))",
  },
  august: {
    label: "August",
    color: "hsl(var(--chart-8))",
  },
  september: {
    label: "September",
    color: "hsl(var(--chart-9))",
  },
  october: {
    label: "October",
    color: "hsl(var(--chart-10))",
  },
  november: {
    label: "November",
    color: "hsl(var(--chart-11))",
  },
  december: {
    label: "December",
    color: "hsl(var(--chart-12))",
  },
} satisfies ChartConfig;

export function PieStacked() {
  return (
    <Card className="flex flex-col border-none">
      <CardHeader className="items-center pb-0 mb-4">
        <CardTitle>Sales Spread</CardTitle>
        <CardDescription>april 2023 - march 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className=" mx-0 my-auto aspect-square h-60"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelKey="sales"
                  nameKey="month"
                  indicator="line"
                  labelFormatter={(_, payload) => {
                    return chartConfig[
                      payload?.[0].dataKey as keyof typeof chartConfig
                    ].label;
                  }}
                />
              }
            />
            <Pie data={desktopData} dataKey="desktop" outerRadius={60} />
            <Pie
              data={mobileData}
              dataKey="mobile"
              innerRadius={70}
              outerRadius={90}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
