<template>
	<div>
		<title>Список фильмов</title>
		<film-card
			v-for="item in 5"
			:key="item"
			:filmInfo = filmInfo
			@click.native="$router.push({ name: 'FilmInfo', params: { id: item } })"
		/>
	</div>
</template>

<script>
import FilmCard from "@/components/cFilmCard";

export default {
	name: 'cFilmsList',
	data() {
		return {
			filmInfo: {
				name: 'Card title',
				descr: "Some quick example text to build on the card title and make up the bulk of the card's content."
			},
		}
	},
	components: {
		FilmCard
	}
}
</script>