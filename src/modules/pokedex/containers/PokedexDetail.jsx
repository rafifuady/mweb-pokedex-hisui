import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "@mui/material";

//components
import ButtonTypingPokemon from "../../../common/components/ButtonTypingPokemon";
import DialogNicknameForm from "../../pokemon/containers/DialogNicknameForm";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokemon);

  const [capture, setCapture] = useState(false);
  const [pokeball, setPokeball] = useState(false);
  const [modalNickname, setModalNickname] = useState(false);

  const handleModal = () => {
    setModalNickname((val) => !val);
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

  // show modal if capture success
  useEffect(() => {
    if (capture) handleModal();
  }, [capture]);

  // close modal if save success
  useEffect(() => {
    if (!pokemon.isError) handleModal();
  }, [pokemon]);

  return (
    !pokemon.isLoading && (
      <Stack
        direction="column"
        alignItems="center"
        spacing={6}
        sx={{ padding: "2em", minHeight: "80vh" }}
      >
        <TitleBox>
          <Stack direction="row" spacing={6} justifyContent="center">
            <Typography>#{detail.id}</Typography>
            <Typography>{detail.name?.toUpperCase()}</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={6}
            sx={{ paddingTop: "1em" }}
          >
            {detail.types?.map((val, index) => (
              <ButtonTypingPokemon
                key={index}
                type={val.type.name}
                children={val.type.name?.toUpperCase()}
              />
            ))}
          </Stack>
        </TitleBox>
        <Box sx={{ maxHeight: "150", maxWidth: "150" }}>
          {!pokeball && (
            <img
              style={{ height: "146px", width: "auto", padding: "1px" }}
              src={detail.sprites?.front_default}
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
            <DialogNicknameForm
              poke={detail}
              handleModal={handleModal}
              modalNickname={modalNickname}
            />
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
            {detail.moves?.map((val, index) => (
              <ListItem key={index}>
                <ListItemText primary={val.move.name?.toUpperCase()} />
              </ListItem>
            ))}
          </List>
        </Container>
      </Stack>
    )
  );
}

export default PokemonDetail;
