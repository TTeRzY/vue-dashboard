<template>
    <div class="chart-card">
        <h2 class="text-center">Bubble Chart Example</h2>
        <hr>
        <canvas id="planet-chart"></canvas>
    </div>
</template>

<script>
  import Chart from 'chart.js';
  import planetChartData from '../../bubble-chart.js';
  export default {
    name: "planet-chart",
    data() {
      return {
        planetChartData: planetChartData
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
      this.createChart('planet-chart', this.planetChartData);
    }
  }
</script>

<style scoped>

</style>