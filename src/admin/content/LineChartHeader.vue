<template>
  <div>
    <div
      class="flex items-center justify-between pb-4 border-b border-gray-200"
    >
      <span class="text-lg font-semibold">Send money</span>
      <div class="flex items-center space-x-3">
        <button class="flex items-center text-sm text-gray-500">
          <span> USD </span>
          <i class="pi pi-chevron-down text-xs font-semibold ml-1"></i>
        </button>
        <button
          class="py-2 px-4 rounded-lg border border-gray-500 text-center text-sm text-gray-500"
        >
          Send
        </button>
      </div>
    </div>
    <div class="flex items-center justify-between pt-1">
      <span class="text-xs text-gray-400">Today</span>
      <span class="font-semibold text-sm">1 USD = 405 AMD</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LineChartHeader",
  components: {},

  setup() {
    return {};
  },
});
</script>
