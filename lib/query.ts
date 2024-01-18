import { gql } from "@apollo/client";

export const SEE_HOSPITAL_NOTICE_INFO = gql`
  query SeeHospitalNoticeInfo($take: Int, $cursor: Int) {
    seeNotices(take: $take, cursor: $cursor) {
      noticeList {
        createdAt
        creatorImg
        name
        ntc_id
        rank
        text
        title
      }
      totalLength
    }
  }
`;

export const SEE_SCHEDULE = gql`
  query SeeSchedule($searchDate: String!) {
    seeSchedule(searchDate: $searchDate) {
      roomName
      drName
      drRank
      subDrUsed
      isOffDay
      offStartHour
      offStartMin
      offEndHour
      offEndMin
      startHour
      startMin
      endHour
      endMin
      lunchBreak
      lbStartHour
      lbStartMin
      lbEndHour
      lbEndMin
    }
  }
`;

export const SEE_STATISTICS_INFO = gql`
  query SeeStatisticsInfo {
    seeStatistics {
      byWeekNumberCount {
        weekNumber
        count
      }
      manCount
      womanCount
    }
  }
`;
