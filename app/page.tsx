import Header from "@/components/Header";
import NoticeSection from "@/components/Notice/NoticeSection";
import ScheduleSection from "@/components/Schedule/ScheduleSection";
import StatisticSection from "@/components/Statistic/StatisticSection";

export default function HomePage() {
  return (
    <section className="absolute left-[76px] w-[1844px] h-full overflow-y-auto">
      <Header />
      <NoticeSection />
      <ScheduleSection />
      <StatisticSection />
    </section>
  );
}
