import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Text,
  Dot,
  AreaChart,
  Area
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const CustomDot = (props: any) => {
  const { cx, cy } = props;
  return (
    <>
      <circle
        cx={cx - 0}
        cy={cy - 0}
        r={8}
        stroke="black"
        strokeWidth={2.5}
        fill="white"
      />
      <circle
        cx={cx}
        cy={cy}
        r={3.5}
        // stroke="black"
        // strokeWidth={4}
        fill="black"
      />
    </>
  );
};

const CustomChart = (props: any) => {
  return (
    <AreaChart {...props}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#129a74" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#129a74" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area fillOpacity={1} fill="url(#colorUv)" {...props} />
    </AreaChart>
  );
};

const CustomTooltip = (props: any) => {
  const { active, payload, label } = props;
  if (active && payload) {
    console.log(payload);
    return (
      <div style={{ border: "1px solid black", backgroundColor: "white" }}>
        <div>
          {label} {payload[0].value}
        </div>
      </div>
    );
  }

  return null;
};

export default function App() {
  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis strokeWidth={0} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <defs>
          <filter id="shadow" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" />
          </filter>
        </defs>
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          strokeWidth={2}
          // activeDot={{ r: 8 }}
          // activeDot={<Dot r={8} />}
          activeDot={CustomDot}
          filter="url(#shadow)"
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
          activeDot={CustomDot}
        />
      </LineChart>
    </div>
  );
}
