import {
  Stack,
  Box,
  Container,
  styled,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ButtonTypingPokemon from "../../../common/components/ButtonTypingPokemon";
import { pokemonActions } from "../../pokemon/_redux/pokemon.action";

const TitleBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "5vh",
  color: "#ede6de",
  backgroundColor: "#263a52",
  "&:hover": {
    backgroundColor: "#456479",
  },
  padding: theme.spacing(2),
}));

function PokemonDetail({ detail }) {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  const [capture, setCapture] = useState(false);
  const [pokeball, setPokeball] = useState(false);

  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const [modalNickname, setModalNickname] = useState(false);

  const handleModal = () => {
    setModalNickname((val) => !val);
    setErrorMessage();
  };

  const handleCapture = () => {
    let rngCapture;
    setCapture(false);
    setPokeball(true);
    rngCapture = Math.floor(Math.random() * 10 + 1);
    setTimeout(() => {
      if (rngCapture > 5) setCapture(true);
      setPokeball(false);
    }, 500);
  };

  const handleSaving = (e) => {
    let savedPokemon = {
      ...detail,
      nickname: nickname,
    };
    dispatch(pokemonActions?.savePokemon(savedPokemon));
  };

  useEffect(() => {
    if (capture) {
      handleModal();
    }
  }, [capture]);

  useEffect(() => {
    !pokemon.isError ? handleModal() : setErrorMessage(pokemon.message);
  }, [pokemon]);

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={6}
      sx={{ padding: "2em", minHeight: "80vh" }}
    >
      <TitleBox>
        <Stack direction="row" spacing={6} justifyContent="center">
          <Typography>#{detail?.id}</Typography>
          <Typography>{detail?.name.toUpperCase()}</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={6}
          sx={{ paddingTop: "1em" }}
        >
          {detail?.types?.map((val, index) => (
            <ButtonTypingPokemon
              key={index}
              type={val.type.name}
              children={val.type.name.toUpperCase()}
            />
          ))}
        </Stack>
      </TitleBox>
      <Box sx={{ maxHeight: "150", maxWidth: "150" }}>
        {!pokeball && (
          <img
            style={{ height: "146px", width: "auto", padding: "1px" }}
            src={detail?.sprites?.front_default}
            alt="front_default"
          />
        )}
        {pokeball && (
          <img
            style={{ height: "146px", width: "146px" }}
            src="/pokeball.gif"
            alt="pokebal"
          />
        )}
      </Box>
      <Container>
        {capture && (
          <Dialog open={modalNickname} onClose={handleModal}>
            <DialogTitle>Pokemon Caught!</DialogTitle>
            <DialogContent>
              <TextField
                label="nickname"
                variant="standard"
                onChange={(e) => setNickname(e.target.value)}
                error={errorMessage ? true : false}
                helperText={errorMessage}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleModal()} children="Release" />
              <Button
                onClick={() => handleSaving()}
                type="submit"
                children="Save"
              />
            </DialogActions>
          </Dialog>
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCapture}
        >
          CATCH
        </Button>
      </Container>
      <Container>
        <List>
          <Typography sx={{ fontWeight: "bold" }}>Moves</Typography>
          {detail?.moves?.map((val, index) => (
            <ListItem key={index}>
              <ListItemText primary={val.move.name.toUpperCase()} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Stack>
  );
}

export default PokemonDetail;
