"use client";

import { Suspense, useState } from "react";

import { useSuspenseQuery } from "@apollo/client";

import { ScheduleData } from "@/lib/interface";
import { SEE_SCHEDULE } from "@/lib/query";
import {
  formatDate,
  getNextDate,
  getPreviousDate,
} from "@/lib/utils/dateUtils";

import ScheduleTable from "./ScheduleTable";
import Loader from "../Loader";
import ArrowButton from "./ArrowButton";

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
          <ArrowButton direction="prev" onClick={handlePrevDay} />
          <ArrowButton direction="next" onClick={handleNextDay} />
        </div>
        <ScheduleTable selectedDate={selectedDate} data={data} />
      </section>
    </Suspense>
  );
};

export default ScheduleSection;
