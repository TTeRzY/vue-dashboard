<template>
  <div class="container-fluid" id="dashboard" >
   <div class="row">
     <div class="col-lg-2" :class="{smallSidebar: sidebarWidth}">
       <button class="btn btn-default sidebar-btn" @click="sidebarWidth = !sidebarWidth">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 21">
           <g id="Group_94" data-name="Group 94" transform="translate(-312.083 -131.917)">
             <rect id="Rectangle_42" data-name="Rectangle 42" class="cls-1" width="25" height="5" transform="translate(312.083 131.917)"></rect>
             <rect id="Rectangle_47" data-name="Rectangle 47" class="cls-1" width="25" height="5" transform="translate(312.083 139.917)"></rect>
             <rect id="Rectangle_48" data-name="Rectangle 48" class="cls-1" width="25" height="5" transform="translate(312.083 147.917)"></rect>
           </g>
         </svg>
       </button>

       <div class="wrapper">
         <!-- Sidebar -->
         <nav class="sidebar">
           <div class="sidebar-header">
             <div class="logo">
                 <img class="img-fluid" src="../../assets/userlogo.png" alt="UserLogo">
               <p>
                  Hello,
                 <span class="big-name">{{ userName }}</span>
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
        userName: localStorage.getItem('userName'),
        sidebarWidth: false
      }
    },
    components: {
      appHome: Home,
      appCharts: Charts
    },
    computed: {
      email () {
        return !this.$store.getters.user ? false : this.$store.getters.user;
      },
      collapseSidebar(event) {
        return {
          smallSidebar: this.sidebarWidth
        }
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
  .charts-components{
    width: 100%;
  }

  .sidebar{
    display: none;
    position: fixed;
    height: 100vh;
    background: #393836;
    z-index: 999;
    top: 0;
    left: 0;
    width: 200px;
    overflow: hidden;
    transition: ease-in-out 0.5s;
  }

  .smallSidebar .sidebar{
    display: block;
    transition: ease-in-out 0.5s;
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

  .sidebar-btn{
    color: #ffffff;
    position: absolute;
    top: -50px;
    left: 0;
    z-index: 9999;
    background: inherit;
    transition: ease-in-out 0.5s;
  }

  .sidebar-btn svg{
    fill: #ffffff;
    height: 21px;
  }

  #dashboard{
    background: #F4F7FA;
  }

  @media only screen and (min-width: 1160px) {

    .charts-components{
      width: 80%;
      margin: auto;
    }


    .sidebar{
      display: block;
    }

    .sidebar-btn{
      left: auto;
      right: 40px;
    }

    .smallSidebar .sidebar{
      width: 70px;
      transition: ease-in-out 0.5s;
    }

    .smallSidebar .sidebar .big-name{
      font-size: 16px;
      text-align: center;
    }

    .smallSidebar .sidebar .sidebar-header{
      width: 100%;
      padding: 5px;
    }

    .smallSidebar .sidebar .side-navbar p{
      margin-left: 0;
    }

    .sidebar-header{
      background: #292929;
      padding: 20px;
      margin-bottom: 15px;
    }

    .smallSidebar .sidebar-btn{
      right: 170px;
      transition: ease-in-out 0.5s;
    }
  }
</style>