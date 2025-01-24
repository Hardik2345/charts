import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend);

const graph = () => {
  const data = {
    labels: [0, 0.8, 1.6, 2.4, 3.2, 4], // X-axis labels (time in seconds)
    datasets: [
      {
        label: "Target",
        data: [0, 0, 10, 10, 0, 0], // Y-axis values for Target
        borderColor: "orange",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      },
      {
        label: "Left Eye",
        data: [0, 1, 9, 9.5, 1, 0], // Y-axis values for Left Eye
        borderColor: "red",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      },
      {
        label: "Right Eye",
        data: [0, 0.5, 10, 9, 0.5, 0], // Y-axis values for Right Eye
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.dataset.label === "Right Eye") {
              return `Latency: 91 ms, Accuracy: 92%`;
            }
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (s)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Eye Movement (°)",
        },
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

export default graph;
