import Chart from "@/components/chart";

const Apicalls = () => {
  return (
    <div className="bg-white rounded-md w-full h-[70vh] p-4">
      <div className="text-xl font-semibold mb-10">
        API Calls in the last 6 hours
      </div>
      <div className="h-[55vh]">
        <Chart />
      </div>
    </div>
  );
};

export default Apicalls;
