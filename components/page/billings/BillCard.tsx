const BillsCard = ({ billItem }: any) => {
  return (
    <div className="w-full h-full mb-2">
      <div className=" bg-white rounded-md w-full h-full px-3 py-2">
        <h3 className="font-semibold">{billItem.title}</h3>
        <div className="flex items-start justify-center gap-2 flex-1 h-[25vh] ">
          <p className="">{billItem.amount}</p>
          <div className="flex-1 max-h-full flex items-center justify-center">
            {billItem.chart}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BillsCard;
