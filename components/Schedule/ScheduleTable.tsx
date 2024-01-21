import { ScheduleData, TimePeriod } from "@/lib/interface";
import { formatDate } from "@/lib/utils/dateUtils";
import { getPeriod, getText } from "@/lib/utils/scheduleUtils";

interface Props {
  selectedDate: Date;
  data: ScheduleData;
}

export const timePeriods: TimePeriod[] = [
  { start: 0, end: 12, bgColor: "#E9F3FF", text: "오전" },
  { start: 12, end: 24, bgColor: "#E9F3FF", text: "오후" },
];

const ScheduleTable = ({ selectedDate, data }: Props) => {
  console.log(data);
  return (
    <table className="border-collapse border-l-0 border-[1px] border-[#EFEFEF] w-full">
      <thead>
        <tr>
          <th className="border-l-0 border-[1px] border-[#EFEFEF] h-[39px] font-bold">
            {formatDate(selectedDate)}
          </th>
          {Array.from({ length: 25 }, (_, i) => (
            <th
              key={i}
              className="border-[1px] border-[#EFEFEF] font-normal"
            >{`${i.toString().padStart(2, "0")}`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.seeSchedule.map((schedule, index) => (
          <tr key={index}>
            <td className="flex flex-col border-b-[1px] border-[#EFEFEF] w-[238px] h-[91px] p-5">
              <span className="font-bold">{schedule.roomName}</span>
              <span className="mt-[6px]">
                {`${schedule.drName} ${schedule.drRank} ${
                  schedule.subDrUsed ? " (대체)" : ""
                }`}{" "}
              </span>
            </td>
            {Array.from({ length: 25 }, (_, i) => {
              const period = getPeriod(i, schedule);
              return (
                <td
                  key={i}
                  style={{ backgroundColor: period.bgColor }}
                  className={`border-[1px] p-3 border-[#EFEFEF] w-[62px] h-[86px] ${period.bgColor}`}
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
