import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
const Chart = () => {
  const option = {
    legend: {
      textStyle: {
        color: '#92959E',
      },
    },
    tooltip: {},
    dataset: {
      source: [
        ['product', 'Basic', 'Teams', 'Enterprise'],
        ['Api calls', 43.3, 85.8, 93.7],
        ['Integration', 83.1, 73.4, 55.1],
        ['Hosting', 86.4, 65.2, 82.5],
      ],
    },
    xAxis: { type: 'category' },
    yAxis: {},
    grid: {
      top: '10%',
      bottom: '40%',
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  };
  return <ReactECharts option={option} />;
};
export default Chart;
