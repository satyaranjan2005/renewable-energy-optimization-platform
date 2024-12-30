// BarGraph.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = (props) => {
  const data = {
    labels: ['Generated', 'Utilized', 'Saved'], // Labels for the three bars
    datasets: [
      {
        label: 'Energy',
        data: [props.generated, props.consumption, props.save], // Values for each bar
        backgroundColor: [
          '#118B50', // Red bar
          '#5DB996', // Blue bar
          '#E3F0AF', // Yellow bar
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top', // Positions the legend at the top
      },
      title: {
        display: true,
        text: 'Energy', // Chart title
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarGraph;
