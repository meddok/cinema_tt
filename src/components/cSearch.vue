<template>
   <div>
      <search-field />
      <br>
      <check-box
          v-for="item in movieGenres"
          :key="item.genreId"
          :check-group="`flexCheckDefault-${item.genreId}`"
          @onCheckChange="onCheckChange(item)"
      >{{ item.genreName }}</check-box>
      {{selectedGenres}}
   </div>
</template>

<script>
import searchField from "@/components/ui/cSearchField";
import checkBox from "@/components/ui/cCheckBox";
import DATA from "@/data/movieGenres";

export default {
   name: 'cSearch',
   data() {
      return {
         movieGenres: DATA,
         selectedGenres: [],
      }
   },
   components: {
      searchField,
      checkBox
   },
   methods: {
      onCheckChange(genre) {
         const idGenre = this.selectedGenres.indexOf(genre)

         if ( idGenre !== -1 ) {
            this.selectedGenres.splice(idGenre, 1)
         } else {
            this.selectedGenres.push(genre)
         }
      }
   }
}
</script>