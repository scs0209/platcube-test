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

export default async function HomePage() {
  const { data, error } = await getClient().query({
    query,
    variables: { take: 10, cursor: 0 },
  });

  console.log(JSON.stringify(data, null, 2));

  return <main>HomePage</main>;
}
