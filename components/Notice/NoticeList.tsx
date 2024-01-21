import Image from "next/image";
import { Suspense } from "react";

import { Loader2 } from "lucide-react";

import { NoticeData } from "@/lib/interface";
import { formatDateAndTime, getMonth } from "@/lib/utils/dateUtils";

interface Props {
  data: NoticeData;
}

const NoticeList = ({ data }: Props) => {
  return (
    <>
      <Suspense fallback={<Loader2 className="animated-spin" />}>
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
              <h3 className="font-bold">
                {notice.title} ({getMonth(new Date(notice.createdAt))}월)
              </h3>
              <div className="text-[#B9B9B9] mb-[20px]">
                <span className="mr-4">
                  {notice.name} {notice.rank}
                </span>
                <span>{formatDateAndTime(new Date(notice.createdAt))}</span>
              </div>
              <p>{notice.text}</p>
            </div>
          </div>
        ))}
      </Suspense>
    </>
  );
};

export default NoticeList;
