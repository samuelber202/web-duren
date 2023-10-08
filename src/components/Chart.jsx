import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
    datasets: [
      {
        label: 'Data',
        data: [12, 19, 3, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#33FF8F'],
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default Chart;
