import { pokedexConstants } from "./pokedex.constants";
const initialState = {
  isLoading: false,
  results: [],
  previous: "",
  next: "",
  count: 0,
};

/**
 * @description Redux Reducer for pokedex
 */
export default function pokedex(state = initialState, action) {
  let returnData = state;

  Object.values(pokedexConstants).map((ctx) => {
    if (ctx === action.type) {
      returnData = { ...returnData, ...action.payload };
    }
    return null;
  });

  return returnData;
}
