import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

const PlanetDetail = () => {
  const { store, dispatch } = useGlobalReducer();
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
            <p className="text-center">¡planet!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
