import { Button, Paper, Stack, styled, Typography } from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import { Box } from "@mui/system";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { BackgroundItem } from "../common/components/BackgroundItem";
import { createGradient } from "../common/utils/createGradient";
import { pokedexActions } from "../modules/pokedex/_redux/pokedex.actions";
import { pokemonActions } from "../modules/pokemon/_redux/pokemon.action";

const ButtonAction = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#ede6de"),
  backgroundColor: "#ede6de",
  "&:hover": {
    backgroundColor: "#ebe7ca",
  },
}));

const AccentPaper = styled(Paper)(({ theme }) => ({
  color: theme.palette.getContrastText("#263a52"),
  backgroundColor: "#263a52",
  minWidth: "10em",
  textAlign: "center",
  paddingInline: theme.spacing(3),
  paddingBlock: theme.spacing(2),
}));

function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pokemonList } = useSelector((state) => state.pokemon);
  const { caughtData } = useSelector((state) => state.pokedex);

  useEffect(() => {
    dispatch(pokemonActions.getPokemonList());
  }, []);

  useEffect(() => {
    dispatch(pokedexActions.getCaught(pokemonList));
  }, [pokemonList]);

  return (
    <Stack direction="column">
      <Box
        sx={{
          minHeight: "5vh",
          background: createGradient("#3b3b33", "#896f3e"),
        }}
      />
      <Box
        sx={{
          minHeight: "95vh",
          background: createGradient("#263a52", "#456479"),
        }}
      >
        <Stack
          p={2}
          sx={{
            minHeight: "50vh",
          }}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <BackgroundItem elevation={5}>
            <Typography variant="h2" sx={{ fontWeight: 500 }}>
              POKEDEX
            </Typography>
          </BackgroundItem>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <AccentPaper>
              <Stack direction="row" spacing={2}>
                <CatchingPokemon />
                <Typography children={`${caughtData} Caught`} />
              </Stack>
            </AccentPaper>
          </Stack>
          <ButtonAction
            size="large"
            fullWidth
            variant="contained"
            onClick={() => navigate("pokedex")}
          >
            Open
          </ButtonAction>
        </Stack>
      </Box>
    </Stack>
  );
}

export default LandingPage;
