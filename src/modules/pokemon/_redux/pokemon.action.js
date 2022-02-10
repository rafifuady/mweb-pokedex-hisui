import { pokemonConstants } from "./pokemon.constants";

export const pokemonActions = {
  savePokemon,
  getPokemonList,
  removePokemon,
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
        listSaved.push(payload);
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

function removePokemon(payload) {
  return async (dispatch) => {
    dispatch({
      type: pokemonConstants.REMOVE_REQUEST,
      payload: {
        isLoading: true,
      },
    });

    setTimeout(() => {
      let listPoke = localStorage.getItem("listPokemon");
      let filteredList;
      let parsedList;

      if (listPoke) {
        parsedList = JSON.parse(listPoke);

        filteredList = parsedList.filter((val) => {
          let parsedVal = JSON.parse(val);
          return parsedVal.nickname !== payload;
        });
      }

      if (filteredList.length < parsedList.length) {
        localStorage.setItem("listPokemon", JSON.stringify(filteredList));
        filteredList = filteredList.map((val) => {
          let parsedVal = JSON.parse(val);
          return parsedVal;
        });
        dispatch({
          type: pokemonConstants.REMOVE_SUCCESS,
          payload: {
            pokemonList: filteredList,
            message: "Success",
          },
        });
      } else {
        dispatch({
          type: pokemonConstants.REMOVE_FAILED,
          payload: {
            isError: true,
            message: "Failed to remove pokemon",
          },
        });
      }
    }, 300);
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
          pokemonList: parsedList,
        },
      });
    } else {
      return dispatch({
        type: pokemonConstants.LIST_FAILED,
        payload: {
          isLoading: false,
          isError: true,
          message: "Pokemon list not found",
        },
      });
    }
  };
}
