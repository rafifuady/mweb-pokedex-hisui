import { pokedexConstants } from "../pokedex.constants";

export const getCaught = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: pokedexConstants.CAUGHT_REQUEST,
      payload: {isLoading : true}
    })

    let uniqueCaught
    uniqueCaught = [...new Set(payload?.map(item => item.name))]

    if (uniqueCaught) {
      dispatch({
        type: pokedexConstants.CAUGHT_SUCCESS,
        payload: {
          isLoading: false,
          caughtData: uniqueCaught.length
        }
      })
    } else {
      dispatch({
        type: pokedexConstants.CAUGHT_FAILED,
        payload: {
          isLoading: false,
          isError: true,
          message: "get data failed"
        }
      })
    }
  };
};
