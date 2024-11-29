import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/tmdbApi";

import MovieCard from "../components/MovieCard";
import { Movie } from "./Home.interface";

const Home = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await getPopularMovies();
            console.log(response);
            setMovies(response.results);
        };
        fetchMovies();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6"> Popular Movies </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Home;