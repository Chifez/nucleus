import Head from 'next/head';
import { ReactNode, SetStateAction, useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Activity from './Activity';
import Overview from './Overview';
import Plan from './Plan';
import Apicalls from './Apicalls';
import RightPanel from './RightPanel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="h-full md:h-screen lg:h-full">
          <header>
            <h1 className="text-3xl font-semibold dark:text-white">
              DashBoard
            </h1>
            <p className="dark:text-white">welcome stranger </p>
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
        </div>
      </Layout>
    </>
  );
}
