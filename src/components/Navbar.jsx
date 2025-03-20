import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars</span>
        </Link>
        <Link to="/">
          <span>Characteres</span>
        </Link>
        <Link to="/">
          <span>Planets</span>
        </Link>
        <Link to="/">
          <span>Vehicles</span>
        </Link>

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
