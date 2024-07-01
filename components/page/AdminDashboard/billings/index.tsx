'use client';

import BillsCard from './BillCard';
import BillSummary from './BillSummary';
import BillGrowth from './BillGrowth';
import BillCalendar from './BillCalendar';
import UserLocation from './UserLocation';
import Chart from './Chart';

export const metadata = {
  title: 'Modern dashboard - Billing',
};

const Billing = () => {
  const bills = [
    { title: 'Recent Bills', amount: '$25,000', chart: <Chart /> },
    { title: 'Paid Bills', amount: '$15,000', chart: <Chart /> },
  ];
  return (
    <>
      <div className="h-full">
        <header>
          <h1 className="text-3xl font-semibold dark:text-white">Billings</h1>
          <p className="dark:text-white text-[#92959E]">
            Information about your bills
          </p>
        </header>
        <div className="grid md:grid-cols-3 gap-3 w-full py-2">
          <div className="md:col-span-2 flex flex-col gap-3 rounded-md w-full ">
            <div className="md:flex w-full gap-3">
              {bills.map((item, idx) => (
                <BillsCard billItem={item} key={idx} />
              ))}
            </div>
            <div className="flex flex-col gap-3 ">
              <BillSummary />
              <BillGrowth />
            </div>
          </div>
          <span className="md:col-span-1 flex flex-col gap-3 h-full">
            <BillCalendar />
            <UserLocation />
          </span>
        </div>
      </div>
    </>
  );
};
export default Billing;
