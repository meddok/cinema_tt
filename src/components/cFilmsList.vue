<template>
   <div>
      <title>Список фильмов</title>
      <div class="row">
         <div class="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex"
              v-for="(item, key) in filmInfo"
              :key="key"
         >
            <film-card
                class="mt-3 mb-3"
                :filmInfo = item
                @click.native="toSingleMovie(key)"
            />
         </div>
      </div>
   </div>
</template>

<script>
import FilmCard from "@/components/cFilmCard";

export default {
   name: 'cFilmsList',
   data() {
      return {
         filmInfo: [
            {
               image: 'https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default2.jpg',
               name: 'Card title',
               descr: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
               image: 'https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg',
               name: 'Card title',
               descr: "Some quick"
            },
            {
               image: 'https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg',
               name: 'Card title',
               descr: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
               image: 'https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg',
               name: 'Card title',
               descr: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
               image: 'https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg',
               name: 'Card title',
               descr: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
         ]
      }
   },
   components: {
      FilmCard
   },
   methods: {
      toSingleMovie(id) {
         this.$router.push({ name: 'FilmInfo', params: { id: id } })
      }
   }
}
</script>