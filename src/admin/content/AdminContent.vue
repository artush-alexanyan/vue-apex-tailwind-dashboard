<template>
  <div class="flex flex-col w-full ml-auto h-screen">
    <AdminHeader />
    <div class="flex-grow p-4 overflow-y-auto">
      <div
        class="main 2xl:pl-0 sm:pl-5 pl-0 bg-gray-50 overflow-y-auto 2xl:w-4/5 lg:w-3/4 md:w-2/3 ml-auto"
      >
        <h3 class="font-semibold text-lg">Account</h3>
        <div
          class="charts grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-6 gap-2 py-3"
        >
          <USAChart />
          <EuroChart />
          <AMDChart />
        </div>
        <div class="grid 2xl:grid-cols-3 grid-cols-1 gap-10 py-5">
          <div class="2xl:col-span-2">
            <div class="grid grid-cols-1">
              <LineChartHeader />
              <LineChart />
              <div
                class="flex items-center justify-between pt-1 border-t border-t-gray-200"
              >
                <span class="text-xs text-gray-400">A month ago</span>
                <span class="font-semibold text-sm">Today</span>
              </div>
              <ProjectsList />
            </div>
          </div>
          <div class="2xl:col-span-1">
            <TransactionsList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AdminHeader from "../header/AdminHeader.vue";
import USAChart from "./USAChart.vue";
import EuroChart from "./EuroChart.vue";
import AMDChart from "./AMDChart.vue";
import TransactionsList from "./TransactionsList.vue";
import ProjectsList from "./ProjectsList.vue";
import LineChart from "./LineChart.vue";
import LineChartHeader from "./LineChartHeader.vue";

export default defineComponent({
  name: "AdminContent",
  components: {
    AdminHeader,
    USAChart,
    EuroChart,
    AMDChart,
    TransactionsList,
    ProjectsList,
    LineChart,
    LineChartHeader,
  },
});
</script>

<style scoped></style>
