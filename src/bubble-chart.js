let popData = {
  datasets: [{
    label: ['Population'],
    data: [{
      x: 100,
      y: 0,
      r: 10
    }, {
      x: 60,
      y: 30,
      r: 20
    }, {
      x: 40,
      y: 60,
      r: 25
    }, {
      x: 80,
      y: 80,
      r: 50
    }, {
      x: 20,
      y: 30,
      r: 25
    }, {
      x: 0,
      y: 100,
      r: 5
    }],
    backgroundColor: "#9966FF",
    hoverBackgroundColor: 'rgba(0,0,0,0.5)',
    hoverBorderColor: "#9966FF",
    hoverBorderWidth: 1,
    hoverRadius: 1
  }]
};


export const planetChartData = {
  type: 'bubble',
  data: popData,
  options:  {
    responsive: true,
    lineTension: 1,
  }
}


export default planetChartData;