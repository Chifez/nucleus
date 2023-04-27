import Head from "next/head";
import { ReactNode, SetStateAction, useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";

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
        <div>home page</div>
      </Layout>
    </>
  );
}
