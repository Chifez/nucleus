import React from 'react';

const DropDown = ({
  list,
  handleClick,
}: {
  list: any;
  handleClick: () => void;
}) => {
  const { optionList } = list;
  return (
    <div className="cursor-pointer w-full ">
      {optionList.map((item: string, idx: number) => (
        <option
          value={item}
          key={idx}
          className="hover:bg-slate-200 hover:text-black text-sm border-b  -mx-2 -my-1 px-2 py-1 last:border-b-0"
          onClick={handleClick}
        >
          <p>{item}</p>
        </option>
      ))}
    </div>
  );
};

export default DropDown;
