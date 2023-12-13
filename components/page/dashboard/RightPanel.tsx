'use client';

import Activity from './Activity';
import Integration from './Integration';

const RightPanel = () => {
  return (
    <div className="col-span-1 grid grid-rows-2 flex-1 rounded-md mb-2 ">
      <Activity />
      <Integration />
    </div>
  );
};

export default RightPanel;
