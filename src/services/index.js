import axios from "axios";

const TOKEN_API = "k_3flv45px";

const defaultApi = axios.create({
	baseURL: `https://imdb-api.com/en/API/MostPopularMovies/${TOKEN_API}`,
});

export default defaultApi;
