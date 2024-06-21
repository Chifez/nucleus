const FeatureCard = (props: { title: string; desc: string }) => {
  return (
    <span className=" w-full rounded-md px-4 py-8 bg-white shadow-md cursor-pointer transition-all hover:scale-105">
      <div className="flex flex-col items-center justify-center space-y-8">
        <span className="flex items-center justify-center bg-purple-400 w-14 h-14 rounded-full">
          <img
            src=""
            alt=""
            className="w-6 h-6 border border-red-600 rounded-full"
          />
        </span>
        <div className="space-y-2 pb-8">
          <h1 className="font-semibold">{props.title}</h1>
          <p className=" text-sm">{props.desc}</p>
        </div>
      </div>
    </span>
  );
};
export default FeatureCard;
