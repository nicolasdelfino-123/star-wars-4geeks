import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars</span>
        </Link>
        <a href="#characters">
          <span>Characters</span>
        </a>
        <a href="#planets">
          <span>Planets</span>
        </a>
        <a href="#vehicles">
          <span>Vehicles</span>
        </a>

        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary dropdown-toggle">
              Favorites
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
