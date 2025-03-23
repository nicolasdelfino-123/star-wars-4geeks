import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars</span>
        </Link>
        {/* Usamos 'state' para enviar el id de la sección */}
        <Link to="/" state={{ section: "characters" }}>
          <span>Characters</span>
        </Link>
        <Link to="/" state={{ section: "planets" }}>
          <span>Planets</span>
        </Link>
        <Link to="/" state={{ section: "vehicles" }}>
          <span>Vehicles</span>
        </Link>

        <div className="ml-auto">
          <Link to="#">
            <button className="btn btn-primary dropdown-toggle">
              Favorites
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
