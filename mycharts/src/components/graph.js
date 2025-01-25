import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Graph = (props) => {
  const xstep =
    (Math.max(...(props.data?.coordinates1?.map((point) => point.x) || [])) -
      Math.min(...(props.data?.coordinates1?.map((point) => point.x) || []))) /
    props.data?.coordinates1?.length;
  const ystep =
    (Math.max(...(props.data?.coordinates1?.map((point) => point.y) || [])) -
      Math.min(...(props.data?.coordinates1?.map((point) => point.y) || []))) /
    props.data?.coordinates1?.length;
  const data = {
    datasets: [
      {
        label: "Target",
        data: props.data?.coordinates1 || [
          { x: 0, y: 10 },
          { x: 1, y: 10 },
          { x: 1, y: -5 },
          { x: 1.9, y: -5 },
          { x: 1.9, y: 7 },
          { x: 3.2, y: 7 },
          { x: 3.2, y: -3 },
          { x: 4, y: -3 },
          { x: 4, y: 7.9 },
          { x: 5, y: 7.9 },
        ],
        borderColor: "orange",
        borderWidth: 4,
        pointRadius: 0,
        tension: 0.4,
      },
      // {
      //   label: "Right Eye",
      //   data: props.data?.coordinates1 || [
      //     { x: 0, y: 10 },
      //     { x: 1.3, y: 10 },
      //     { x: 1.3, y: -6 },
      //     { x: 2.19, y: -6 },
      //     { x: 2.19, y: 6.5 },
      //     { x: 3.55, y: 6.5 },
      //     { x: 3.55, y: -4 },
      //     { x: 4.43, y: -4 },
      //     { x: 4.43, y: 7.5 },
      //     { x: 5, y: 7.5 },
      //   ],
      //   borderColor: "blue",
      //   borderWidth: 4,
      //   fill: false,
      //   pointRadius: 0,
      //   tension: 0.4,
      // },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "linear",
        position: {
          y: 0,
        },
        beginAtZero: true,
        min:
          Math.min(
            ...(props.data?.coordinates1?.map((point) => point.x) || [])
          ) || 0,
        max:
          (
            Math.max(
              ...(props.data?.coordinates1?.map((point) => point.x) || [])
            ) + xstep
          ).toFixed(2) || 5,
        ticks: {
          autoSkip: false,
          stepSize: xstep.toFixed(2),
          callback: function (value) {
            if (
              value ===
                (Math.min(
                  ...(props.data?.coordinates1?.map((point) => point.x) || [])
                ) || 0) ||
              value ===
                ((
                  Math.max(
                    ...(props.data?.coordinates1?.map((point) => point.x) || [])
                  ) + xstep
                ).toFixed(2) || 5)
            ) {
              return "";
            }
            return value;
          },
        },
        title: {
          display: true,
        },

        border: {
          display: true,
        },

        grid: {
          display: false,
          drawOnChartArea: true,
          drawTicks: true,
        },
      },
      y: {
        display: true,
        min:
          Math.min(
            ...(props.data?.coordinates1?.map((point) => point.y) || [])
          ) - ystep || -6.5,
        max:
          Math.max(
            ...(props.data?.coordinates1?.map((point) => point.y) || [])
          ) + ystep || 12,
        beginAtZero: false,
        ticks: {
          autoSkip: false,
          stepSize: ystep,
        },
        grid: {
          display: false,
          drawOnChartArea: true,
          drawTicks: true,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const { x, y } = context.raw;
            return `(${x}, ${y})`;
          },
        },
      },
      title: {
        display: true,
        text: "Grid Line Settings",
      },
      legend: {
        labels: {
          font: {
            size: 14,
          },
          color: "black",
          usePointStyle: true,
          padding: 20,
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
        Eye Movement
      </h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
