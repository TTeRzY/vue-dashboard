<template>
   <div class="charts-holder">
       <div class="charts col-lg-12 ml-auto mr-auto">
           <h2>Charts</h2>
           <div class="row">
               <div class="col-lg-6 chart-content">
                   <app-planet-chart></app-planet-chart>
               </div>
               <div class="col-lg-6 chart-content">
                   <app-pie-chart></app-pie-chart>
               </div>
               <div class="col-lg-6 chart-content">
                   <app-bar-chart></app-bar-chart>
               </div>
               <div class="col-lg-6 chart-content">
                   <app-radar-chart></app-radar-chart>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    import PlanetChart from './PlanetChart.vue'
    import PieChart from './PieChart.vue'
    import BarChart from './BarChart.vue'
    import RadarChart from './RadarChart.vue'
  export default {
    name: "home",
    components: {
      appPlanetChart: PlanetChart,
      appPieChart: PieChart,
      appBarChart: BarChart,
      appRadarChart: RadarChart
    }
  }
</script>

<style scoped>
    .chart-card{
        width: 100%;
        background: #fff;
        padding: 40px;
        margin-bottom: 27px;
    }

    .charts-holder{
        background: #F4F7FA;
        width: 100%;
        display: block;
    }

    .charts-holder h2{
        color: #212529;
        font-size: 28px;
        padding: 30px 0;
    }
</style>