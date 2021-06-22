<template>
	<div class="home container">
      <div class="text-center mb-5">
         <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <cSearch @onSearchSend="onSearchSend($event)" />
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from 'vuex';
import cSearch from "@/components/cSearch";

export default {
	name: 'Home',
	components: {
		// HelloWorld,
      cSearch
	},
   methods: {
	   ...mapActions([
	       'FETCH_MOVIE_SEARCH'
      ]),

	   onSearchSend(formData) {
         this.FETCH_MOVIE_SEARCH(formData).then(() => {
            this.$router.push({ name: 'Search' })
         });
      }
   }
}
</script>
