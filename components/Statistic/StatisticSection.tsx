"use client";

import { useSuspenseQuery } from "@apollo/client";

import { Statistics } from "@/lib/interface";
import { SEE_STATISTICS_INFO } from "@/lib/query";

import WeeklyStatistic from "./WeeklyStatistic";
import GenderStatistic from "./GenderStatistic";

const StatisticSection = () => {
  const { data, error } = useSuspenseQuery<Statistics>(SEE_STATISTICS_INFO);

  return (
    <section className="flex p-8 h-[600px]">
      <WeeklyStatistic data={data} />

      <GenderStatistic data={data} />
    </section>
  );
};

export default StatisticSection;
