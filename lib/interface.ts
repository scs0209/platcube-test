export interface Notice {
  __typename: string;
  createdAt: string;
  creatorImg: string;
  name: string;
  ntc_id: number;
  rank: string;
  text: string;
  title: string;
}

export interface NoticeData {
  seeNotices: {
    noticeList: Notice[];
    totalLength: number;
  };
}

export interface Schedule {
  __typename: string;
  roomName: string;
  drName: string;
  drRank: string;
  subDrUsed: boolean;
  isOffDay: boolean;
  offStartHour: number;
  offStartMin: number;
  offEndHour: number;
  offEndMin: number;
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
  lunchBreak: boolean;
  lbStartHour: number;
  lbStartMin: number;
  lbEndHour: number;
  lbEndMin: number;
}

export interface ScheduleData {
  seeSchedule: Schedule[];
}
