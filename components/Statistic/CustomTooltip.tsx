import { TooltipProps } from "recharts";

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0E2044] flex items-center justify-center text-white w-[66px] text-center h-[42px] px-2 py-1 rounded relative">
        <p>{payload[0].value}</p>
        <div className="absolute -bottom-1.5 left-4 transform -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#0E2044]" />
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
