import Layout from '@/components/Shared/DashboardLayout';
import Head from 'next/head';
import React from 'react';

export const metadata = {
  title: 'Modern dashboard - Settings',
};

const Setting = () => {
  return (
    <>
      <div className="max-h-full">
        <header>
          <h1 className="text-3xl font-semibold dark:text-white">Settings</h1>
          <p className="dark:text-white text-[#92959E]">Update your settings</p>
        </header>
        <div className="mt-4 h-full flex flex-col gap-2">
          <div className="cursor-pointer">
            <p className="text-base">Change Billing plans</p>
          </div>
          <div className="cursor-pointer">
            <p className="text-base">Suspend user</p>
          </div>
          <div className="cursor-pointer">
            <p className="text-base">Update profile</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
