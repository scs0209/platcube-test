import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

import { Statistics } from "@/lib/interface";

interface Props {
  data: Statistics;
}

const COLORS = ["#2D8CFF", "#EB6927"];

const GenderStatistic = ({ data }: Props) => {
  const genderData = [
    { name: "남", value: data.seeStatistics.manCount },
    { name: "여", value: data.seeStatistics.womanCount },
  ];

  const total = data.seeStatistics.manCount + data.seeStatistics.womanCount;

  const renderLegend = (value: string, entry: any, i: number) => {
    const percentage = ((entry.payload.value / total) * 100).toFixed(0);
    return `${value} ${percentage}%`;
  };

  return (
    <div className="w-[473px]">
      <h3 className="text-[16px]">2023년도 예약자 성비</h3>
      <ResponsiveContainer>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={genderData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
          >
            {genderData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            formatter={renderLegend}
            align="right"
            layout="vertical"
            verticalAlign="middle"
            className="font-normal"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenderStatistic;
