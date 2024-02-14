<template>
  <div class="flex flex-col rounded-lg">
    <div class="bg-indigo-50 p-3 rounded-xl">
      <div class="flex space-x-3 p-3">
        <div>
          <img
            src="@/assets/am.png"
            class="h-14 w-14 rounded-full object-cover"
            alt="am-flag"
          />
        </div>
        <div class="flex flex-col space-y-2">
          <span class="font-semibold">5903</span>
          <span class="text-gray-500 text-sm">AM Dram</span>
        </div>
      </div>
      <div class="flex items-end justify-between">
        <VueApexCharts
          width="250"
          type="bar"
          :options="options"
          :series="series"
        />
        <div class="flex items-center space-x-2 pb-7">
          <span
            class="h-5 w-5 flex items-center justify-center rounded-full bg-slate-800 text-white text-[.6rem]"
          >
            <i class="pi pi-arrow-up-right"></i>
          </span>
          <span class="text-xs">33%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "AMDChart",
  components: { VueApexCharts },

  setup() {
    const options = ref({
      chart: {
        id: "vuechart-example",
        toolbar: {
          show: false,
        },
      },
      fill: {
        colors: ["#DC2626", "#FFFF00", "#00FF00", "#0000FF", "#4B0082"],
        // Rainbow-like colors: Red, Orange, Yellow, Green, Blue, Indigo
      },

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
        name: "series-2",
        data: [10, 20, 30, 40, 50, 60, 70, 80],
      },
    ]);

    return { options, series };
  },
});
</script>
