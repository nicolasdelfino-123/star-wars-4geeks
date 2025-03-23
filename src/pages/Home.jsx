import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate, useLocation } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  console.log("estado global", store);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    // Si existe un estado con la sección, hacemos scroll al elemento con ese ID
    if (location.state?.section) {
      const sectionId = location.state.section;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Hacemos scroll suave
      }
    }
  }, [location]);

  const handlerVehicle = async (url) => {
    console.log("!esta es la url de vehicles", url);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("error al obtener planetas", response);
      }
      const data = await response.json();

      dispatch({
        type: "VEHICLE_DETAIL",
        payload: data.result.properties,
      });
      navigate("./vehicleDetail");
    } catch (error) {
      console.error(error);
    }
  };

  const handlerPlanet = async (url) => {
    console.log("!esta es la url de planets", url);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("error al obtener planetas", response);
      }
      const data = await response.json();

      dispatch({
        type: "PLANET_DETAIL",
        payload: data.result.properties,
      });
      navigate("./planetDetail");
    } catch (error) {
      console.error(error);
    }
  };

  const handlerDetail = async (url) => {
    console.log("esta es la url", url);
    try {
      const response = await fetch(url);
      if (!response.message == "ok") {
        throw new Error("error en pedido", response.statusText);
      }

      const data = await response.json();

      dispatch({
        type: "CHARACTER_DETAIL",
        payload: data.result.properties,
      });

      navigate("./characterDetail");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function getCharacter() {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/`);
        if (!response.ok) {
          throw new Error("error malo, solucionar");
        }
        const data = await response.json();
        console.log("esta es la data", data);

        dispatch({
          type: "GET_CHARACTERS",
          payload: data.results,

          // Accedemos directamente a 'name' de cada objeto en results
        });
      } catch (error) {
        console.log("errorazo", error);
      }
    }
    getCharacter();

    async function getPlanets() {
      try {
        const response = await fetch(`https://www.swapi.tech/api/planets/`);
        if (!response.ok) {
          throw new Error("error mal planetas, solucionar");
        }
        const data = await response.json();
        console.log("esta es la data", data);

        dispatch({
          type: "GET_PLANETS",
          payload: data.results,
        });
      } catch (error) {
        console.log("errorazo", error);
      }
    }
    getPlanets();

    async function getVehicle() {
      try {
        const response = await fetch(`https://www.swapi.tech/api/vehicles/`);
        if (!response.ok) {
          throw new Error("error mal vehicles, solucionar");
        }
        const data = await response.json();
        console.log("esta es la data", data);

        dispatch({
          type: "GET_VEHICLES",
          payload: data.results,
        });
        console.log("esto viene de la api", store.characters);
      } catch (error) {
        console.log("errorazo", error);
      }
    }
    getVehicle();
  }, [dispatch]);

  return (
    <>
      <div id="characters" className="text-center mt-5">
        <h1 className="d-flex text-align-start m-5">Characters</h1>

        {/* Contenedor con scroll horizontal */}
        <div className="d-flex overflow-auto pb-3">
          {store.characters.map((char, index) => {
            return (
              <div
                key={index}
                className="card flex-shrink-0 m-3"
                style={{ width: "17rem" }}
              >
                <img src={rigoImageUrl} className="card-img-top" alt="imagen" />
                <div className="card-body text-start">
                  <h5 className="card-title">{char.name}</h5>

                  <button
                    href="#"
                    onClick={() => handlerDetail(char.url)}
                    className="btn btn-primary"
                  >
                    Learn More
                  </button>
                  <a href="#" className="btn btn-primary corazon">
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="planets" className="text-center mt-5">
        <h1 className="d-flex text-align-start m-5">Planets</h1>

        {/* Contenedor con scroll horizontal */}
        <div className="d-flex overflow-auto pb-3">
          {store.planets.map((planet, index) => {
            return (
              <div
                key={index}
                className="card flex-shrink-0 m-3"
                style={{ width: "17rem" }}
              >
                <img src={rigoImageUrl} className="card-img-top" alt="imagen" />
                <div className="card-body text-start">
                  <h5 className="card-title">{planet.name}</h5>

                  <a
                    href="#"
                    onClick={() => handlerPlanet(planet.url)}
                    className="btn btn-primary ms-0"
                  >
                    Learn More
                  </a>
                  <a href="#" className="btn btn-primary corazon">
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="vehicles" className="text-center mt-5">
        <h1 className="d-flex text-align-start m-5">Vehicles</h1>

        {/* Contenedor con scroll horizontal */}
        <div className="d-flex overflow-auto pb-3">
          {store.vehicles.map((vehicle, index) => {
            return (
              <div
                key={index}
                className="card flex-shrink-0 m-3"
                style={{ width: "17rem" }}
              >
                <img src={rigoImageUrl} className="card-img-top" alt="imagen" />
                <div className="card-body text-start">
                  <h5 className="card-tiStle">{vehicle.name}</h5>

                  <a
                    href="#"
                    onClick={() => handlerVehicle(vehicle.url)}
                    className="btn btn-primary ms-0"
                  >
                    Learn More
                  </a>
                  <a href="#" className="btn btn-primary corazon">
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
/*  <div className="text-center mt-5">
        <h1 className="d-flex text-align-start m-5">Planets</h1>
        <div className="card m-5" style={{ width: "18rem" }}>
          <img src={rigoImageUrl} className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example</p>
            <p className="card-text">Some quick example</p>
            <p className="card-text">Some quick example</p>
            <a href="#" className="btn btn-primary ms-0">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <h1 className="d-flex text-align-start m-5">Vehicles</h1>
        <div className="card m-5" style={{ width: "18rem" }}>
          <img src={rigoImageUrl} className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example</p>
            <p className="card-text">Some quick example</p>
            <p className="card-text">Some quick example</p>
            <a href="#" className="btn btn-primary ms-0">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
 */
