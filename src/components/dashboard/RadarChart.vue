<template>
    <div class="chart-card">
        <h2 class="text-center">Radar Chart Example</h2>
        <hr>
        <canvas id="radar-chart"></canvas>
    </div>
</template>

<script>
  import Chart from 'chart.js';
  import radarChart from '../../radar-chart-data';
  export default {
    name: "radar-chart",
    data() {
      return {
        radarChart: radarChart
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
      this.createChart('radar-chart', this.radarChart);
    }
  }
</script>

<style scoped>

</style>