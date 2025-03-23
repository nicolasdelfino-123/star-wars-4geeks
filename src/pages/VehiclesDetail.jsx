import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

const VehiclesDetail = () => {
  const { store, dispatch } = useGlobalReducer();

  const baseUrl = store.detailVehicles;
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
            <h3 className="text-center">{store.detailVehicles.name}</h3>
            <p className="text-center">
              {`${baseUrl.name} is a ${baseUrl.vehicle_class} vehicle manufactured by ${baseUrl.manufacturer}. 
              This ${baseUrl.model} has a cargo capacity of ${baseUrl.cargo_capacity} units and can carry up 
              to ${baseUrl.passengers} passengers with a crew of ${baseUrl.crew}. It has a maximum speed 
              of ${baseUrl.max_atmosphering_speed} in the atmosphere and costs ${baseUrl.cost_in_credits} credits. 
              The vehicle's consumables can last for ${baseUrl.consumables}.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesDetail;
