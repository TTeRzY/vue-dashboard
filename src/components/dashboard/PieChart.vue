<template>
    <div class="chart-card">
        <h2 class="text-center">Vue.js Popularity on Github</h2>
        <hr>
        <canvas id="pie-chart"></canvas>
    </div>
</template>

<script>
  import Chart from 'chart.js';
  import pieChart from '../../pie-chart-data';
  export default {
    name: "pie-chart-data",
    data() {
      return {
        pieChart: pieChart
      }
    },
    methods: {
      createChart(chartId, chartData) {
        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options,
        });
      }
    },
    mounted() {
      this.createChart('pie-chart', this.pieChart);
    }
  }
</script>

<style scoped>
</style>