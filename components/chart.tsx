import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const Chart = () => {
  const options = {
    grid: {
      top: "5%",
      bottom: "10%",
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {},
    //   },
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM", "6:00PM"],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: "line",
        smooth: true,
        data: [5, 3, 10, 8, 12, 15],
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#551FFF",
            },
            {
              offset: 1,
              color: "#551FFF",
            },
          ]),
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: "#531fff7f",
            },
            {
              offset: 1,
              color: "#9577f722",
            },
          ]),
        },
      },
    ],
  };
  return <ReactECharts option={options} />;
};

export default Chart;
