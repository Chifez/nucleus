import { CgOptions } from 'react-icons/cg';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import Modal from '@/components/Shared/Modal';
import DropDown from '@/components/Shared/DropDown';
import { useState } from 'react';

const BillGrowth = () => {
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
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    toolbox: {
      feature: {
        // dataView: { show: true, readOnly: false },
        // magicType: { show: true, type: ['line', 'bar'] },
        // restore: { show: true },
        // saveAsImage: { show: false },
      },
    },
    legend: {
      data: ['Paid Bills', 'Recent Bills', 'Growth Index'],
      textStyle: {
        color: '#92959E',
      },
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Recent Bills',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value}',
        },
      },
      {
        type: 'value',
        name: 'Growth index',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} %',
        },
      },
    ],
    series: [
      {
        name: 'Paid Bills',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value: any) {
            return value;
          },
        },
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
      },
      {
        name: 'Recent Bills',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value: any) {
            return value;
          },
        },
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        name: 'Growth Index',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value: any) {
            return value + ' °%';
          },
        },
        data: [
          2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
        ],
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-[#0c0c0d] dark:text-white rounded-md w-full h-fit md:h-full  p-4">
      <div className="flex items-center justify-between px-5 mb-10">
        <div className="text-xl font-semibold ">Growth Index</div>
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
      <div className="lg:h-[45vh]">
        <ReactECharts option={option} />
      </div>
    </div>
  );
};
export default BillGrowth;
