<template>
   <div class="movie-item">
      <button type="button"
              class="btn btn-secondary mb-4"
              @click="onBackClick()"
      >Назад к фильмам</button>

      <div class="row" v-if="GET_MOVIE_SINGLE">
         <div class="col-12 col-sm-5 col-md-4">
            <div class="movie-item__poster mb-4">
               <img :src="GET_MOVIE_SINGLE.image" :alt="GET_MOVIE_SINGLE.name">
            </div>
         </div>
         <div class="col-12 col-sm-7 col-md-8">
            <h1 class="movie-item__name">{{ GET_MOVIE_SINGLE.name }}</h1>
            <div class="movie-item__descr">{{ GET_MOVIE_SINGLE.descr }}</div>
         </div>
      </div>
      <app-error v-else />
   </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex';

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

      ...mapMutations([
         'SET_MOVIE_SINGLE'
      ]),

      fetchMovieInfo() {
         this.SET_MOVIE_SINGLE({
            image: 'https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg',
            name: 'Card title',
            descr: "Some quick"
         })
         // const movieId = this.$route.params.id;
         // this.FETCH_MOVIE_SINGLE(movieId)
      },

      onBackClick() {
         this.$router.push({ name: 'Films' });
      }
   },
   mounted() {
      this.fetchMovieInfo()
   }
}
</script>