import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pokemonActions } from "../../pokemon/_redux/pokemon.action";

function DialogNicknameForm({ modalNickname, handleModal, poke }) {
  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokemon);

  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const handleSaving = (e) => {
    e.preventDefault();
    setErrorMessage();
    let savedPokemon = {
      nickname: nickname,
      name: poke.name,
      sprites: poke.sprites,
      types: poke.types
    };
    dispatch(pokemonActions?.savePokemon(savedPokemon));
  };

  //set error message if global state error
  useEffect(() => {
    if (pokemon.isError) {
      setErrorMessage(pokemon.message);
    } else {
      setErrorMessage();
    }
  }, [pokemon]);

  //remove error message
  useEffect(() => {
    if (!modalNickname) setErrorMessage();
  }, [modalNickname]);

  return (
    <Dialog open={modalNickname} onClose={handleModal}>
      <form onSubmit={handleSaving}>
        <DialogTitle>Pokemon Caught!</DialogTitle>
        <DialogContent>
          <TextField
            label="nickname"
            variant="standard"
            onChange={(e) => setNickname(e.target.value)}
            error={errorMessage ? true : false}
            helperText={errorMessage}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleModal();
              setErrorMessage();
            }}
            children="Release"
          />
          <Button type="submit" children="Save" />
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default DialogNicknameForm;
