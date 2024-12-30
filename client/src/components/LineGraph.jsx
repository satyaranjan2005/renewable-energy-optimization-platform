// LineGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineGraph = () => {
  const data = {
    labels: ['Sun','Mon', 'Tues', 'Wed', 'Thus', 'Fri', 'Sat',], // X-axis labels
    datasets: [
      {
        label: 'Energy',
        data: [12, 19, 10, 15, 22, 30,5], // Y-axis data points
        borderColor: '#118B50', // Line color
        backgroundColor: '#118B50', // Area under the line
        tension: 0.4, // Smoothness of the line
        pointBorderColor: 'rgba(75, 192, 192, 1)', // Point color
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top', // Positions the legend at the top
      },
      title: {
        display: true,
        text: 'Energy Supply To Grid', // Chart title
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Energy',
        },
        beginAtZero: true, // Start Y-axis from 0
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineGraph;
