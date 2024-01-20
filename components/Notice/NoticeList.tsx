import Image from "next/image";

import { NoticeData } from "@/lib/interface";

interface Props {
  data: NoticeData;
}

const NoticeList = ({ data }: Props) => {
  return (
    <>
      {data?.seeNotices.noticeList.map((notice) => (
        <div key={notice.ntc_id} className="flex mb-[20px]">
          <Image
            src={notice.creatorImg || "/avatar.png"}
            alt={notice.name}
            width={100}
            height={100}
            className="h-[42px] w-[42px] rounded-md"
          />
          <div className="text-[16px] px-4 mb-2">
            <h3 className="font-bold">{notice.title}</h3>
            <div className="text-[#B9B9B9] mb-[20px]">
              <span className="mr-4">
                {notice.name} {notice.rank}
              </span>
              <span>{notice.createdAt}</span>
            </div>
            <p>{notice.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NoticeList;
