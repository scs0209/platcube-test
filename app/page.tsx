import Header from "@/components/Header";
import NoticeSection from "@/components/Notice/NoticeSection";
import ScheduleChart from "@/components/Schedule/ScheduleChart";
import ScheduleSection from "@/components/Schedule/ScheduleSection";
import TimeLineChart from "@/components/Schedule/TimeLineChart";
import StatisticSection from "@/components/Statistic/StatisticSection";

export default function HomePage() {
  return (
    <section className="absolute left-[76px] w-[1844px] h-full overflow-y-auto">
      <Header />
      <NoticeSection />
      <ScheduleSection />
      {/* <ScheduleChart /> */}
      <TimeLineChart />
      {/* <StatisticSection /> */}
    </section>
  );
}
