import { useParams, useNavigate } from "react-router-dom";

// ── Movie Detail Page – useParams for dynamic routing ─────────────────────────
function MovieDetailPage({ movies }) {
  const { id }   = useParams();          // 🔑 React Router – URL param
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="detail-page">
        <h2>Movie not found!</h2>
        <button className="btn-back" onClick={() => navigate("/")}>← Back to Home</button>
      </div>
    );
  }

  const stars = "⭐".repeat(Math.round(movie.rating / 2));

  return (
    <div className="detail-page">
      <button className="btn-back" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-card">
        <h1>{movie.title}</h1>
        <div className="detail-meta">
          <span className="detail-badge">{movie.genre}</span>
          <span>📅 {movie.year}</span>
          <span>⭐ {movie.rating}/10</span>
        </div>
        <p className="detail-stars">{stars}</p>
        <p className="detail-desc">{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieDetailPage;
