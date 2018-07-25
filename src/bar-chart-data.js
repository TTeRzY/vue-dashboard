export const barChart = {
  type: 'bar',
  data: {
    labels: ["M", "T", "W", "R", "F", "S", "S"],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 28, 24, 7],
      backgroundColor: 'green'
    }, {
      label: 'oranges',
      data: [30, 29, 5, 5, 20, 3, 10],
      backgroundColor: 'orange'
    }]
  },
  options:  {
    responsive: true,
    lineTension: 1,
  }
};

export default barChart;