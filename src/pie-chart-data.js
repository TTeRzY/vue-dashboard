import pattern from 'patternomaly';
import axios from 'axios';

const cryptoShare = [];
const cryptoNames = [];
const totalMarketCap = [];

export const marketCap =  axios.get('https://api.coinmarketcap.com/v2/global/?limit=10')
  .then(response => {
    if (response.data.data) {
      let data = response.data.data;
      totalMarketCap.push(data.quotes.USD.total_market_cap)
    }
  });

export const loadData =  axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=10')
  .then(response => {
    if (response.data.data) {
      let data = response.data.data;

      for(let key in data){
        cryptoShare.push((Math.round(Math.round(data[key].quotes.USD.market_cap) / totalMarketCap * 100) / 100) * 100);
        cryptoNames.push(data[key].name);
      }
    }
  });

let colors = [
  '#e377c2',
  '#2ca02c',
  '#17becf',
  '#7f7f7f',
  '#8c564b',
  '#3366cc',
  '#9966FF',
  '#1f77b4',
  '#ff7f0e',
  '#2ca02c',
  '#d62728'
];
let patterns = pattern.generate(colors);


export const pieChart = {
  type: 'pie',
  data: {
    datasets: [{
      data: cryptoShare,
      backgroundColor: colors
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: cryptoNames
  },
  options: {
    responsive: true,
    lineTension: 1,
  }
}

export default pieChart;