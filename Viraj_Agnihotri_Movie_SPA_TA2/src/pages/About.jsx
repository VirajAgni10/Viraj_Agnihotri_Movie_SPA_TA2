import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="about-page">
      <h1 className="page-title">ℹ️ About This App</h1>
      <div className="about-card">
        <h2>🎓 TA-2 Assignment – Event Handling & React Router</h2>
        <p><strong>Student:</strong> Viraj Agnihotri</p>
        <p><strong>Concepts demonstrated in this SPA:</strong></p>
        <ul>
          <li>✅ <strong>React Router v6</strong> – BrowserRouter, Routes, Route, NavLink</li>
          <li>✅ <strong>Dynamic Routing</strong> – <code>/movie/:id</code> with <code>useParams()</code></li>
          <li>✅ <strong>Programmatic Navigation</strong> – <code>useNavigate()</code></li>
          <li>✅ <strong>Active NavLink Styling</strong> – highlights the current route</li>
          <li>✅ <strong>Event Handling</strong> – onClick, onChange, onSubmit, stopPropagation</li>
          <li>✅ <strong>Controlled Components</strong> – all inputs tied to state</li>
          <li>✅ <strong>Form Validation</strong> – client-side error messages</li>
          <li>✅ <strong>Search + Filter + Sort</strong> – derived state from events</li>
          <li>✅ <strong>Delete with Confirmation</strong> – confirm dialog + state update</li>
          <li>✅ <strong>404 Route</strong> – catch-all wildcard path</li>
        </ul>
        <p><em>Built on top of the TA-1 Movie Recommendation SPA.</em></p>
        <button className="btn-back" onClick={() => navigate("/")}>← Back to Home</button>
      </div>
    </div>
  );
}

export default About;
