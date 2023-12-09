import { CgOptions } from 'react-icons/cg';
const BillGrowth = () => {
  return (
    <div className="bg-white dark:bg-[#0c0c0d] dark:text-white rounded-md w-full h-full p-4">
      <div className="flex items-center justify-between px-5 mb-10">
        <div className="text-xl font-semibold ">Growth Index</div>
        <CgOptions className="w-5 h-5 text-[#D0D2DA]" />
      </div>
      <div className="h-[45vh]">
        {/* <Chart /> */}
        <p>chart</p>
      </div>
    </div>
  );
};
export default BillGrowth;
