<template>
	<div class="main">
		<card-movie-list />
	</div>
</template>

<script>
import CardMovieList from "@/components/Card/CardMovieList";

export default {
	components: { CardMovieList },

	setup() {
		console.log(process.env.VUE_APP_API_KEY);
	}
};
</script>
