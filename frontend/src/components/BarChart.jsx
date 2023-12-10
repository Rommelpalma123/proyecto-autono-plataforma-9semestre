import React, { useEffect, useRef } from 'react';

export const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const clientByCountry = data.reduce((acc, client) => {
      const country = client.id_pais.nombre;
      acc[country] = acc[country] + 1 || 1;
      return acc;
    }, {});

    const config = {
      type: 'bar',
      data: {
        labels: Object.keys(clientByCountry),
        datasets: [
          {
            label: '# of Clients',
            data: Object.values(clientByCountry),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');
    new chart(ctx, config);
  }, [data]);

  return <canvas ref={chartRef} width={400} height={200}></canvas>;
};
