import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="brand">🎬 MovieSPA</span>
      <div className="nav-links">
        <NavLink to="/"      className={({ isActive }) => isActive ? "active" : ""} end>Home</NavLink>
        <NavLink to="/add"   className={({ isActive }) => isActive ? "active" : ""}>Add Movie</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
