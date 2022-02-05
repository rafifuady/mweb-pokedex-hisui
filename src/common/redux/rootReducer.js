import { combineReducers } from "redux";
import { default as appState } from "./appState/reducer";
/**
 * please make constant and action per module
 */

export const rootReducer = combineReducers({
  appState
});
