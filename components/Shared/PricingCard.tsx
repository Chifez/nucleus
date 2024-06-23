import { IoIosCheckmark } from 'react-icons/io';
import Button from './Button';

const PricingCard = () => {
  const offers = [1, 2, 3, 4, 5, 6];

  return (
    <section className="bg-white shadow-md rounded-md p-4 h-fit">
      <div className="flex flex-col justify-between pb-4 space-y-10 border-b">
        <div className="space-y-4">
          <Button className="bg-purple-600 w-fit text-sm px-4 py-1">Pro</Button>
          <p className="text-xs font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque
            vero iure ullam voluptate esse amet nihil sit harum quam?
          </p>
        </div>
        <h1 className="text-4xl font-semibold">
          $2500 <sub className="text-xs font-medium text-gray-500">/month</sub>
        </h1>
      </div>
      <div className="py-6 h-[15rem] border-b">
        {offers.map((item, idx) => (
          <div className="flex gap-4 items-center py-1" key={idx}>
            <IoIosCheckmark size={24} />
            <p className="text-sm text-zinc-800 font-semibold">
              Lorem ipsum, dolor
            </p>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <Button className="py-2 bg-transparent text-sm text-zinc-800 font-semibold border">
          Continue
        </Button>
      </div>
    </section>
  );
};
export default PricingCard;
