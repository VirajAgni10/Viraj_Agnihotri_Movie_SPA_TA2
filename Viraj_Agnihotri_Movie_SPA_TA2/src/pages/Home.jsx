import { useState } from "react";
import MovieList from "../components/MovieList";

// ── Home Page – Search/Filter with Event Handling ─────────────────────────────
function Home({ movies, onDelete }) {
  const [search, setSearch]     = useState("");
  const [genre, setGenre]       = useState("All");
  const [sortBy, setSortBy]     = useState("title");

  const genres = ["All", ...new Set(movies.map((m) => m.genre))];

  // Event: search input change
  const handleSearchChange = (e) => setSearch(e.target.value);

  // Event: genre filter change
  const handleGenreChange = (e) => setGenre(e.target.value);

  // Event: sort change
  const handleSortChange = (e) => setSortBy(e.target.value);

  // Event: clear filters button
  const handleClear = () => { setSearch(""); setGenre("All"); setSortBy("title"); };

  // Derived filtered + sorted list
  const filtered = movies
    .filter((m) =>
      (genre === "All" || m.genre === genre) &&
      m.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortBy === "rating" ? b.rating - a.rating :
      sortBy === "year"   ? b.year   - a.year   :
      a.title.localeCompare(b.title)
    );

  return (
    <div>
      <h1 className="page-title">🎬 Movie Recommendations</h1>

      {/* ── Filter Bar ── */}
      <div className="filter-bar">
        <input
          className="search-input"
          type="text"
          placeholder="🔍 Search by title..."
          value={search}
          onChange={handleSearchChange}
        />
        <select value={genre} onChange={handleGenreChange}>
          {genres.map((g) => <option key={g}>{g}</option>)}
        </select>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="title">Sort: A–Z</option>
          <option value="rating">Sort: Rating ↓</option>
          <option value="year">Sort: Year ↓</option>
        </select>
        <button className="btn-clear" onClick={handleClear}>Clear</button>
      </div>

      <p className="result-count">{filtered.length} movie(s) found</p>
      <MovieList movies={filtered} onDelete={onDelete} />
    </div>
  );
}

export default Home;
