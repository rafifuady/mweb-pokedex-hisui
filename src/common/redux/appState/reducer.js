import { appStateConstants } from "./constants";

const initialState = {
  isAppReady: false,
};

export default function appState(state = initialState, action) {
  switch (action.type) {
    case appStateConstants.APP_READY:
      return {
        ...state,
        ...action.payload,
      };
    
    default:
      return state;
  }
}
