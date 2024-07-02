import { IoIosCheckmark } from 'react-icons/io';
import Button from './Button';
import { PRICING_CLASS } from '@/lib/utils/data/pricing';

type Props = {
  list: {
    title: string;
    desc: string;
    pricing?: { monthly: string; yearly: string };
    offers: string[];
  };
  plan: string;
};

const PricingCard = (props: Props) => {
  const { title, desc, pricing, offers } = props.list;

  return (
    <section className="bg-white shadow-md rounded-md p-4 w-full h-fit">
      <div className="flex flex-col justify-between pb-4 space-y-10 border-b">
        <div className="space-y-4">
          <Button className="bg-purple-500 w-fit text-sm px-4 py-1">
            {title}
          </Button>
          <p className="text-xs font-medium text-gray-500">{desc}</p>
        </div>
        {pricing ? (
          props.plan == 'Monthly' ? (
            <h1 className="text-4xl font-semibold">
              {pricing.monthly}
              <sub className="text-xs font-medium text-gray-500">/month</sub>
            </h1>
          ) : (
            <h1 className="text-4xl font-semibold">
              {pricing.yearly}
              <sub className="text-xs font-medium text-gray-500">/yearly</sub>
            </h1>
          )
        ) : (
          <h1 className="text-4xl font-semibold">Let&pos;s Talk</h1>
        )}
      </div>
      <div className="py-6 h-[15rem] border-b">
        {offers.map((item: string, idx: number) => (
          <div className="flex gap-4 items-center pb-1" key={idx}>
            <IoIosCheckmark size={24} />
            <p className="text-xs text-zinc-800 font-semibold">{item}</p>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <Button
          className={`py-2 bg-transparent text-sm font-semibold border ${
            title === PRICING_CLASS.CUSTOM
              ? 'bg-violet-700 text-white'
              : 'text-zinc-800 '
          }`}
        >
          {title === PRICING_CLASS.CUSTOM ? 'Book a demo' : 'Get Started'}
        </Button>
      </div>
    </section>
  );
};
export default PricingCard;
