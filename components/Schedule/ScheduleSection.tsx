"use client";

import { ScheduleData } from "@/lib/interface";
import { SEE_SCHEDULE } from "@/lib/query";
import { formatDate, getNextDate, getPreviousDate } from "@/lib/utils";
import { useSuspenseQuery } from "@apollo/client";
import { useState } from "react";

const ScheduleSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { data } = useSuspenseQuery<ScheduleData>(SEE_SCHEDULE, {
    variables: { searchDate: formatDate(selectedDate) },
  });

  console.log(data, formatDate(selectedDate));

  const handlePrevDay = () => {
    setSelectedDate((prevDate) => getPreviousDate(prevDate));
  };

  const handleNextDay = () => {
    setSelectedDate((prevDate) => getNextDate(prevDate));
  };

  return (
    <div>
      <h1>ScheduleSection</h1>
      <button onClick={handlePrevDay}>{"<"}</button>
      <span>{formatDate(selectedDate)}</span>
      <button onClick={handleNextDay}>{">"}</button>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            {data?.seeSchedule.map((schedule, index) => (
              <th key={index}>{schedule.roomName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 24 }, (_, i) => (
            <tr key={i}>
              <td>{`${i}:00`}</td>
              {data?.seeSchedule.map((schedule, index) => (
                <td key={index}>
                  {i >= schedule.startHour && i < schedule.endHour
                    ? "운영 중"
                    : "운영 종료"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleSection;
