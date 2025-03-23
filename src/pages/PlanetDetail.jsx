import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

const PlanetDetail = () => {
  const { store, dispatch } = useGlobalReducer();

  const baseUrl = store.detailPlanet;
  return (
    <div className="container">
      <div className="row align-items-start">
        {/* Columna para la imagen */}
        <div className="col-md-4">
          <div className="card mt-5">
            <img src={rigoImageUrl} className="img-fluid" alt="imagen" />
          </div>
        </div>

        {/* Columna para el título y párrafo alineados arriba */}
        <div className="col-md-8 d-flex flex-column align-items-center">
          <div className="w-100 mt-3">
            <h3 className="text-center">{store.detailPlanet.name}</h3>
            <p className="text-center">
              {`${
                baseUrl.name
              } is a planet with a ${baseUrl.climate.toLowerCase()} climate and a terrain mainly consisting of ${baseUrl.terrain.toLowerCase()}. It has a diameter of ${
                baseUrl.diameter
              } kilometers, 
              a rotation period of ${
                baseUrl.rotation_period
              } hours, and an orbital period of ${baseUrl.orbital_period} days. 
               The planet's gravity is ${
                 baseUrl.gravity
               } standard, and it has a surface water coverage of ${
                baseUrl.surface_water
              }%. 
                The population is estimated at ${
                  baseUrl.population
                } inhabitants.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
