import { timePeriods } from "@/components/Schedule/ScheduleTable";
import { Schedule, TimePeriod } from "./interface";

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getPreviousDate = (date: Date): Date => {
  let previousDate = new Date(date);
  previousDate.setDate(previousDate.getDate() - 1);
  return previousDate;
};

export const getNextDate = (date: Date): Date => {
  let nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);
  return nextDate;
};

// Schedule Util Func
const createPeriod = (
  start: number,
  end: number,
  bgColor: string,
  text: string
): TimePeriod => {
  return { start, end, bgColor, text };
};

const isLunchBreak = (hour: number, schedule: Schedule): boolean => {
  return (
    schedule.lunchBreak &&
    hour >= schedule.lbStartHour &&
    hour < schedule.lbEndHour
  );
};

const isOffDay = (hour: number, schedule: Schedule): boolean => {
  if (!schedule.isOffDay) {
    return false;
  }

  const offStart = schedule.offStartMin || schedule.startHour;
  const offEnd = schedule.offEndMin || schedule.endHour;

  return hour >= offStart && hour < offEnd;
};

const isOutsideOperationHours = (hour: number, schedule: Schedule): boolean => {
  return hour < schedule.startHour || hour >= schedule.endHour;
};

const createPeriodForOffDay = (
  hour: number,
  schedule: Schedule
): TimePeriod => {
  const offStart = schedule.offStartMin || schedule.startHour;
  const offEnd = schedule.offEndMin || schedule.endHour;
  const text = hour === offStart ? "휴진" : "";
  return createPeriod(offStart, offEnd, "bg-[#FDF0E9]", text);
};

export const getPeriod = (hour: number, schedule: Schedule): TimePeriod => {
  const isAfternoon = schedule.lunchBreak
    ? hour >= schedule.lbEndHour
    : hour >= 12;
  const periodText = isAfternoon ? "오후" : "오전";

  if (isOffDay(hour, schedule)) {
    return createPeriodForOffDay(hour, schedule);
  }
  if (isLunchBreak(hour, schedule)) {
    return createPeriod(
      schedule.lbStartHour,
      schedule.lbEndHour,
      "bg-[#FFF6E8]",
      "점심"
    );
  }
  if (isOutsideOperationHours(hour, schedule)) {
    return createPeriod(0, 0, "", "");
  }
  return timePeriods.find((period) => period.text === periodText) as TimePeriod;
};

export const getText = (hour: number, schedule: Schedule): string => {
  const period = getPeriod(hour, schedule);

  if (
    isOffDay(hour, schedule) &&
    hour === (schedule.offStartMin || schedule.startHour)
  ) {
    return period.text;
  }
  if (
    hour === schedule.startHour ||
    hour === schedule.lbStartHour ||
    hour === schedule.lbEndHour ||
    (!schedule.lunchBreak && hour === 12)
  ) {
    return period.text;
  }
  return "";
};
