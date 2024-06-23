import { ReactNode } from 'react';

const FeatureCard = (props: {
  title: string;
  icon: ReactNode;
  desc: string;
}) => {
  const CARD_COLOR: { [key: string]: string } = {
    'Monitor API': 'bg-[#fa954e]',
    'Usage Metric': 'bg-[#734cff]',
    'User Tracking': 'bg-[#4ac7f8]',
  };
  return (
    <span className=" w-full rounded-md px-4 py-8 bg-white shadow-md cursor-pointer transition-all hover:scale-105">
      <div className="flex flex-col items-center justify-center space-y-8">
        <span
          className={`flex items-center justify-center ${
            CARD_COLOR[props.title]
          } w-14 h-14 rounded-full`}
        >
          {props.icon}
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
