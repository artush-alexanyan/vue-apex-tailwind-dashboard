<template>
  <div id="#app" class="outfit bg-gray-50">
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
.poppins {
 font-family: 'Poppins', sans-serif;
}
.outfit {
 font-family: 'Outfit', sans-serif;
}
</style>
