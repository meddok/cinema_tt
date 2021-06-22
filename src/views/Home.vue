<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png">
    <search-field />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import searchField from "@/components/ui/searchField";

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    searchField
  }
}
</script>
