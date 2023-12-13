import React from 'react';

const DropDown = ({ list }: any) => {
  const { optionList } = list;
  return (
    <div className="cursor-pointer w-full">
      {optionList.map((item: string, idx: number) => (
        <option
          value={item}
          key={idx}
          className="hover:bg-slate-200 text-sm border-b px-2 py-1 last:border-b-0"
          onClick={() => console.log('clicked')}
        >
          {item}
        </option>
      ))}
    </div>
  );
};

export default DropDown;
