"use client";

import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import { useEffect } from "react";

const events = [
  {
    // 예시 이벤트 데이터
    id: "1",
    resourceId: "a",
    start: "2024-01-22T02:00:00",
    end: "2024-01-22T07:00:00",
    title: "Event 1",
  },
];

const resources = [
  {
    // 예시 리소스 데이터
    id: "a",
    title: "Resource A",
  },
];

const TimeLineChart = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fc-timeline-slot-cushion");
    const lastElement = elements[elements.length - 1];
    console.log(elements);
    if (lastElement?.textContent === "00") {
      lastElement.textContent = "24";
    }
  }, []);

  return (
    <FullCalendar
      plugins={[resourceTimelinePlugin]}
      initialView="resourceTimelineDay"
      events={events}
      resources={resources}
      slotDuration="PT1H"
      slotMinTime="00:00:00"
      slotMaxTime="25:00:00"
      slotLabelFormat={{ hour: "2-digit", hour12: false }}
      locale="en-GB"
      height="auto"
    />
  );
};

export default TimeLineChart;
