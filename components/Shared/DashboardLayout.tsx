import SideBar from '@/components/Shared/SideBar';
import useUserState from '@/store/user';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Link {
  id: number;
  name: string;
  links: string;
  icon: JSX.Element;
}

const Layout = (props: { children: JSX.Element }) => {
  const { user } = useUserState();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('/auth/login');
    }
  }, [user, router]);
  return (
    <>
      {!user ? (
        <div className="flex md:h-screen w-screen overflow-hidden">
          <SideBar />
          <div className="flex-1 bg-[#EAEAEA] dark:bg-[#41395b] dark:text-black px-2 md:px-5 py-2 h-full overflow-y-scroll ">
            {props.children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Layout;
