<template>
  <div class="p-4 rounded-xl bg-indigo-50 mt-10">
    <div class="flex items-center justify-between py-2 font-semibold">
      <span>Send money</span>
      <span class="text-sm underline">View all</span>
    </div>
    <div>
      <div
        class="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 2xl:gap-10 lg:gap-5 gap-3 rounded-lg"
      >
        <div
          class="flex flex-col px-2 bg-white rounded-xl p-2"
          v-for="item in projects"
          :key="item.id"
        >
          <div class="flex items-center space-x-3 py-2">
            <div
              class="h-8 w-8 rounded-full flex items-center justify-center bg-indigo-500 text-white text-xs"
            >
              <i :class="item.icon" alt="eu-flag"></i>
            </div>
            <div class="flex flex-col pb-5">
              <span class="font-semibold text-sm">
                {{ item.title }}
              </span>
              <span class="text-gray-500 text-xs">
                {{ item.type }}
              </span>
            </div>
          </div>
          <div class="flex items-center justify-between space-y-1">
            <span class="font-semibold text-sm">
              {{ item.amount }}
            </span>
            <span class="text-gray-500 text-xs">
              {{ item.currency }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProjectsList",
  components: {},

  setup() {
    const projects = ref([
      {
        id: 0,
        title: "Salary",
        icon: "pi pi-dollar",
        amount: 2900,
        currency: "Euro",
        type: "Regular payment",
      },
      {
        id: 1,
        title: "Web project",
        icon: "pi pi-globe",
        amount: 3800,
        currency: "USD dollar",
        type: "Unregular payment",
      },
      {
        id: 2,
        title: "App Project",
        icon: "pi pi-phone",
        amount: 5300,
        currency: "AM dram",
        type: "Regular payment",
      },
    ]);
    return { projects };
  },
});
</script>
