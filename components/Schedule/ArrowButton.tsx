interface Props {
  direction: "prev" | "next";
  onClick: () => void;
}

const ArrowButton = ({ direction, onClick }: Props) => {
  const arrow = direction === "prev" ? "<" : ">";

  return (
    <button
      onClick={onClick}
      className="w-5 h-5 border-[1px] border-[#EFEFEF] rounded-md"
    >
      {arrow}
    </button>
  );
};

export default ArrowButton;
