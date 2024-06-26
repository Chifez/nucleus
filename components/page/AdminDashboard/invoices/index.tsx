import Layout from '@/components/Shared/DashboardLayout';
import SearchBar from '@/components/Shared/SearchBar';

import Head from 'next/head';
import Table from './Table';
import RecentInvoice from './RecentInvoice';
import { IoRefresh } from 'react-icons/io5';
import { MdOutlineFileDownload } from 'react-icons/md';
import Filter from './Filter';
// import { GoDownload } from 'react-icons/go';

export const metadata = {
  title: 'Modern dashboard - Invoices',
};

const Invoice = () => {
  return (
    <>
      <div className="h-full">
        <header>
          <h1 className="text-3xl font-semibold dark:text-white">Invoices</h1>
          <p className="dark:text-white text-[#92959E]">
            See your latest Invoices
          </p>
        </header>
        <div className="h-full">
          <div className="grid lg:grid-cols-4 gap-3 w-full my-4">
            <span className="lg:col-span-3 flex items-center justify-between">
              <SearchBar />
              <Filter />
            </span>
          </div>
          <div className="grid lg:grid-cols-4 gap-3 w-full ">
            <div className="lg:col-span-3">
              <Table />
            </div>
            <div className="flex-1 lg:flex flex-col gap-2">
              <RecentInvoice />
              <div className="flex gap-2 h-[10%]">
                <div className="h-full w-full border border-[#002E94] rounded-md px-2  bg-white text-[#551fff] font-semibold flex justify-between items-center cursor-pointer">
                  <p>Reset Invoice</p>
                  <IoRefresh />
                </div>
                <div className="h-full bg-white rounded-md px-5 flex justify-between items-center cursor-pointer">
                  <MdOutlineFileDownload />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Invoice;
