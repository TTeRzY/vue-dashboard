import pattern from 'patternomaly';

let colors = [
  '#e377c2', '#2ca02c',
  '#17becf', '#7f7f7f', '#8c564b', '#3366cc'
];
let patterns = pattern.generate(colors);


export const pieChart = {
  type: 'pie',
  data: {
    datasets: [{
      data: [5294, 108634, 15171],
      backgroundColor: colors
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Watch',
      'Star',
      'Fork'
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
  }
}

export default pieChart;