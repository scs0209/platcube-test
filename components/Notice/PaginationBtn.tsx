import Button from "./Button";
import NoticeSelect from "./NoticeSelect";

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

  return (
    <div className="flex gap-2 text-[#B3B3B3] items-center">
      <Button onClick={handleFirstPage} disabled={page === 1} label={"<<"} />
      <Button onClick={handlePreviousPage} disabled={page === 1} label={"<"} />
      <span>페이지 </span>
      <NoticeSelect value={page} options={pages} onChange={setPage} />
      <Button
        onClick={handleNextPage}
        disabled={page >= totalPages}
        label={">"}
      />
      <Button
        onClick={handleLastPage}
        disabled={page >= totalPages}
        label={">>"}
      />
    </div>
  );
};

export default PaginationBtn;
