import { pokedexConstants } from "../pokedex.constants";
import { pokedexService } from "../../services/pokedexService";

const pokedexServiceInstance = new pokedexService();

export const getDetail = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: pokedexConstants.READ_REQUEST,
      payload: {
        isLoading: true,
        results: [],
      },
    });

    const { isError, message, data } = await pokedexServiceInstance.getDetail(
      payload
    );

    if (data) {
      dispatch({
        type: pokedexConstants.READ_SUCCESS,
        payload: {
          isLoading: false,
          detail: data
        }
      })
    } else {
      dispatch({
        type: pokedexConstants.READ_SUCCESS,
        payload: {
          isError: isError,
          message: message
        }
      })
    }
  };
};
