import DashboardLayout from '@/components/Shared/DashboardLayout';

// This is a Server Component
export default function Layout({ children }: { children: any }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
