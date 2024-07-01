'use client';

import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const PLchart = () => {
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      top: '5%',
      left: '1%',
      itemWidth: 5,
      itemHeight: 5,
      borderRadius: 5,
      itemStyle: {},
      textStyle: {
        color: '#92959E',
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        top: '10%',
        left: '25%',
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default PLchart;
