import Head from 'next/head';
import { ReactNode, SetStateAction, useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Shared/DashboardLayout';
import Activity from './Activity';
import Overview from './Overview';
import Plan from './Plan';
import Apicalls from './Apicalls';
import RightPanel from './RightPanel';
import { MdAdd } from 'react-icons/md';
import { MdOutlineAdd } from 'react-icons/md';
import Modal from '@/components/Shared/Modal';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useModalParams from '@/hooks/useModalParams';

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
      {/* <Head>
        <title>Nucleus - Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nucleus_favicon.svg" />
      </Head> */}
      <Layout>
        <div className="relative h-full md:h-screen lg:h-full">
          <header className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-semibold dark:text-white">
                Dashboard
              </h1>
              <p className="dark:text-white text-[#92959E]">
                Information about your current plan and usages
              </p>
              {/* <p className="dark:text-white">Hello, {getFirstName(user)}</p> */}
            </div>

            <div
              onClick={() => onOpenModal()}
              className="h-fit w-fit p-2 border border-[#002E94] rounded-md bg-white text-[#551fff]  flex items-center cursor-pointer"
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
            extrastyle="fixed flex items-center justify-center left-0 top-0 w-screen h-screen bg-black/50"
          >
            <div className="bg-white w-[40vw] h-[40vh] rounded-lg p-4">
              <p>content goes here</p>
            </div>
          </Modal>
        </div>
      </Layout>
    </>
  );
}
