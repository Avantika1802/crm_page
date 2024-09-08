"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,    // For Pie chart
  Tooltip,      // For tooltips
  Legend,       // For legends
  CategoryScale, // For Line chart x-axis
  LinearScale,   // For Line chart y-axis
  PointElement,  // For Line chart points
  LineElement,   // For drawing lines
} from 'chart.js';

// Register the required components with Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('1month');
  const [data, setData] = useState({
    newLeads: 0,
    conversions: 0,
    closedDeals: 0,
    revenue: 0,
    leadSources: [0, 0, 0],
    revenueOverTime: [0, 0, 0, 0, 0, 0],
  });

  // Dummy API to simulate data fetching based on time range
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/dummy-data', {
  //         params: { timeRange },
  //       });
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, [timeRange]);
  // Inside useEffect in page.js
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/dummy-data', {
        params: { timeRange },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, [timeRange]);


  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header with Time Filter */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-700">CRM Dashboard</h1>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="1day">Last Day</option>
          <option value="1week">Last Week</option>
          <option value="1month">Last Month</option>
          <option value="1year">Last Year</option>
        </select>
      </div>

      {/* Cards for Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">New Leads</h2>
          <p className="text-2xl font-bold">{data.newLeads}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Conversions</h2>
          <p className="text-2xl font-bold">{data.conversions}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Closed Deals</h2>
          <p className="text-2xl font-bold">{data.closedDeals}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl font-bold">${data.revenue}</p>
        </div>
      </div>

      {/* Pie and Line Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Lead Distribution</h3>
          <Pie
            data={{
              labels: ['Facebook', 'Google', 'Direct'],
              datasets: [
                {
                  label: 'Lead Sources',
                  data: data.leadSources,
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
              ],
            }}
          />
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Revenue Over Time</h3>
          <Line
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'Revenue',
                  data: data.revenueOverTime,
                  borderColor: '#36A2EB',
                  fill: false,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
