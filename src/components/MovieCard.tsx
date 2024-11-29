// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MovieCard = ({ movie }: { movie: any }) => {
    return (
        <div className="bg-white rounded shadow-lg overflow-hidden">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-60 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-sm text-gray-600">{movie.release_date}</p>
                <p className="text-yellow-500 font-bold">⭐️ {movie.vote_average}</p>
                <p className="text-gray-500">{movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieCard;