<template>
	<div class="movie" v-for="(movie, index) in movies" :key="index">
		<a
			:href="`https://www.imdb.com/title/${movie.id}`"
			target="_blank"
			class="movie-link"
		>
			<div class="movie-image">
				<img :src="movie.image" />
			</div>
			<div class="detail">
				<h3>{{ movie.title }}</h3>
				<div class="info">
					<span class="rated">{{ movie.imDbRating || "0" }}</span>
					<span class="divide">|</span>
					<span class="year">{{ movie.year }}</span>
					<span class="divide">|</span>
					<span class="crew">{{ movie.crew }}</span>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		movies: {
			type: Object,
			required: true
		}
	}
};
</script>

<style>
</style>