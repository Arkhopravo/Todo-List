import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const Graph = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Added for error handling
  const [chartInstance, setChartInstance] = useState(null); // Added to store the Chart instance

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://172.178.104.95/main/bar_chart_data');
      // Check for successful response status (e.g., 200)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err); // Store the error for potential display
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    if (data) {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy existing Chart instance
      }
      createChart();
    }
  }, [data]);

  const createChart = () => {
    const labels = Object.keys(data);
    const datasets = Object.keys(data[labels[0]]);

    const ctx = document.getElementById('myChart');
    const newChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: datasets.map((dataset) => ({
          label: dataset,
          data: labels.map((label) => data[label][dataset]),
          backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)}, 0.5)`,
          borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)}, 1)`,
          borderWidth: 1,
        })),
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    setChartInstance(newChartInstance); // Store the new Chart instance
  };

  return (
    <div className='bg-white p-4 mt-4 rounded-md stroke-neutral-50 shadow-md'>
      <h2 className='font-bold '>Prioritize Tasks done graph</h2>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error.message}</p>
      ) : (
        <canvas id="myChart" width="400" height="400"></canvas>
      )}
    </div>
  );
};

export default Graph;
