import { pokemonConstants } from "./pokemon.constants";
const initialState = {
  listPokemon: []
};

/**
 * @description Redux Reducer for pokedex
 */
export default function pokemon(state = initialState, action) {
  let returnData = state;

  Object.values(pokemonConstants).map((ctx) => {
    if (ctx === action.type) {
      returnData = { ...returnData, ...action.payload };
    }
    return null;
  });

  return returnData;
}
