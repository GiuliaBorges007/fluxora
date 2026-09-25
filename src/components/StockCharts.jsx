"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  materiais: {
    label: "Materiais",
  },
};

export default function StockCharts({
  categoryData,
  statusData,
}) {
  return (
    <section className="mt-6 grid gap-6 lg:grid-cols-2">
      <Card className="border-slate-800 bg-slate-900/70">
        <CardHeader>
          <CardTitle className="text-white">
            Materiais por categoria
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="h-[300px] w-full"
          >
            <BarChart data={categoryData}>
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="category"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#94a3b8" }}
              />

              <ChartTooltip
                content={<ChartTooltipContent />}
              />

              <Bar
                dataKey="materiais"
                fill="#38bdf8"
                radius={6}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="border-slate-800 bg-slate-900/70">
        <CardHeader>
          <CardTitle className="text-white">
            Distribuição do estoque
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="h-[300px] w-full"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent />}
              />

              <Pie
                data={statusData}
                dataKey="value"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {statusData.map((entry) => (
                  <Cell
                    key={entry.status}
                    fill={entry.fill}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </section>
  );
}