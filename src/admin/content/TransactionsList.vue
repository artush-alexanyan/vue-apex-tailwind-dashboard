<template>
  <div class="border border-gray-200 rounded-lg">
    <ul>
      <div
        class="w-full px-5 py-3 text-white rounded-lg bg-slate-800 flex items-center justify-between"
      >
        <span>Transaction</span>
        <button class="flex items-center text-xs">
          <span> Month </span>
          <i class="pi pi-chevron-down ml-3"></i>
        </button>
      </div>
      <li
        class="flex items-center justify-between px-2"
        v-for="item in transactions"
        :key="item.id"
      >
        <div class="flex items-center space-x-3 py-2">
          <div
            :class="
              item.type === 'income'
                ? 'bg-indigo-100 text-indigo-400'
                : 'bg-orange-100 text-orange-400'
            "
            class="h-8 w-8 rounded-full flex items-center justify-center"
          >
            <i
              :class="
                item.type === 'income' ? 'pi pi-upload' : 'pi pi-download'
              "
              alt="eu-flag"
            ></i>
          </div>
          <div class="flex flex-col space-y-1">
            <span class="font-semibold text-sm">
              {{ item.sender }}
            </span>
            <span class="text-gray-500 text-xs">
              {{ item.date }}
            </span>
          </div>
        </div>
        <div class="flex flex-col space-y-1">
          <span class="font-semibold text-sm">
            {{ item.amount }}
          </span>
          <span class="text-gray-500 text-xs">
            {{ item.currency }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TransactionsList",
  components: {},

  setup() {
    const transactions = ref([
      {
        id: 0,
        sender: "Artush Aleksanyan",
        date: "10.02.2024",
        amount: 2900,
        currency: "USD dollar",
        type: "income",
      },
      {
        id: 1,
        sender: "John Doe",
        date: "11.02.2024",
        amount: 150,
        currency: "EU euro",
        type: "income",
      },
      {
        id: 2,
        sender: "Jane Smith",
        date: "12.02.2024",
        amount: 500,
        currency: "AM dram",
        type: "outcome",
      },
      {
        id: 3,
        sender: "Alice Johnson",
        date: "13.02.2024",
        amount: 800,
        currency: "USD dollar",
        type: "income",
      },
      {
        id: 4,
        sender: "Bob Wilson",
        date: "14.02.2024",
        amount: 200,
        currency: "EU euro",
        type: "outcome",
      },
      {
        id: 5,
        sender: "Charlie Brown",
        date: "15.02.2024",
        amount: 350,
        currency: "AM dram",
        type: "income",
      },
      {
        id: 6,
        sender: "Eva Martinez",
        date: "16.02.2024",
        amount: 1200,
        currency: "USD dollar",
        type: "outcome",
      },
    ]);
    return { transactions };
  },
});
</script>
