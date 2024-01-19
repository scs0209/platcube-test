import Header from "@/components/Header";
import NoticeSection from "@/components/Notice/NoticeSection";
import { getClient } from "@/lib/client";
import {
  SEE_HOSPITAL_NOTICE_INFO,
  SEE_SCHEDULE,
  SEE_STATISTICS_INFO,
} from "@/lib/query";

export default async function HomePage() {
  const { data, error } = await getClient().query({
    query: SEE_HOSPITAL_NOTICE_INFO,
    variables: { take: 10, cursor: 0 },
  });
  const { data: scheduleData } = await getClient().query({
    query: SEE_SCHEDULE,
    variables: { searchDate: "2022-01-01" },
  });
  const { data: staticsInfo } = await getClient().query({
    query: SEE_STATISTICS_INFO,
  });

  console.log(JSON.stringify(data, null, 2));

  return (
    <section className="absolute left-[76px] w-[1844px]">
      <Header />
      <NoticeSection />
    </section>
  );
}
