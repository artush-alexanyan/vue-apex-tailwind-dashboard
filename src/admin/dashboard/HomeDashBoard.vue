<template>
  <div class="bg-gray-50 h-screen">
    <AdminSidebar />
    <AdminContent />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AdminSidebar from "../sidebar/AdminSidebar.vue";
import AdminContent from "../content/AdminContent.vue";

export default defineComponent({
  name: "HomeDashBoard",
  components: {
    AdminSidebar,
    AdminContent,
  },

  setup() {
    return {};
  },
});
</script>
