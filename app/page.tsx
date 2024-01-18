import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
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

const query2 = gql`
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

const query3 = gql`
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

export default async function HomePage() {
  const { data, error } = await getClient().query({
    query,
    variables: { take: 10, cursor: 0 },
  });
  const { data: scheduleData } = await getClient().query({
    query: query2,
    variables: { searchDate: "2022-01-01" },
  });
  const { data: staticsInfo } = await getClient().query({
    query: query3,
  });

  console.log(JSON.stringify(staticsInfo, null, 2));

  return <main>HomePage</main>;
}
