import SideBar from '@/components/Shared/SideBar';
import useUserState from '@/store/user';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
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
  const { user, setUser } = useUserState();
  const router = useRouter();

  const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_ANON_KEY;
  const supabase = createClientComponentClient({ supabaseUrl, supabaseKey });

  // useEffect(() => {
  //   async function getUser() {
  //     const { data } = await supabase.auth.getUser();
  //     setUser(data.user?.id as unknown as string);
  //     console.log(user);
  //     if (!data.user?.id) {
  //       router.replace('/auth/login');
  //     }
  //   }
  //   getUser();
  // }, []);

  return (
    <>
      {/* {user ? ( */}
      <div className="flex md:h-screen w-screen overflow-hidden">
        <SideBar />
        <div className="flex-1 bg-[#EAEAEA] dark:bg-[#41395b] dark:text-black px-2 md:px-5 py-2 h-full overflow-y-scroll ">
          {props.children}
        </div>
      </div>
      {/* ) : null} */}
    </>
  );
};

export default Layout;
