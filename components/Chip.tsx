const Chip = ({ value, style }: { value: string; style: string }) => {
  return (
    <div className={`${style} px-2 py-1 rounded-full text-xs`}>{value}</div>
  );
};

export default Chip;
