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
} from "recharts";

type Props = {
  data: { date: string; visits: number }[];
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length > 0) {
    const { visits } = payload[0].payload;
    return (
      <div className="bg-white p-2 rounded shadow text-sm border border-gray-200">
        <p className="text-gray-700 font-semibold">Date visited: {label}</p>
        <p className="text-gray-600">Visits: {visits}</p>
      </div>
    );
  }

  return null;
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
            <stop offset="50%" stopColor="pink" />
            <stop offset="100%" stopColor="purple" />
          </linearGradient>
          {/* Gradient for the area fill */}
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="purple" stopOpacity={0.4} />
            <stop offset="50%" stopColor="pink" stopOpacity={0.2} />
            <stop offset="100%" stopColor="pink" stopOpacity={0.1} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 3]} ticks={[0, 1, 2]} />
        <Tooltip content={<CustomTooltip />} />

        {/* Smooth curve */}
        <Area
          type="monotone"
          dataKey="visits"
          fill="url(#areaGradient)"
          fillOpacity={1}
          dot={{ fill: "#ff5722", r: 5 }}
          tooltipType="none"
        />
        <Line
          type="monotone"
          dataKey="visits"
          stroke="url(#lineGradient)"
          strokeWidth={2}
          dot={false}
          tooltipType="none"
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
