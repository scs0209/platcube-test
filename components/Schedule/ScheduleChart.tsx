"use client";

const ScheduleChart = () => {
  const hours = Array.from({ length: 25 }, (_, i) =>
    i === 0 ? "" : String(i - 1).padStart(2, "0")
  );

  const data = [
    { room: "진료방1", startHour: 1, endHour: 9 },
    { room: "진료방1", startHour: 10, endHour: 12 },
    { room: "진료방1", startHour: 13, endHour: 17 },
    { room: "진료방1", startHour: 18, endHour: 24 },
  ]; //... 다른 방에 대한 데이터도 이어서 작성  ];

  return (
    <table className="w-full table-fixed border-collapse">
      <thead>
        <tr>
          <th className="border px-2 py-1">진료방</th>
          {hours.map((hour, index) => (
            <th key={index} className="border px-2 py-1">
              {hour}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index} style={{ position: "relative", height: "50px" }}>
            <td className="border px-2 py-1">{entry.room}</td>
            {hours.map((_, i) => (
              <td key={i} className="border px-2 py-1"></td>
            ))}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: `${entry.startHour * 4}%`,
                width: `${(entry.endHour - entry.startHour) * 4}%`,
                height: "20px",
                backgroundColor: "purple",
                borderRadius: "4px",
              }}
            ></div>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleChart;
