"use client";

import Image from "next/image";
import { useState } from "react";

import { useSuspenseQuery } from "@apollo/client";
import { Sheet } from "lucide-react";

import { NoticeData } from "@/lib/interface";
import { SEE_HOSPITAL_NOTICE_INFO } from "@/lib/query";
import PaginationBtn from "./PaginationBtn";
import NoticeSelect from "./NoticeSelect";

const NoticeSection = () => {
  const [take, setTake] = useState(10);
  const [page, setPage] = useState(1);
  const { data, error } = useSuspenseQuery<NoticeData>(
    SEE_HOSPITAL_NOTICE_INFO,
    {
      variables: { take, cursor: (page - 1) * take },
    }
  );

  const totalLength = data?.seeNotices.totalLength;
  const totalPages = Math.ceil((totalLength || 0) / take);
  const options = Array.from({ length: totalLength || 0 }, (_, i) => i + 1);

  return (
    <section className="h-[540px] overflow-y-auto px-8 py-4">
      <h3 className="text-[16px] text-[#B9B9B9]">공지사항</h3>
      <h1 className="text-[24px] mb-[40px]">사내공지</h1>
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
      <div className="flex justify-between items-center border-2 border-[#EFEFEF]">
        <div className="flex items-center gap-4">
          <span className="flex gap-4">
            <span className="text-[#B3B3B3]">번호</span> 1 - {take} of{" "}
            {totalLength}
            <Sheet className="text-[#CACBD4]" />
          </span>
          <NoticeSelect
            value={take}
            options={options}
            onChange={(value) => {
              setTake(value);
              setPage(1);
            }}
          />
        </div>
        <PaginationBtn page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </section>
  );
};

export default NoticeSection;
