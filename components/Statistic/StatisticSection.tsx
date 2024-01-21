"use client";

import { useSuspenseQuery } from "@apollo/client";

import { Statistics } from "@/lib/interface";
import { SEE_STATISTICS_INFO } from "@/lib/query";

import WeeklyStatistic from "./WeeklyStatistic";
import GenderStatistic from "./GenderStatistic";
import { Suspense } from "react";
import Loader from "../Loader";

const StatisticSection = () => {
  const { data } = useSuspenseQuery<Statistics>(SEE_STATISTICS_INFO);

  return (
    <Suspense fallback={<Loader />}>
      <section className="flex p-8 h-[600px]">
        <WeeklyStatistic data={data} />

        <GenderStatistic data={data} />
      </section>
    </Suspense>
  );
};

export default StatisticSection;
