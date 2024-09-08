// export default function handler(req, res) {
//     const { timeRange } = req.query;
  
//     // Sample dummy data that changes based on time range
//     const dummyData = {
//       '1day': {
//         newLeads: 12,
//         conversions: 5,
//         closedDeals: 3,
//         revenue: 1200,
//         leadSources: [50, 30, 20],
//         revenueOverTime: [100, 200, 300, 400, 500, 600],
//       },
//       '1week': {
//         newLeads: 50,
//         conversions: 20,
//         closedDeals: 15,
//         revenue: 5200,
//         leadSources: [40, 35, 25],
//         revenueOverTime: [1000, 1200, 1100, 1500, 1800, 2000],
//       },
//       '1month': {
//         newLeads: 200,
//         conversions: 80,
//         closedDeals: 60,
//         revenue: 25000,
//         leadSources: [60, 25, 15],
//         revenueOverTime: [4000, 5000, 6000, 7000, 8000, 9000],
//       },
//       '1year': {
//         newLeads: 2000,
//         conversions: 800,
//         closedDeals: 600,
//         revenue: 300000,
//         leadSources: [70, 20, 10],
//         revenueOverTime: [20000, 25000, 30000, 35000, 40000, 45000],
//       },
//     };
  
//     res.status(200).json(dummyData[timeRange] || {});
//   }
// // export default function handler(req, res) {
// //     const { timeRange } = req.query;
  
// //     // Generate dummy data based on time range
// //     const data = {
// //       newLeads: Math.floor(Math.random() * 100),
// //       conversions: Math.floor(Math.random() * 50),
// //       closedDeals: Math.floor(Math.random() * 30),
// //       revenue: (Math.random() * 10000).toFixed(2),
// //       leadSources: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
// //       revenueOverTime: Array(6).fill().map(() => Math.random() * 10000),
// //     };
  
// //     res.status(200).json(data);
// //   }
  
// pages/api/dummy-data.js
export default function handler(req, res) {
  const { timeRange } = req.query;

  const dummyData = {
    newLeads: 100,
    conversions: 25,
    closedDeals: 10,
    revenue: 50000,
    leadSources: [300, 200, 500],
    revenueOverTime: [10000, 15000, 20000, 25000, 30000, 35000],
  };

  res.status(200).json(dummyData);
}
