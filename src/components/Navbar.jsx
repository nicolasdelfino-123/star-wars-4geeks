import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleRemoveFavorite = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: item,
    });
  };

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
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="favoritesDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites{" "}
              {store.favorites && store.favorites.length > 0
                ? `(${store.favorites.length})`
                : ""}
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="favoritesDropdown"
            >
              {store.favorites && store.favorites.length > 0 ? (
                store.favorites.map((item, index) => (
                  <li key={index}>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      {item.name}
                      <i
                        className="fa-solid fa-trash-can text-danger"
                        onClick={(e) => handleRemoveFavorite(e, item)}
                      ></i>
                    </a>
                  </li>
                ))
              ) : (
                <li>
                  <span className="dropdown-item">
                    Ningún favorito seleccionado
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
