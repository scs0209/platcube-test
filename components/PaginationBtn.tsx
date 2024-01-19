import React from "react";

interface Props {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationBtn = ({ page, totalPages, setPage }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleFirstPage = () => setPage(1);
  const handlePreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setPage((prev) => Math.min(prev + 1, totalPages));
  const handleLastPage = () => setPage(totalPages);

  const handlePageChange = (event: any) => {
    setPage(Number(event.target.value));
  };

  return (
    <div className="flex gap-2 text-[#B3B3B3] items-center">
      <button
        onClick={handleFirstPage}
        className="border-[1px] border-[#F9F9F9] w-8 h-8"
        disabled={page === 0}
      >
        {"<<"}
      </button>
      <button
        onClick={handlePreviousPage}
        className="border-[1px] border-[#F9F9F9] w-8 h-8"
        disabled={page === 0}
      >
        {"<"}
      </button>
      <span>페이지 </span>
      <select
        value={page}
        onChange={handlePageChange}
        className="border-[1px] border-[#F9F9F9] w-16 h-8"
      >
        {pages.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button
        onClick={handleNextPage}
        disabled={page >= totalPages}
        className="border-[1px] border-[#F9F9F9] w-8 h-8"
      >
        {">"}
      </button>
      <button
        onClick={handleLastPage}
        disabled={page >= totalPages}
        className="border-[1px] border-[#F9F9F9] w-8 h-8"
      >
        {">>"}
      </button>
    </div>
  );
};

export default PaginationBtn;
