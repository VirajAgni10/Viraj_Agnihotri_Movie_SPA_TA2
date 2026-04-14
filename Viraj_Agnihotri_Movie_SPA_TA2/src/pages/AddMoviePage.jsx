import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ── Add Movie Page – Controlled Form with Validation Event Handling ────────────
function AddMoviePage({ onAdd }) {
  const navigate = useNavigate();

  const [form, setForm]     = useState({ title: "", genre: "", rating: "", year: "", description: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const genres = ["Sci-Fi", "Action", "Comedy", "Drama", "Romance", "Thriller", "Horror", "Animation"];

  // Event: generic change handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate
  const validate = () => {
    const errs = {};
    if (!form.title.trim())       errs.title       = "Title is required.";
    if (!form.genre)              errs.genre        = "Please select a genre.";
    if (!form.rating || form.rating < 1 || form.rating > 10)
                                  errs.rating       = "Rating must be 1–10.";
    if (!form.year || form.year < 1900 || form.year > 2030)
                                  errs.year         = "Enter a valid year.";
    if (!form.description.trim()) errs.description  = "Description is required.";
    return errs;
  };

  // Event: form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    onAdd({ ...form, rating: Number(form.rating), year: Number(form.year) });
    setSuccess(true);
    setTimeout(() => navigate("/"), 1500);
  };

  // Event: cancel button
  const handleCancel = () => navigate("/");

  return (
    <div className="form-page">
      <h1 className="page-title">➕ Add New Movie</h1>

      {success && <div className="alert-success">✅ Movie added! Redirecting…</div>}

      <form className="movie-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Movie Title *</label>
          <input name="title" value={form.title} onChange={handleChange} placeholder="e.g. Dune" />
          {errors.title && <span className="err">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label>Genre *</label>
          <select name="genre" value={form.genre} onChange={handleChange}>
            <option value="">-- Select Genre --</option>
            {genres.map((g) => <option key={g}>{g}</option>)}
          </select>
          {errors.genre && <span className="err">{errors.genre}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Rating (1–10) *</label>
            <input type="number" name="rating" value={form.rating} onChange={handleChange} min="1" max="10" placeholder="8" />
            {errors.rating && <span className="err">{errors.rating}</span>}
          </div>
          <div className="form-group">
            <label>Release Year *</label>
            <input type="number" name="year" value={form.year} onChange={handleChange} min="1900" max="2030" placeholder="2024" />
            {errors.year && <span className="err">{errors.year}</span>}
          </div>
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="3" placeholder="Brief description of the movie..." />
          {errors.description && <span className="err">{errors.description}</span>}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-add">Add Movie</button>
          <button type="button" className="btn-cancel" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddMoviePage;
