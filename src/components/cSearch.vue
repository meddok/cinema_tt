<template>
   <div>
      <search-field @onCatchValue="(e) => { formData.name = e }" />
      <br>
      <div class="container">
         <div class="row">
            <check-box
                class="col"
                v-for="item in movieGenres"
                :key="item.genreId"
                :check-group="`flexCheckDefault-${item.genreId}`"
                @onCheckChange="onCheckChange(item)"
            >{{ item.genreName }}</check-box>
         </div>
      </div>

      <div class="text-end mt-3">
         <button type="button"
                 class="btn btn-primary"
                 @click="onSearchClick"
         >Поиск</button>
      </div>
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
         formData: {
            name: null,
            genres: []
         }
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
      },

      onSearchClick() {
         if (!this.formData.name && !this.selectedGenres.length) {
            alert('Заполните хоть что-то!')
            return false;
         }
         this.formData.genres = [...this.selectedGenres.map(el => el.genreId)]
         this.$emit('onSearchSend', this.formData);
      }
   }
}
</script>