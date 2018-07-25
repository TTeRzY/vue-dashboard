export const radarChart = {
  type: 'radar',
  data: {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
    datasets: [{
      label: 'apples',
      backgroundColor: "rgba(153,255,51,0.4)",
      borderColor: "rgba(153,255,51,1)",
      data: [76,56, 50, 72]
    },
      {
        label: 'orange',
        backgroundColor: "orange",
        borderColor: "#ddd",
        data: [36,26, 93, 72]
      }]
  }
}

export default radarChart