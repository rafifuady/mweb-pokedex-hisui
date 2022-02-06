import { getList } from "./getList/action";
import { getDetail } from "./getDetail/action";
import { pokedexConstants } from "./pokedex.constants";

export const pokedexActions = {
  getList,
  getDetail,
  resetDetail
}

function resetDetail() {
  return async (dispatch)=> {
    dispatch({
      type: pokedexConstants.READ_RESET,
      payload: {
        detail: {}
      }
    })
  }
}