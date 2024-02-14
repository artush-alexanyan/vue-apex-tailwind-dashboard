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
        <div class="user-avatar pr-5">
          <div
            class="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center"
          >
            <img
              src="https://xsgames.co/randomusers/assets/avatars/male/42.jpg"
              alt="UserAvatar"
              class="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeDashBoard",
  components: {},

  setup() {
    return {};
  },
});
</script>
