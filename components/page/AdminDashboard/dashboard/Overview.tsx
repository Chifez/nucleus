import Modal from '@/components/Shared/Modal';
import useModalParams from '@/hooks/useModalParams';
import React from 'react';
import { AiOutlinePieChart, AiTwotonePieChart } from 'react-icons/ai';
import { BiTransfer } from 'react-icons/bi';
import { FaFileInvoice, FaUserAlt } from 'react-icons/fa';
import OverviewCard from './OverviewCard';

const Overview = () => {
  const { searchParams, onCloseModal, onOpenModal } = useModalParams(
    'overview',
    'true'
  );
  const modalContent = searchParams.get('overview');

  const lists = [
    {
      icon: <FaFileInvoice className="w-5 h-5 text-[#fa954e]" />,
      title: 'projects',
      value: 11,
      bg: 'bg-[#FFF2E9]',
    },
    {
      icon: <BiTransfer className="w-5 h-5 text-[#734cff]" />,
      title: 'request',
      value: 3456,
      bg: 'bg-[#EDE8FF]',
    },
    {
      icon: <FaUserAlt className="w-5 h-5 text-[#4ac7f8]" />,
      title: 'users',
      value: 4,
      bg: 'bg-[#EAF9FF]',
    },
    {
      icon: <AiTwotonePieChart className="w-5 h-5 text-[#f58e45]" />,
      title: 'storage',
      value: '128/500GB',
      bg: 'bg-[#FFF2E9]',
    },
  ];

  const data = [
    {
      title: 'project',
      info: [
        { user: 'James Anderson', value: '04' },
        { user: 'Vector susan', value: '01' },
        { user: 'Jude Berg', value: '03' },
        { user: 'Daniel telly', value: '02' },
      ],
    },
    {
      title: 'users',
      info: [
        { user: 'James Anderson', value: 'Basic' },
        { user: 'Vector susan', value: 'Teams' },
        { user: 'Jude Berg', value: 'Enterprise' },
        { user: 'Daniel telly', value: 'Basic' },
      ],
    },
    {
      title: 'storage',
      info: [
        { user: 'James Anderson', value: '67GB' },
        { user: 'Vector susan', value: '75GB' },
        { user: 'Jude Berg', value: '45GB' },
        { user: 'Daniel telly', value: '35GB' },
      ],
    },
    {
      title: 'request',
      info: [
        { user: 'James Anderson', value: 100 },
        { user: 'Vector susan', value: 400 },
        { user: 'Jude Berg', value: 700 },
        { user: 'Daniel telly', value: 1000 },
      ],
    },
  ];
  return (
    <>
      <div className="p-2 md:p-5 bg-white dark:bg-[#0c0c0d] dark:text-white transition-all duration-600 rounded-md w-full lg:h-[20vh] grid grid-cols-2 lg:flex items-center justify-around gap-1">
        {lists.map((item, idx) => (
          <span
            key={idx}
            className={` cursor-pointer ${
              idx != 3 ? 'lg:border-r md:pl-1' : 'md:pl-1'
            } border-[#ECECEE] w-full py-2 px-1 flex items-start justify-start gap-2`}
            onClick={() => onOpenModal(item.title)}
          >
            <div
              className={`w-10 h-10 md:w-14 md:h-14  flex items-center justify-center border border-transparent rounded-xl ${item.bg} text-[${item.bg}]`}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-sm md:text-base font-semibold capitalize text-[#92959E]">
                {item.title}
              </p>
              <p className="text-sm md:text-base font-medium">{item.value}</p>
            </div>
          </span>
        ))}
      </div>
      <Modal
        onClose={onCloseModal}
        openModal={Boolean(modalContent?.toString())}
        extrastyle="fixed flex items-center justify-center left-0 top-0 w-screen h-screen bg-black/50 z-50"
      >
        <div className="bg-white w-[40vw] h-[40vh] rounded-lg p-4">
          {modalContent === 'projects' && (
            <OverviewCard title="Projects" data={data[0].info} />
          )}
          {modalContent === 'users' && (
            <OverviewCard title="Users" data={data[1].info} />
          )}
          {modalContent === 'storage' && (
            <OverviewCard title="Storage" data={data[2].info} />
          )}
          {modalContent === 'request' && (
            <OverviewCard title="Request" data={data[3].info} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default Overview;
