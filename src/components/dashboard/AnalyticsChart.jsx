import GlassCard from "../ui/GlassCard";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", score: 48 },
  { day: "Tue", score: 56 },
  { day: "Wed", score: 62 },
  { day: "Thu", score: 59 },
  { day: "Fri", score: 72 },
  { day: "Sat", score: 81 },
  { day: "Sun", score: 88 },
];

export default function AnalyticsChart() {
  return (
    <GlassCard className="mt-8">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Productivity Analytics
          </h2>

          <p className="text-slate-400 mt-1">
            Your Momentum Score over the last 7 days
          </p>
        </div>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.08)"
            />

            <XAxis
              dataKey="day"
              stroke="#94A3B8"
            />

            <YAxis
              stroke="#94A3B8"
            />

            <Tooltip
              contentStyle={{
                background: "#1E1B4B",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "14px",
                color: "white",
              }}
            />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#8B5CF6"
              strokeWidth={4}
              dot={{
                fill: "#3B82F6",
                r: 6,
              }}
              activeDot={{
                r: 9,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </GlassCard>
  );
}