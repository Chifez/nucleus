import Chip from '@/components/Chip';
import DropDown from '@/components/DropDown';
import Modal from '@/components/Modal';
import { useState } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { SlOptionsVertical } from 'react-icons/sl';

const Table = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleCloseOption = () => {
    setSelectedItemId(null);
  };

  const handleOpenOption = (itemId: any) => {
    if (selectedItemId === null) {
      setSelectedItemId(itemId);
    } else {
      handleCloseOption();
    }
  };

  const optionlist = {
    optionList: ['option 1', 'option 2'],
  };

  const item = new Array(20).fill(10);
  const PLAN_STYLES = {
    basic: 'text-[#4ac7f8] bg-[#eaf9ff]',
    teams: 'text-[#fa954e] bg-[#fff2e9]',
    enterprise: 'text-[#734cff] bg-[#ede8ff]',
  };

  const STATUS = {
    pending: 'text-[#fa954e] bg-[#fff2e9]',
    paid: 'text-green-300 bg-green-100',
    due: 'text-red-300 bg-red-100',
  };
  return (
    <table className="h-full w-full bg-white dark:bg-[#0c0c0d] dark:text-white rounded-md">
      {/* <p>Invoice Table</p> */}

      <thead>
        <th className="w-full h-[6vh] flex justify-between gap-1 border-b px-4">
          <p className="w-[5%] flex items-center justify-start text-sm font-semibold">
            #
          </p>
          <p className="flex-1 flex items-center justify-start  text-sm font-semibold">
            Customser ID
          </p>
          <p className="flex-1 flex items-center justify-start  text-sm font-semibold">
            Customser Name
          </p>
          <p className="w-[12%] flex items-center justify-start  text-sm font-semibold">
            Plan
          </p>
          <p className="w-[10%] flex items-center justify-start  text-sm font-semibold">
            API calls
          </p>
          <p className="w-[10%] flex items-center justify-start  text-sm font-semibold">
            Date
          </p>
          <p className="w-[10%] flex items-center justify-start  text-sm font-semibold">
            Price
          </p>
          <p className="w-[10%] flex items-center justify-start  text-sm font-semibold">
            Status
          </p>
        </th>
      </thead>
      <tbody>
        <div className=" w-full max-h-[63vh] border-b overflow-y-scroll scrollbar-hide">
          {item.map((user, idx) => (
            <div className="relative" key={idx}>
              <div
                className={` w-full h-fit py-4 overflow-y-auto flex justify-between gap-1 px-4  border-b cursor-default ${
                  idx % 2 !== 0 && 'bg-gray-50 dark:bg-gray-900'
                } `}
              >
                <p className="w-[5%] flex items-center justify-start text-sm">
                  {idx + 1}
                </p>
                <p className="flex-1 flex items-center justify-start text-sm">
                  #32A238BJW
                </p>
                <p className="flex-1 flex items-center justify-start text-sm">
                  Victor Adams
                </p>
                <p className="w-[12%] flex items-center justify-start">
                  <Chip value={'Enterprise'} style={PLAN_STYLES.enterprise} />
                </p>
                <p className="w-[10%] flex items-center justify-center text-sm">
                  2500
                </p>
                <p className="w-[10%] flex items-center justify-start text-sm">
                  22/01/23
                </p>
                <p className="w-[10%] flex items-center justify-start  text-sm">
                  $300
                </p>
                <div className="w-[10%] flex items-center justify-between">
                  <Chip value={'Pending'} style={STATUS.pending} />
                  <div>
                    <SlOptionsVertical
                      onClick={() => handleOpenOption(idx)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <Modal
                isDropDown={true}
                openModal={selectedItemId === idx}
                onClose={handleCloseOption}
                extrastyle={`absolute right-4 ${
                  idx === item.length - 1 ? '-top-16' : 'top-10'
                } rounded-md z-50`}
              >
                <DropDown list={optionlist} handleClick={handleCloseOption} />
              </Modal>
            </div>
          ))}
        </div>
      </tbody>
      <footer className="w-full h-[6vh] flex items-center justify-end gap-4 px-4">
        <button className="rounded-full w-7 h-7 p-1 flex hover:bg-[#41395b] hover:text-white items-center border border-blue-300 justify-center">
          <MdNavigateBefore />
        </button>
        <button className=" rounded-full w-7 h-7 p-1 flex items-center justify-center hover:bg-[#41395b] hover:text-white border border-blue-300">
          <MdNavigateNext />
        </button>
      </footer>
    </table>
  );
};
export default Table;
