'use client';

import Profit from './P&L';
import CurrentPlan from './CurrentPlan';

const Plan = () => {
  return (
    <div className="w-full lg:h-[60vh] mb-2 grid grid-cols-1 md:grid-cols-2 gap-2">
      <Profit />
      <CurrentPlan />
    </div>
  );
};

export default Plan;
