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

const Graph = () => {
  const data = {
    datasets: [
      {
        label: "Target",
        data: [
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
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
      },
      {
        label: "Right Eye",
        data: [
          { x: 0, y: 10 },
          { x: 1.3, y: 10 },
          { x: 1.3, y: -6 },
          { x: 2.19, y: -6 },
          { x: 2.19, y: 6.5 },
          { x: 3.55, y: 6.5 },
          { x: 3.55, y: -4 },
          { x: 4.43, y: -4 },
          { x: 4.43, y: 7.5 },
          { x: 5, y: 7.5 },
        ],
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
      },
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
        min: 0,
        max: 5,
        ticks: {
          autoSkip: false,
          stepSize: 0.75,
          callback: function (value, index, values) {
            if (value === 0 || value === 5) {
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
        min: -6.5,
        max: 12,
        beginAtZero: false,
        ticks: {
          stepSize: 2,
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
    <div>
      <h3>Eye Movement</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
