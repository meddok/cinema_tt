<template>
   <div class="about">
      <div @click="$router.push({ name: 'Films' })">back</div>
      <h1 v-if="GET_MOVIE_SINGLE">This is an about page</h1>
      <app-error v-else />
   </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

import Error from '@/components/cError'

export default {
   name: 'singleFilm',
   components: {
      'app-error' : Error
   },
   computed: {
      ...mapGetters([
         'GET_MOVIE_SINGLE'
      ])
   },
   methods: {
      ...mapActions([
         'FETCH_MOVIE_SINGLE'
      ]),

      fetchMovieInfo() {
         const movieId = this.$route.params.id;
         this.FETCH_MOVIE_SINGLE(movieId)
      }
   },
   mounted() {
      this.fetchMovieInfo()
   }
}
</script>