<template>
	<div class="films container">
		<films-list v-if="$route.name === 'Films'" />
		<router-view></router-view>
	</div>
</template>

<script>
import FilmsList from "@/components/cFilmsList";

export default {
	name: 'filmsPage',
	components: {
		FilmsList
	}
}
</script>