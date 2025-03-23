import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

const CharacterDetail = () => {
  const { store, dispatch } = useGlobalReducer();
  const baseUrl = store.detailChar;
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
            <h3 className="text-center">{baseUrl.name}</h3>
            <p className="text-center">
              {`${baseUrl.name} was born in the year ${baseUrl.birth_year}. They
              have ${baseUrl.eye_color.toLowerCase()} eyes,
              ${baseUrl.hair_color.toLowerCase()} hair, and ${baseUrl.skin_color.toLowerCase()} skin. Their height is 
              ${baseUrl.height} cm, and they weigh ${baseUrl.mass} kg. Gender:
              ${baseUrl.gender}.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
