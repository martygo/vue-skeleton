import { ref, reactive } from "vue";
import defaultApi from "@/services";

export function useRequest() {
	const movies = ref({});
	const skeletonConfig = reactive({ numberCard: 8, isHidden: false });

	const fetchMovies = async () => {
		try {
			const response = await defaultApi.get();
			const data = await response.data.items;

			movies.value = data;
			skeletonConfig.isHidden = true;
		} catch (error) {
			console.error(error.response);
			skeletonConfig.isHidden = false;
		}
	};

	return { movies, skeletonConfig, fetchMovies };
}
