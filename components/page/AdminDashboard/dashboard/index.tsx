'use client';

import Overview from './Overview';
import Plan from './Plan';
import Apicalls from './Apicalls';
import RightPanel from './RightPanel';
import { MdOutlineAdd } from 'react-icons/md';
import Modal from '@/components/Shared/Modal';
import useModalParams from '@/hooks/useModalParams';

export const metadata = {
  title: 'Modern Dashboard - Profile',
};

export default function Home() {
  const { searchParams, onCloseModal, onOpenModal } = useModalParams(
    'add_new',
    'true'
  );

  const user = 'Nwosu Emmanuel';
  const getFirstName = (fullname: string) => {
    if (fullname) {
      const firstName = fullname.split(' ')[0];
      return firstName;
    }
    return 'Stranger';
  };
  return (
    <>
      <div className="relative h-full md:h-screen lg:h-full">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold dark:text-white">
              Dashboard
            </h1>
            <p className="dark:text-white text-[#92959E] max-w-[90%]">
              Information about your current plan and usages
            </p>
            {/* <p className="dark:text-white">Hello, {getFirstName(user)}</p> */}
          </div>

          <div
            onClick={() => onOpenModal()}
            className="h-fit w-fit p-2 border border-[#002E94] rounded-md bg-white text-[#551fff] whitespace-nowrap flex items-center cursor-pointer"
          >
            <MdOutlineAdd className="h-5 w-5" />
            <p>Add New</p>
          </div>
        </header>
        <div className="md:flex-1 md:grid md:grid-cols-3 gap-3 py-2 w-full h-full">
          <div className="col-span-2 flex flex-col gap-3 rounded-md w-full h-full">
            <Overview />
            <Apicalls />
            <Plan />
          </div>
          <div>
            <RightPanel />
          </div>
        </div>
        <Modal
          onClose={onCloseModal}
          openModal={Boolean(searchParams.get('add_new')?.toString())}
          extrastyle="fixed flex items-center justify-center left-0 top-0 w-screen h-screen bg-black/50 z-50"
        >
          <div className="bg-white w-[80vw] md:w-[40vw] h-[40vh] rounded-lg p-4">
            <p>content goes here</p>
          </div>
        </Modal>
      </div>
    </>
  );
}
