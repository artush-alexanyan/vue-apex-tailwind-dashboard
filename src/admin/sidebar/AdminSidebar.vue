<template>
  <div>
    <aside>
      <div
        class="fixed top-0 left-0 2xl:w-1/6 lg:w-1/4 md:w-1/3 w-full md:block hidden"
      >
        <div
          class="mt-5 ml-5 rounded-xl shadow md:z-0 z-30 bg-white p-5 lg:h-[53rem] md:h-[53rem] h-screen relative"
        >
          <div class="sidebar-header grid place-items-center space-y-4 py-3">
            <div>
              <p class="text-xl font-semibold">iBankKo</p>
            </div>
            <div class="user-avatar">
              <div
                class="h-20 w-20 rounded-full border border-gray-200 flex items-center justify-center"
              >
                <img
                  src="https://xsgames.co/randomusers/assets/avatars/male/42.jpg"
                  alt="UserAvatar"
                  class="rounded-full"
                />
              </div>
            </div>
            <div class="text-center">
              <p class="font-semibold text-lg">Artush Alexanyan</p>
              <span class="text-gray-400 text-xs pt-2">Web developer</span>
            </div>
          </div>

          <div class="sidebar-list grid place-items-center mt-5">
            <div>
              <div>
                <ul class="flex flex-col">
                  <li
                    @click="changeList(index)"
                    class="px-6 py-2 my-2 rounded-lg text-lg cursor-pointer flex items-center transition duration-500"
                    :class="
                      item.id === currentList
                        ? 'bg-slate-800 text-white'
                        : 'text-gray-500'
                    "
                    v-for="(item, index) in sidebarList"
                    :key="item.id"
                  >
                    <i :class="item.icon" class="mr-2"></i>
                    <span> {{ item.title }} </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="user-signout flex justify-center absolute bottom-6 md:left-20 left-32"
          >
            <div>
              <button class="flex items-center text-gray-600">
                <i class="pi pi-sign-out mr-2"></i>
                <span>Sign out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import "primeicons/primeicons.css";

export default defineComponent({
  name: "AdminSidebar",
  components: {},

  setup() {
    const currentList = ref(0);
    const sidebarList = ref([
      { id: 0, title: "Overview", path: "/", icon: "pi pi-th-large" },
      { id: 1, title: "Analytics", path: "/", icon: "pi pi-chart-bar" },
      { id: 2, title: "Card", path: "/", icon: "pi pi-credit-card" },
      { id: 3, title: "Manage", path: "/", icon: "pi pi-user" },
      { id: 4, title: "Settings", path: "/", icon: "pi pi-cog" },
      { id: 5, title: "Support", path: "/", icon: "pi pi-phone" },
    ]);

    const changeList = (index) => {
      currentList.value = index;
    };

    return {
      sidebarList,
      currentList,
      changeList,
    };
  },
});
</script>
