import Layout from '@/components/Layout';
import SearchBar from '@/components/SearchBar';
import { IoFilter } from 'react-icons/io5';

import Head from 'next/head';
import Table from './Table';
import RecentInvoice from './RecentInvoice';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoRefresh } from 'react-icons/io5';
import { MdOutlineFileDownload } from 'react-icons/md';
// import { GoDownload } from 'react-icons/go';

const Invoice = () => {
  return (
    <>
      <Head>
        <title>Modern dashboard - Billing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <header>
            <h1 className="text-3xl font-semibold">Invoices</h1>
            <p>See your latest Invoices</p>
          </header>
          <div>
            <div className="grid grid-cols-4 gap-2 w-full my-4">
              <span className="col-span-3 flex items-center justify-between">
                <SearchBar />
                <div className="flex items-center gap-2">
                  <button className="bg-white rounded-full w-10 h-10 p-1 flex items-center justify-center">
                    <IoFilter />
                  </button>

                  <div className="flex items-center gap-2 bg-white w-42 h-10 rounded-full px-3">
                    <div className="flex items-center gap-2 ">
                      <FaCalendarAlt />
                      <p className="text-sm">December 2023</p>
                    </div>
                    <RiArrowDropDownLine />
                  </div>
                </div>
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 w-full ">
              <div className="col-span-3">
                <Table />
              </div>
              <div className="flex-1 flex flex-col gap-2">
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
      </Layout>
    </>
  );
};
export default Invoice;
