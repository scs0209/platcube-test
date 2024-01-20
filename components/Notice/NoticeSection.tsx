"use client";

import { useState } from "react";

import { useSuspenseQuery } from "@apollo/client";
import { Sheet } from "lucide-react";

import { NoticeData } from "@/lib/interface";
import { SEE_HOSPITAL_NOTICE_INFO } from "@/lib/query";
import PaginationBtn from "./PaginationBtn";
import NoticeSelect from "./NoticeSelect";
import NoticeList from "./NoticeList";

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
    <section>
      <div className="px-10 pt-4">
        <h3 className="text-[16px] text-[#B9B9B9]">공지사항</h3>
        <h1 className="text-[24px] mb-[40px] font-bold">사내공지</h1>
        <div className="h-[540px] overflow-y-auto scrollable">
          <NoticeList data={data} />
        </div>
      </div>
      <div className="flex justify-between items-center border-[1px] border-[#EFEFEF] p-5">
        <div className="flex items-center gap-4">
          <span className="flex gap-4 font-bold">
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
