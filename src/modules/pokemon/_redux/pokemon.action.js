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
        isError: false,
        message: "",
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
          let listSaved = JSON.parse(list);
          listSaved.push(JSON.stringify(payload));
          localStorage.setItem("listPokemon", JSON.stringify(listSaved));
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

function getPokemonList() {
  return async (dispatch) => {
    dispatch({
      type: pokemonConstants.LIST_REQUEST,
      payload: {
        isloading: true,
      },
    });

    let listPoke = localStorage.getItem("listPokemon");

    if (listPoke) {
      // transform list to readable by JS
      let parsedList = JSON.parse(listPoke);

      parsedList = parsedList.map((val) => {
        let parsedVal = JSON.parse(val);
        return parsedVal;
      });

      return dispatch({
        type: pokemonConstants.LIST_SUCCESS,
        payload: {
          isLoading: false,
          pokemonList: parsedList
        }
      })
    } else {
      return dispatch({
        type: pokemonConstants.LIST_FAILED,
        payload: {
          isLoading: false,
          isError: true,
          message: "Pokemon list not found"
        }
      })
    }
  };
}
