<template>
  <div>
    <div
      class="flex items-center justify-between border-b border-gray-100 border-b border-b-gray-200 py-5 2xl:pl-0 sm:pl-5 pl-0 2xl:w-4/5 lg:w-3/4 md:w-2/3 ml-auto"
    >
      <div>
        <button class="md:hidden block ml-5"><i class="pi pi-bars"></i></button>
      </div>
      <div class="user-area flex items-center space-x-4">
        <div>
          <button
            class="h-9 w-9 rounded-full bg-white shadow flex items-center justify-center"
          >
            <span class="relative">
              <i class="pi pi-bell text-lg"></i>
              <span
                class="h-2 w-2 rounded-full bg-pink-600 absolute top-0 right-0"
              ></span>
            </span>
          </button>
        </div>
        <div class="user-avatar pr-5 relative" v-click-outside="hideUserInfo">
          <div
            class="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center"
          >
          <button @click="showUserInfo">
            <img
              src="https://xsgames.co/randomusers/assets/avatars/male/42.jpg"
              alt="UserAvatar"
              class="rounded-full"
            />
          </button>

          </div>
          <div v-if="showInfo" class="w-32 min-h-40 rounded-xl shadow bg-white border border-gray-200 absolute top-16 right-4">
            <ul class="p-2">
              <li v-for="item in list" :key="item.id" class="flex items-center my-4">
              <span class="h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">
                <i :class="item.icon"></i>
              </span>
              <span class="ml-2 text-gray-500"> {{ item.title }} </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeDashBoard",
  components: {},

  setup() {
    const list = ref([
{id:0, title: 'Profile', icon: 'pi pi-user'},
{id:1, title: 'Settings', icon: 'pi pi-cog'},
{id:2, title: 'Logout', icon: 'pi pi-sign-out'},
  ])
    const showInfo = ref(true);

    const hideUserInfo = () => {
      showInfo.value = false
    }

    const showUserInfo = () => {
      showInfo.value = !showInfo.value
    }
    return {
      list,
      showInfo,
      hideUserInfo,
      showUserInfo
    };
  },
});
</script>
