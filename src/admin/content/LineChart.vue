<template>
  <div class="mx-auto">
    <VueApexCharts type="line" :options="options" :series="series" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "SendMoneyLineChart",
  components: { VueApexCharts },

  setup() {
    const options = ref({
      chart: {
        id: "vuechart-example",
        toolbar: {
          show: false,
        },
      },

      colors: ["#f6993f"],

      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      yaxis: {
        show: false,
      },
      annotations: {
        points: [],
      },
    });

    const series = ref([
      {
        name: "series-3",
        data: [
          30, 45, 50, 55, 50, 65, 80, 91, 65, 60, 55, 50, 49, 60, 70, 80, 70,
          65, 60, 55, 50, 60, 70, 80, 75, 70, 65, 60, 55, 60, 70, 80, 91, 30,
          45, 50, 55, 50, 65, 80, 91, 65, 60, 55, 50, 49, 60, 70, 80, 70, 65,
          60, 55, 50, 60, 70, 80, 75, 70, 65, 60, 55, 60, 70, 80, 91,
        ],
      },
    ]);

    return {
      options,
      series,
    };
  },
});
</script>
