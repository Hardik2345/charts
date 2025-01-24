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
          { x: 1, y: 8 },
          { x: 1, y: 6 },
          { x: 1, y: 4 },
          { x: 1, y: 2 },
          { x: 1, y: 0 },
          { x: 1, y: -2 },
          { x: 1, y: -4 },
          { x: 1, y: -5 },
        ],
        borderColor: "orange",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        beginAtZero: true,
        min: 0,
        max: 4.5,
        ticks: {
          autoSkip: false,
          stepSize: 0.75,
        },
        title: {
          display: true,
          text: "X-Axis (Predefined Labels)",
        },
      },
      y: {
        display: true,
        min: -6, // Include space for negative values
        max: 12,
        beginAtZero: true, // Ensures the y-axis begins at 0
        position: "left", // Position the y-axis to the left
        ticks: {
          stepSize: 2,
        },
        grid: {
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
