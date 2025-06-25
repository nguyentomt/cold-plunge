"use client";

import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
} from "recharts";

type Props = {
  data: { date: string; visits: number }[];
};

export default function ColdPlungeChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        data={data}
        margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
      >
        {/* Define SVG gradient */}
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="blue" />
            <stop offset="50%" stopColor="orange" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
          {/* Gradient for the area fill */}
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="blue" stopOpacity={0.4} />
            <stop offset="50%" stopColor="orange" stopOpacity={0.2} />
            <stop offset="100%" stopColor="red" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 3]} ticks={[0, 1, 2]} />
        <Tooltip />

        {/* Smooth curve */}
        <Area
          type="monotone"
          dataKey="visits"
          fill="url(#areaGradient)"
          fillOpacity={1}
          dot={{ fill: "#ff5722", r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="visits"
          stroke="url(#lineGradient)"
          strokeWidth={2}
          dot={false}
        />
        

        {/* Dots for individual data points */}
        <Scatter
          data={data}
          fill="#ff5722"
          shape="circle"
          name="Visits"
          line={false}
          xAxisId={0}
          yAxisId={0}
          dataKey="visits"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
