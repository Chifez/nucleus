// import SideBar from '@/components/SideBar';

interface Link {
  id: number;
  name: string;
  links: string;
  icon: JSX.Element;
}

const Layout = (props: { children: JSX.Element }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* <SideBar /> */}
      <div className="flex-1 bg-[#EAEAEA] dark:bg-[#41395b] dark:text-black px-5 py-2 h-full overflow-y-scroll ">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
