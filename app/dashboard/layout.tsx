import DashboardLayout from '@/components/Shared/DashboardLayout';
import { Suspense } from 'react';
import Loading from './loading';

// This is a Server Component
export default function Layout({ children }: { children: any }) {
  return (
    <DashboardLayout>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </DashboardLayout>
  );
}
