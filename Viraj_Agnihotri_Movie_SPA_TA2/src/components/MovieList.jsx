import MovieCard from "./MovieCard";

function MovieList({ movies, onDelete }) {
  if (movies.length === 0) {
    return <p className="empty-msg">No movies found. Add one! 🎥</p>;
  }
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default MovieList;
