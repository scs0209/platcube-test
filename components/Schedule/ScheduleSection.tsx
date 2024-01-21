"use client";

import { Suspense, useState } from "react";

import { useSuspenseQuery } from "@apollo/client";

import { ScheduleData } from "@/lib/interface";
import { SEE_SCHEDULE } from "@/lib/query";
import { formatDate, getNextDate, getPreviousDate } from "@/lib/utils";
import ScheduleTable from "./ScheduleTable";
import Loader from "../Loader";

const ScheduleSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { data } = useSuspenseQuery<ScheduleData>(SEE_SCHEDULE, {
    variables: { searchDate: formatDate(selectedDate) },
  });

  const handlePrevDay = () => {
    setSelectedDate((prevDate) => getPreviousDate(prevDate));
  };

  const handleNextDay = () => {
    setSelectedDate((prevDate) => getNextDate(prevDate));
  };

  return (
    <Suspense fallback={<Loader />}>
      <section className="p-10 w-[1764px]">
        <div className="flex items-center gap-2">
          <h1 className="text-[24px] font-bold">운영 스케줄</h1>
          <button
            onClick={handlePrevDay}
            className="w-[20px] h-[20px] border-[1px] border-[#EFEFEF] rounded-md"
          >
            {"<"}
          </button>
          <button
            onClick={handleNextDay}
            className="w-[20px] h-[20px] border-[1px] border-[#EFEFEF] rounded-md"
          >
            {">"}
          </button>
        </div>
        <ScheduleTable selectedDate={selectedDate} data={data} />
      </section>
    </Suspense>
  );
};

export default ScheduleSection;
