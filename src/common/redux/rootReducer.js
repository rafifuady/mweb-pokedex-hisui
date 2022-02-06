import { combineReducers } from "redux";
import { default as appState } from "./appState/reducer";
import { default as pokedex } from "../../modules/pokedex/_redux/pokedex.reducer";
import { default as pokemon } from "../../modules/pokemon/_redux/pokemon.reducer";
/**
 * please make constant and action per module
 */

export const rootReducer = combineReducers({
  appState,
  pokedex,
  pokemon
});
