import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  console.log("estado global", store);

  //hacer fetch de personajes al cargar el componente

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
          payload: data.results.map((character) => ({
            name: character.name, // Accedemos directamente a 'name' de cada objeto en results
          })),
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
          payload: data.results.map((planet) => ({
            name: planet.name, // Accedemos directamente a 'name' de cada objeto en results
          })),
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
          throw new Error("error mal planetas, solucionar");
        }
        const data = await response.json();
        console.log("esta es la data", data);

        dispatch({
          type: "GET_VEHICLES",
          payload: data.results.map((vehicles) => ({
            name: vehicles.name, // Accedemos directamente a 'name' de cada objeto en results
          })),
        });
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
                <div className="card-body">
                  <h5 className="card-title">{char.name}</h5>
                  <p className="card-text">Gender: N/A</p>
                  <p className="card-text">Hair color: N/A</p>
                  <p className="card-text">Eyes color: N/A</p>
                  <a href="#" className="btn btn-primary ms-0">
                    Go somewhere
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
                <div className="card-body">
                  <h5 className="card-title">{planet.name}</h5>
                  <p className="card-text">Population: N/A</p>
                  <p className="card-text">Terrain: N/A</p>
                  <a href="#" className="btn btn-primary ms-0">
                    Go somewhere
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
                <div className="card-body">
                  <h5 className="card-title">{vehicle.name}</h5>
                  <p className="card-text">Gender: N/A</p>
                  <p className="card-text">Hair color: N/A</p>
                  <p className="card-text">Eyes color: N/A</p>
                  <a href="#" className="btn btn-primary ms-0">
                    Go somewhere
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
              Go somewhere
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
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
 */
