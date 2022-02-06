import { pokemonConstants } from "./pokemon.constants";

export const pokemonActions = {
  savePokemon,
  getPokemonList,
};

function savePokemon(payload) {
  return async (dispatch) => {
    const list = localStorage.getItem("listPokemon");
    dispatch({
      type: pokemonConstants.SAVE_REQUEST,
      payload: {
        isloading: true,
      },
    });

    if (payload?.nickname) {
      if (list) {
        // transform list to readable by JS
        let parsedList = JSON.parse(list);

        parsedList = parsedList.map((val) => {
          let parsedVal = JSON.parse(val);
          return parsedVal;
        });

        //check if nickname exist
        let nicknameExists = parsedList.find(
          (val) => val.nickname === payload.nickname
        );
        if (nicknameExists) {
          return dispatch({
            type: pokemonConstants.SAVE_FAILED,
            payload: {
              isError: true,
              message: "nickname has been used",
            },
          });
        } else {
          let listSaved = JSON.parse(list)
          listSaved.push(JSON.stringify(payload))
          localStorage.setItem("listPokemon", JSON.stringify(listSaved))
          return dispatch({
            type: pokemonConstants.SAVE_SUCCESS,
            payload: {
              isloading: false,
            },
          });
        }
      } else {
        let listSaved = [];
        listSaved.push(JSON.stringify(payload));
        localStorage.setItem("listPokemon", JSON.stringify(listSaved));
        return dispatch({
          type: pokemonConstants.SAVE_SUCCESS,
          payload: {
            isloading: false,
          },
        });
      }
    }
  };
}

function getPokemonList() {}
