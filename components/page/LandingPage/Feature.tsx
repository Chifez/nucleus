import FeatureCard from '@/components/Shared/FeatureCard';
import { AiOutlineMonitor, AiOutlinePieChart } from 'react-icons/ai';
import React from 'react';
import { MdSpatialTracking } from 'react-icons/md';

const Feature = () => {
  return (
    <section
      id="features"
      className="text-center h-full w-full px-4 lg:px-20 py-20"
    >
      <div className="mt-8 mb-12">
        <h1 className="font-[500] text-3xl mb-2">More than just a tool</h1>
        <h1 className="text-sm font-normal text-zinc-500">
          What we offer and more
        </h1>
      </div>

      <div className="grid grid-flow-row md:grid-flow-col md:gap-4">
        <FeatureCard
          title="Monitor API"
          icon={<AiOutlineMonitor className="w-6 h-6 text-[#FFF2E9]" />}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                saepe enim eos debitis consequatur animi."
        />

        <FeatureCard
          title="Usage Metric"
          icon={<AiOutlinePieChart className="w-6 h-6 text-[#EDE8FF]" />}
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                saepe enim eos debitis consequatur animi."
        />
        <FeatureCard
          title="User Tracking"
          icon={<MdSpatialTracking className="w-6 h-6 text-[#EAF9FF]" />}
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                saepe enim eos debitis consequatur animi."
        />
        <FeatureCard
          title="Monitor API"
          icon={<AiOutlineMonitor className="w-6 h-6 text-[#FFF2E9]" />}
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                saepe enim eos debitis consequatur animi."
        />
      </div>
    </section>
  );
};

export default Feature;
