import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddMoviePage from "./pages/AddMoviePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import About from "./pages/About";

// ── Shared movie state lives here so all pages can access it ──────────────────
const INITIAL_MOVIES = [
  { id: 1, title: "Inception",       genre: "Sci-Fi",  rating: 9, year: 2010,
    description: "A thief who steals corporate secrets through dream-sharing technology." },
  { id: 2, title: "Interstellar",    genre: "Sci-Fi",  rating: 8, year: 2014,
    description: "A team of explorers travel through a wormhole in space." },
  { id: 3, title: "The Dark Knight", genre: "Action",  rating: 9, year: 2008,
    description: "Batman faces the Joker, a criminal mastermind who brings chaos to Gotham." },
  { id: 4, title: "3 Idiots",        genre: "Comedy",  rating: 9, year: 2009,
    description: "Three friends reminisce about their college days and impact on their lives." },
  { id: 5, title: "Dangal",          genre: "Drama",   rating: 8, year: 2016,
    description: "A wrestler trains his daughters to become world-class wrestlers." },
];

function App() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [nextId, setNextId]  = useState(INITIAL_MOVIES.length + 1);

  // Event handler – Add a movie
  const handleAddMovie = (movie) => {
    const newMovie = { ...movie, id: nextId };
    setMovies((prev) => [...prev, newMovie]);
    setNextId((n) => n + 1);
  };

  // Event handler – Delete a movie
  const handleDeleteMovie = (id) => {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/"        element={<Home movies={movies} onDelete={handleDeleteMovie} />} />
          <Route path="/add"     element={<AddMoviePage onAdd={handleAddMovie} />} />
          <Route path="/movie/:id" element={<MovieDetailPage movies={movies} />} />
          <Route path="/about"   element={<About />} />
          {/* Catch-all 404 */}
          <Route path="*"        element={<h2 style={{textAlign:"center",marginTop:"4rem"}}>404 – Page Not Found</h2>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
