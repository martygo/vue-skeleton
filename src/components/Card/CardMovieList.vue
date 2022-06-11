<template>
	<div class="movies-list">
		<card-movie :movies="movies" />

		<card-movie-skeleton :skeletonHidden="skeletonConfig.isHidden" />
	</div>
</template>

<script>
import { onMounted } from "vue";
import { useRequest } from "@/composables/request";

import CardMovie from "./CardMovie.vue";
import CardMovieSkeleton from "./CardMovieSkeleton";

export default {
	components: { CardMovie, CardMovieSkeleton },
	name: "Home",

	setup() {
		const { movies, skeletonConfig, fetchMovies } = useRequest();

		onMounted(() => {
			fetchMovies();
		});

		return { movies, skeletonConfig, fetchMovies };
	}
};
</script>

<style>
.movie.skeleton .movie-image {
	width: 100%;
	height: 430px;
	animation: 1.5s pulse-bg linear infinite;
}

.movie.skeleton .detail h3 {
	width: 100%;
	height: 16px;
	animation: pulse-bg 1s infinite;
}

.movie.skeleton .info span {
	width: 100%;
	height: 16px;
	animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
	0% {
		background-color: #eee;
	}
	50% {
		background-color: #2a3642;
	}
	100% {
		background-color: rgb(206, 198, 198);
	}
}

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
