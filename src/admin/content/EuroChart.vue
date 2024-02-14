<template>
  <div class="flex flex-col rounded-lg">
    <div class="bg-indigo-50 p-3 rounded-xl">
      <div class="flex space-x-3 p-3">
        <div>
          <img
            src="@/assets/eu3.png"
            class="h-14 w-14 object-cover rounded-full"
            alt="eu-flag"
          />
        </div>
        <div class="flex flex-col space-y-2">
          <span class="font-semibold">2890</span>
          <span class="text-gray-500 text-sm">EU euro</span>
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
            <i class="pi pi-arrow-down-left"></i>
          </span>
          <span class="text-xs">23%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "EuroChart",
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
        colors: ["#EA580C", "#FFFF00", "#00FF00", "#0000FF", "#4B0082"],
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
        name: "series",
        data: [18, 35, 42, 58, 63, 27, 52, 39],
      },
    ]);

    return { options, series };
  },
});
</script>
