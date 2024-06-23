import PricingCard from '@/components/Shared/PricingCard';

const Pricing = () => {
  const pricingPlans = [];
  return (
    <section id="pricing" className="space-y-8 px-20">
      <div className="text-center">
        <h1>Choose your right plan</h1>
        <p>Select from a variety of plans that suits your need</p>
      </div>
      <div className="flex gap-6 px-20">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </section>
  );
};
export default Pricing;
