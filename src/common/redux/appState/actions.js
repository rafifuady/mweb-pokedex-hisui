import { appStateConstants } from "./constants";

export const appStateActions = {
  isAppReady,
};

function isAppReady() {
  return {
    type: appStateConstants.APP_READY,
    payload: { isAppReady: true },
  };
}
