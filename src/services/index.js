import axios from "axios";

const tokenAPI = process.env.VUE_APP_API_KEY;

const defaultApi = axios.create({
	baseURL: `https://imdb-api.com/en/API/MostPopularMovies/${tokenAPI}`,
});

export default defaultApi;
