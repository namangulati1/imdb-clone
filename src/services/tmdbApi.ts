import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchMovies = async (endPoint: string, params = {}) => {
    const url = `${BASE_URL}${endPoint}`;
    const response = await axios.get(url, {
        params: {
            api_key: API_KEY,
            ...params
        }
    });
    return response.data;
};

export const getPopularMovies = () => fetchMovies("/movie/popular");
export const getTopRatedMovies = () => fetchMovies("/movie/top_rated");
export const getUpcomingMovies = () => fetchMovies("/movie/upcoming");
export const searchMovies = (query: string) => fetchMovies("/search/movie", { query });
export const getMovieDetails = (id: number) => fetchMovies(`/movie/${id}`);

