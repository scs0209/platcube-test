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
