export const initialStore = () => ({
  characters: [],
  planets: [],
  vehicles: [],
  favoritos: [],
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "GET_CHARACTERS":
      return { ...store, characters: action.payload || [] }; // ✅ Asegura que siempre sea un array

    case "GET_PLANETS":
      return { ...store, planets: action.payload || [] };

    case "GET_VEHICLES":
      return { ...store, vehicles: action.payload || [] };

    default:
      return store; // ✅ Devuelve el estado actual en lugar de lanzar un error
  }
}
