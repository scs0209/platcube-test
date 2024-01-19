interface Props {
  onClick: () => void;
  disabled: boolean;
  label: string;
}

const Button = ({ onClick, disabled, label }: Props) => {
  return (
    <button
      onClick={onClick}
      className="border-[1px] border-[#F9F9F9] w-8 h-8"
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
