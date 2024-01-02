import { FaUserFriends } from 'react-icons/fa';

interface CurrentPlanProps {
  icon: JSX.Element;
  title: String;
  value: String;
  bg: String;
}
const CurrentPlanCard = (props: { item: CurrentPlanProps }) => {
  const {
    item: { icon, title, value, bg },
  } = props;
  return (
    <span
      className={`border-[#ECECEE] min-w-full py-2 flex items-start justify-start gap-2`}
    >
      <div
        className={`w-14 h-14 flex items-center justify-center border border-transparent rounded-xl ${bg} text-[${bg}]`}
      >
        {icon}
      </div>
      <div>
        <p className="font-normal capitalize ">{title}</p>
        <p className="text-base font-semibold">{value}</p>
      </div>
    </span>
    //     <span className={`w-full py-4 flex items-start justify-start gap-2`}>
    //     <div
    //       className={`w-14 h-14 flex items-center justify-center border border-transparent bg-[#EAF9FF] rounded-xl text-[#4ac7f8]`}
    //     >
    //       <FaUserFriends className="w-7 h-7" />
    //     </div>
    //     <div>
    //       <p className=" capitalize text-sm">Teams Plan</p>
    //       <p className="text-base font-semibold">$99/mo</p>
    //     </div>
    //   </span>
  );
};
export default CurrentPlanCard;
