'use client';

import { CgOptions } from 'react-icons/cg';
import Chart from '../dashboard/Apichart';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import Modal from '@/components/Shared/Modal';
import DropDown from '@/components/Shared/DropDown';
import { useState } from 'react';
const BillSummary = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const optionlist = {
    optionList: ['option 1', 'option 2'],
  };

  const handleOpenOption = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const handlecloseOption = () => {
    setIsOptionOpen(false);
  };

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      top: '10%',
      bottom: '40%',
    },
    legend: {
      data: ['API calls', 'Integrations', 'Hosting'],
      textStyle: {
        color: '#92959E',
      },
    },
    // toolbox: {
    //   show: true,
    //   orient: 'vertical',
    //   left: 'right',
    //   top: 'center',
    //   feature: {
    //     mark: { show: true },
    //     dataView: { show: true, readOnly: false },
    //     magicType: { show: true, type: ['line', 'bar', 'stack'] },
    //     restore: { show: true },
    //     saveAsImage: { show: true },
    //   },
    // },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'API calls',
        type: 'bar',
        barGap: 0,
        // label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [320, 332, 301, 334, 390],
      },
      {
        name: 'Integrations',
        type: 'bar',
        // label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290],
      },
      {
        name: 'Hosting',
        type: 'bar',
        // label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190],
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-[#0c0c0d] dark:text-white rounded-md w-full h-fit md:h-[50vh] p-4 ">
      <div className="flex items-center justify-between px-5 mb-10 ">
        <div className="text-xl font-semibold ">Bill summary</div>
        <div className="relative">
          <CgOptions
            className=" w-5 h-5 text-[#D0D2DA] cursor-pointer"
            onClick={handleOpenOption}
          />
          <Modal
            isDropDown={true}
            openModal={isOptionOpen}
            onClose={handlecloseOption}
            extrastyle="absolute right-1 rounded-md z-50"
          >
            <DropDown list={optionlist} handleClick={handlecloseOption} />
          </Modal>
        </div>
      </div>
      <div className="lg:h-[45vh] ">
        {/* <Chart /> */}
        <ReactECharts option={option} />
        {/* <p>chart</p> */}
      </div>
    </div>
  );
};
export default BillSummary;
