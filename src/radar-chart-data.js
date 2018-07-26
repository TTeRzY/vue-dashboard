export const radarChart = {
  type: 'radar',
  data: {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
    datasets: [{
      label: 'Player1',
      backgroundColor: "rgba(153,255,51,0.4)",
      borderColor: "rgba(153,255,51,1)",
      data: [76,56, 10, 72]
    },
      {
        label: 'Player2',
        backgroundColor: "rgba(0,0,0,0.4)",
        borderColor: "#ddd",
        data: [66,96, 93, 72]
      }]
  }
}

export default radarChart