<template>
	<div class="home container">
      <div class="text-center mb-5">
         <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <cSearch />
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import cSearch from "@/components/cSearch";

export default {
	name: 'Home',
	components: {
		// HelloWorld,
      cSearch
	}
}
</script>
