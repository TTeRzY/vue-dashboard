<template>
    <div class="container-fluid">
        <section class="dashboard-counts section-padding">
            <div class="container-fluid">
                <div class="row">
                    <!-- Count item widget-->
                    <div class="col-xl-2">
                        <div class="wrapper count-title d-flex">
                            <div class="name"><strong class="text-uppercase">New Clients</strong><span>Last 10 days</span>
                                <div class="count-number">25</div>
                            </div>
                        </div>
                    </div>
                    <!-- Count item widget-->
                    <div class="col-xl-2">
                        <div class="wrapper count-title d-flex">
                            <div class="name"><strong class="text-uppercase">Work Orders</strong><span>Last 12 days</span>
                                <div class="count-number">400</div>
                            </div>
                        </div>
                    </div>
                    <!-- Count item widget-->
                    <div class="col-xl-2">
                        <div class="wrapper count-title d-flex">
                            <div class="name"><strong class="text-uppercase">New Quotes</strong><span>Last 5 months</span>
                                <div class="count-number">342</div>
                            </div>
                        </div>
                    </div>
                    <!-- Count item widget-->
                    <div class="col-xl-2">
                        <div class="wrapper count-title d-flex">
                            <div class="name"><strong class="text-uppercase">New Invoices</strong><span>Last 4 days</span>
                                <div class="count-number">123</div>
                            </div>
                        </div>
                    </div>
                    <!-- Count item widget-->
                    <div class="col-xl-2">
                        <div class="wrapper count-title d-flex">
                            <div class="name"><strong class="text-uppercase">Open Cases</strong><span>Last 7 months</span>
                                <div class="count-number">92</div>
                            </div>
                        </div>
                    </div>
                    <!-- Count item widget-->
                    <div class="col-xl-2">
                        <div class="wrapper count-title d-flex">
                            <div class="name">
                                <strong class="text-uppercase">New Cases</strong>
                                <span>Last 12 days</span>
                                <div class="count-number">70</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style scoped>
    .section-padding {
        padding: 3rem 0;
    }

    .d-flex {
        display: -ms-flexbox !important;
        display: flex !important;
    }

    .dashboard-counts {
        color: #333;
    }


    .dashboard-counts .count-title span {
        font-size: 0.8em;
        color: #aaa;
        display: inline-block;
    }

    .dashboard-counts strong {
        font-size: 0.8em;
    }

    .dashboard-counts .count-number{
        font-size: 1.8em;
    }

    .wrapper .name{
        width: 100%;
        display: flex;
        display: -ms-flex;
        justify-content: space-between;
        align-items: center;
    }


    @media only screen and (min-width: 1024px) {

        .dashboard-counts .count-title span{
            display: block;
        }

        .dashboard-counts strong {
            font-size: 1em;
        }

        .dashboard-counts .count-number{
            font-size: 3em;
        }

        .wrapper .name{
            display: block;
        }

    }

</style>