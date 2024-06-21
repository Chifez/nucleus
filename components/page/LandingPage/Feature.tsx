import FeatureCard from '@/components/Shared/FeatureCard';
import React from 'react';

const Feature = () => {
  return (
    <section
      id="features"
      className="text-center h-full w-full px-4 lg:px-20 py-20"
    >
      <div className="mt-8 mb-12">
        <h1 className="font-bold text-3xl">More than just a tool</h1>
        <h1 className="text-sm">What we offer and more</h1>
      </div>

      <div className="grid grid-flow-row md:grid-flow-col md:gap-4">
        <FeatureCard
          title="Monitor API"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                saepe enim eos debitis consequatur animi."
        />

        <FeatureCard
          title="Usage Metric"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                saepe enim eos debitis consequatur animi."
        />
        <FeatureCard
          title="User Tracking"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                saepe enim eos debitis consequatur animi."
        />
        <FeatureCard
          title="Monitor API"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                saepe enim eos debitis consequatur animi."
        />
      </div>
    </section>
  );
};

export default Feature;
