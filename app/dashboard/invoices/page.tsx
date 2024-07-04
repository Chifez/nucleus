import Layout from '@/components/Shared/DashboardLayout';
import Invoice from '@/components/page/AdminDashboard/invoices';
import React from 'react';

export const metadata = {
  title: 'Invoices',
};

const Invoices = () => {
  return <Invoice />;
};

export default Invoices;
