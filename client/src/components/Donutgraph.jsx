// DonutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = (props) => {
  const data = {
    labels: ['Energy Generated','Energy Utilized', 'Energy Saved'],
    datasets: [
      {
        label: 'Energy',
        data: [props.generation, props.consumption, props.save],
        backgroundColor: [
          '#118B50',
          '#5DB996',
          '#E3F0AF',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%', // Creates the "donut" effect
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
