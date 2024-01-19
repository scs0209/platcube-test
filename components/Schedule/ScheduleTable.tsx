import { ScheduleData, TimePeriod } from "@/lib/interface";
import { formatDate, getPeriod, getText } from "@/lib/utils";

interface Props {
  selectedDate: Date;
  data: ScheduleData;
}

export const timePeriods: TimePeriod[] = [
  { start: 0, end: 12, bgColor: "bg-blue-200", text: "오전" },
  { start: 12, end: 24, bgColor: "bg-blue-200", text: "오후" },
];

const ScheduleTable = ({ selectedDate, data }: Props) => {
  return (
    <table className="border-collapse border-[1px] border-[#EFEFEF] w-full">
      <thead>
        <tr>
          <th className="border-[1px] border-[#EFEFEF]">
            {formatDate(selectedDate)}
          </th>
          {Array.from({ length: 24 }, (_, i) => (
            <th key={i} className="border-[1px] border-[#EFEFEF]">{`${i
              .toString()
              .padStart(2, "0")}`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.seeSchedule.map((schedule, index) => (
          <tr key={index}>
            <td className="flex flex-col border-[1px] border-[#EFEFEF]">
              {schedule.roomName}
              <span>{`${schedule.drName} ${schedule.drRank}`}</span>
            </td>
            {Array.from({ length: 24 }, (_, i) => {
              const period = getPeriod(i, schedule);
              return (
                <td
                  key={i}
                  className={`border-[1px] border-[#EFEFEF] ${period.bgColor}`}
                >
                  {getText(i, schedule)}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleTable;
