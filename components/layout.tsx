import SideBar from "./sideBar";

interface Link {
  id: number;
  name: string;
  links: string;
  icon: JSX.Element;
}

const Layout = (props: { children: JSX.Element }) => {
  return (
    <div className="h-screen w-screen overflow-hidden grid grid-cols-6">
      <SideBar />
      <div className="col-span-5 bg-[#EAEAEA] p-2">{props.children}</div>
    </div>
  );
};

export default Layout;
