import { ChangeEvent } from "react";

interface Props {
  value: number;
  options: number[];
  onChange: (value: number) => void;
}

const NoticeSelect = ({ value, options, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="border-[1px] border-[#F9F9F9] w-16 h-8"
    >
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default NoticeSelect;
