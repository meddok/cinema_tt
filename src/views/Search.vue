<template>
	<div class="container">
		<title>Search</title>
		<search-field />
		<films-list />
	</div>
</template>

<script>
import FilmsList from "@/components/filmsList";
import searchField from "@/components/ui/searchField";

export default {
	name: "Search",
	components: {
		FilmsList,
		searchField
	}
}
</script>