import axios from "axios";

const tokenAPI = "k_3flv45px";

const defaultApi = axios.create({
	baseURL: `https://imdb-api.com/en/API/MostPopularMovies/${tokenAPI}`,
});

export default defaultApi;
