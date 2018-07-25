<template>
  <div class="container-fluid" id="dashboard">
   <div class="row">
     <div class="col-lg-2">
       <div class="wrapper">
         <!-- Sidebar -->
         <nav id="sidebar">
           <div class="sidebar-header">
             <div class="logo">
               <p v-for="(key, index) in email">
                 <span v-if="key.email === loggedName">Hello, <span class="big-name">{{ key.firstName }}</span></span>
               </p>
             </div>
           </div>

           <ul class="side-navbar">
             <p>Main</p>
             <li tag="li" active-class="active">
               <a href="" @click.prevent="selectedComponent = 'appHome'">Home</a>
             </li>
             <li tag="li" active-class="active">
               <a href="" @click.prevent="selectedComponent = 'appCharts'">Charts</a>
             </li>
           </ul>

         </nav>
       </div>
     </div>

     <div class="charts-components">
       <component :is="selectedComponent"></component>
     </div>
   </div>
  </div>
</template>

<script>
  import Home from './Home.vue';
  import Charts from './Charts.vue';
  export default {
    data() {
      return {
        selectedComponent: 'appHome',
        loggedName: this.$store.state.userEmail,
        firstName: ''
      }
    },
    components: {
      appHome: Home,
      appCharts: Charts
    },
    computed: {
      email () {
        return !this.$store.getters.user ? false : this.$store.getters.user;
      }
    },
    created () {
      this.$store.dispatch('fetchUser');
    }
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
  .wrapper {
    display: flex;
    width: 100%;
  }

  #sidebar {
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 999;
    background: #7386D5;
    color: #fff;
    transition: all 0.3s;
  }

  #sidebar{
    position: fixed;
    height: 100vh;
    background: #393836;
    top: 0;
    left: 0;
    width: 200px;
    overflow: hidden;
  }

  .sidebar-header{
    background: #292929;
    padding: 20px;
    margin-bottom: 15px;
  }

  .logo p{
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
  }
  ul{
    list-style-type: none;
    padding: 0;
  }

  .big-name{
    font-size: 26px;
    display: block;
  }

  .side-navbar p {
    font-weight: 700;
    color: #adb5bd;
    font-size: .9rem;
    text-transform: uppercase;
    letter-spacing: .1em;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .side-navbar li a{
    position: relative;
    font-size: .9rem;
    font-weight: 300;
    color: #fff;
    text-decoration: none;
    width: 100%;
    display: block;
    padding: 12px;
  }

  .side-navbar li a:focus, .side-navbar li a:hover, .side-navbar li a[aria-expanded="true"]{
    background: #33b35a;
    color: #fff;
    text-decoration: none;
  }

  .side-navbar .active{
    background: #33b35a;
    color: #fff;
    text-decoration: none;
  }
</style>