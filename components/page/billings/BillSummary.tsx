import { CgOptions } from 'react-icons/cg';
import Chart from '../dashboard/Apichart';
const BillSummary = () => {
  return (
    <div className="bg-white rounded-md w-full h-[50vh] p-4 mb-2">
      <div className="flex items-center justify-between px-5 mb-10 ">
        <div className="text-xl font-semibold ">Bill summary</div>
        <CgOptions className="w-5 h-5 text-[#D0D2DA]" />
      </div>
      <div className="h-[45vh]">
        {/* <Chart /> */}
        <p>chart</p>
      </div>
    </div>
  );
};
export default BillSummary;
