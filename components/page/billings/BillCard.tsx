import Chip from '@/components/Chip';

interface BillType {
  'Recent Bills': string;
  'Paid Bills': string;
}
const BillsCard = ({ billItem }: any) => {
  const BILL_STYLE: BillType = {
    'Recent Bills': 'text-white bg-red-300',
    'Paid Bills': 'text-white bg-green-300',
  };
  return (
    <div className="w-full h-fit md:h-full mb-2 md:mb-0">
      <div className=" bg-white dark:bg-[#0c0c0d] dark:text-white rounded-md w-full h-full px-3 py-2">
        <div className="flex justify-between">
          <h3 className="font-semibold">{billItem.title}</h3>
          <Chip
            value={billItem.amount}
            style={BILL_STYLE[billItem.title as keyof BillType]}
          />
        </div>
        <div className="h-[33vh] ">
          {/* <div className="flex-1 h-[20vh] border border-red-500 "> */}
          {billItem.chart}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
export default BillsCard;
