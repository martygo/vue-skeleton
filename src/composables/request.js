import { ref } from "vue";
import defaultApi from "@/services";

export function useRequest() {
	const movies = ref({});

	const fetchMovies = async () => {
		const response = await defaultApi.get();
		const data = await response.data.items;

		movies.value = data;
	};

	return { movies, fetchMovies };
}
