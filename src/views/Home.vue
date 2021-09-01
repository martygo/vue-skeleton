<template>
	<div class="main">
		<div class="movies-list">
			<div class="movie isLoading">
				<router-link to="/" class="movie-link">
					<div class="movie-image"></div>
					<div class="detail">
						<h3></h3>
						<div class="info">
							<span class="rated"></span>
							<span class="divide"></span>
							<span class="year"></span>
							<span class="divide"></span>
							<span class="crew"></span>
						</div>
					</div>
				</router-link>
			</div>

			<div class="movie" v-for="(movie, index) in movies" :key="index">
				<router-link to="/" class="movie-link">
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
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted } from "vue";
import { useRequest } from "@/composables/request";

export default {
	name: "Home",

	setup() {
		const { movies, fetchMovies } = useRequest();

		onMounted(() => {
			fetchMovies();
		});

		return { movies, fetchMovies };
	}
};
</script>

<style scoped>
.movies-list {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-top: 30px;
}

.movie {
	position: relative;
	width: 315px;
	background: #2a3642;
	margin: 0 0 9px 9px;
}

.movie-image img {
	width: 100%;
	object-fit: contain;
}

.detail {
	padding: 22px 0px 50px 10px;
	color: white;
}

.detail h3 {
	font-size: 17px;
	margin-bottom: 3px;
}

.info {
	display: flex;
	flex-direction: row;
	justify-items: center;
}

.info span {
	margin-right: 6px;
	font-size: 14px;
}

.rated {
	width: 30px;
	height: 30px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background: red;
	border: 2px solid #fff;
	border-radius: 4px;
	padding: 2px;
}

.movie.isLoading .movie-image {
	width: 100%;
	height: 430px;
	background: linear-gradient(110deg, #ebe6e6 8%, #c7c6c6 18%, #e4dbdb 33%);
	background-size: 200% 100%;
	animation: 1.5s shine linear infinite;
}

.movie.isLoading .detail {
	width: 100%;
	margin-top: 30px;
	background: linear-gradient(110deg, #ebe6e6 8%, #c7c6c6 18%, #e4dbdb 33%);
	background-size: 200% 100%;
	animation: 1.5s shine linear infinite;
}

.movie.isLoading span.rated {
	background: #ebe6e6;
	border: none;
	width: 0;
	height: 0;
}

@keyframes shine {
	to {
		background-position-x: -200%;
	}
}

@media screen and (max-width: 769px) {
	.movie {
		width: 100%;
		margin: 0 6px 6px 6px;
	}
}

@media screen and (max-width: 1024px) {
	.movie {
		width: 100%;
		margin: 0 16px 16px 16px;
	}
}
</style>
