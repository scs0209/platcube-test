import { Statistics } from "@/lib/interface";
import React from "react";
import { LineChart, ResponsiveContainer, XAxis, Tooltip, Line } from "recharts";

interface Props {
  data: Statistics;
}

const WeeklyStatistic = ({ data }: Props) => {
  const weeklyData = data.seeStatistics.byWeekNumberCount.map((item) => ({
    week: item.weekNumber,
    count: item.count,
  }));

  return (
    <div className="w-[1331px]">
      <h1 className="text-[24px] font-bold mb-[30px]">통계</h1>
      <h3 className="text-[16px]">2023년도 예약 환자 추이</h3>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={weeklyData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="week"
            tickFormatter={(tickItem) => `${tickItem}주차`}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#2D8CFF"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyStatistic;
