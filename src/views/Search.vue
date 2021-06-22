<template>
	<div class="container">
		<title>Search</title>
		<search-field />
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