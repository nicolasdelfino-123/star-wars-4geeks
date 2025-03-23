export const initialStore = () => ({
  characters: [],
  planets: [],
  vehicles: [],
  favoritos: [],
  detailChar: {},
  detailPlanet: {},
  detailVehicles: {},
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "GET_CHARACTERS":
      return { ...store, characters: action.payload || [] }; // ✅ Asegura que siempre sea un array

    case "GET_PLANETS":
      return { ...store, planets: action.payload || [] };

    case "GET_VEHICLES":
      return { ...store, vehicles: action.payload || [] };

    case "CHARACTER_DETAIL":
      return { ...store, detailChar: action.payload || {} };

    case "PLANET_DETAIL":
      return { ...store, detailPlanet: action.payload || {} };

    case "VEHICLE_DETAIL":
      return { ...store, detailVehicles: action.payload } || {};

    default:
      return store; // ✅ Devuelve el estado actual en lugar de lanzar un error
  }
}
