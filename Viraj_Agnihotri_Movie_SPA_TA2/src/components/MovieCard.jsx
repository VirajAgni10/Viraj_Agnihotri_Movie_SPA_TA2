import { useNavigate } from "react-router-dom";

// ── MovieCard with Event Handling (click, delete, hover) ─────────────────────
function MovieCard({ movie, onDelete }) {
  const navigate = useNavigate();

  // Event: navigate to detail page on card click
  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  // Event: delete button – stop propagation so card click doesn't fire too
  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(`Delete "${movie.title}"?`)) {
      onDelete(movie.id);
    }
  };

  // Genre → colour mapping (inline event-driven styling)
  const genreColor = {
    "Sci-Fi": "#6c63ff",
    Action:   "#e74c3c",
    Comedy:   "#f39c12",
    Drama:    "#27ae60",
    Romance:  "#e91e8c",
    Thriller: "#2c3e50",
  };
  const badgeColor = genreColor[movie.genre] || "#888";

  return (
    <div className="movie-card" onClick={handleCardClick} title="Click to view details">
      <div className="card-header">
        <h3>{movie.title}</h3>
        <span className="genre-badge" style={{ background: badgeColor }}>
          {movie.genre}
        </span>
      </div>
      <p className="card-year">📅 {movie.year}</p>
      <p className="card-rating">⭐ {movie.rating} / 10</p>
      <div className="card-actions">
        <button className="btn-detail" onClick={(e) => { e.stopPropagation(); navigate(`/movie/${movie.id}`); }}>
          Details
        </button>
        <button className="btn-delete" onClick={handleDelete}>
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
