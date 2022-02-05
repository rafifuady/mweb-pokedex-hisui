import { pokedexConstants } from "../pokedex.constants";
import { pokedexService } from "../../services/pokedexService";

const pokedexServiceInstance = new pokedexService();

export const getList = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: pokedexConstants.LIST_REQUEST,
      payload: {
        isLoading: true,
        results: [],
      },
    });
    const { isError, message, data } = await pokedexServiceInstance.getList(
      payload
    );

    if (data) {
      dispatch({
        type: pokedexConstants.LIST_SUCCESS,
        payload: {
          isLoading: false,
          results: data.results,
          count: data.count,
          previous: data.previous,
          next: data.next,
        },
      });
    } else {
      dispatch({
        type: pokedexConstants.LIST_FAILED,
        payload: {
          isLoading: false,
          isError: isError,
          message: message,
        },
      });
    }
  };
};
