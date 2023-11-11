import Chart from "@/components/Apichart";
import { CgOptions } from "react-icons/cg";
const Apicalls = () => {
  return (
    <div className="bg-white rounded-md w-full h-[70vh] p-4">
      <div className="flex items-center justify-between px-5 mb-10 ">
        <div className="text-xl font-semibold ">
          API Calls in the last 6 hours
        </div>
        <CgOptions className="w-5 h-5 text-[#D0D2DA]" />
      </div>
      <div className="h-[55vh]">
        <Chart />
      </div>
    </div>
  );
};

export default Apicalls;
