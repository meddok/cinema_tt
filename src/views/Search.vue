<template>
	<div class="container">
      <h1 class="title mb-4">Результаты поиска: "то что было введено"</h1>
		<films-list />
	</div>
</template>

<script>
import FilmsList from "@/components/cFilmsList";
import searchField from "@/components/ui/cSearchField";

export default {
	name: "Search",
	components: {
		FilmsList,
		searchField
	}
}
</script>