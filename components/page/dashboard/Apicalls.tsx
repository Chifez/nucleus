import Chart from "@/components/chart";

const Apicalls = () => {
  return (
    <div className="bg-white rounded-md w-full h-[70vh]">
      <div className="text-xl font-semibold">API Calls in the last 6 hours</div>
      <Chart />
    </div>
  );
};

export default Apicalls;
