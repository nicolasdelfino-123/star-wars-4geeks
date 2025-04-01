export const initialStore = () => ({
  characters: [],
  planets: [],
  vehicles: [],
  favorites: [], // Cambiado de "favoritos" a "favorites" para consistencia
  detailChar: {},
  detailPlanet: {},
  detailVehicles: {},
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "GET_CHARACTERS":
      return { ...store, characters: action.payload || [] };
    case "GET_PLANETS":
      return { ...store, planets: action.payload || [] };
    case "GET_VEHICLES":
      return { ...store, vehicles: action.payload || [] };
    case "CHARACTER_DETAIL":
      return { ...store, detailChar: action.payload || {} };
    case "PLANET_DETAIL":
      return { ...store, detailPlanet: action.payload || {} };
    case "VEHICLE_DETAIL":
      return { ...store, detailVehicles: action.payload || {} };
    case "TOGGLE_FAVORITE":
      // Verifica si el elemento ya está en favoritos
      const exists = store.favorites.some(
        (fav) => fav.name === action.payload.name
      );
      return {
        ...store,
        favorites: exists
          ? store.favorites.filter((fav) => fav.name !== action.payload.name) // Remueve si ya está
          : [...store.favorites, action.payload], // Agrega si no está
      };
    default:
      return store;
  }
}
