import { useEffect } from "react";
import { Box, styled, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import MainLayout from "../../common/layouts/MainLayout";
import { createGradient } from "../../common/utils/createGradient";
import PokemonDetail from "../../modules/pokedex/containers/PokemonDetail";

import { pokedexActions } from "../../modules/pokedex/_redux/pokedex.actions";

function PokedexDetailPage() {
  const { pokeId } = useParams();
  const dispatch = useDispatch();

  const { detail } = useSelector((state) => state.pokedex);

  useEffect(() => {
    dispatch(pokedexActions.getDetail(pokeId));
  }, [pokeId]);

  return (
    <MainLayout>
      <Stack>
        <Box
          sx={{
            minHeight: "5vh",
            background: createGradient("#263a52", "#456479"),
          }}
        />
        <Box
          sx={{
            minHeight: "95vh",
            background: createGradient("#ede6de", "#ebe7ca"),
          }}
        >
          {detail && <PokemonDetail detail={detail} />}
        </Box>
      </Stack>
    </MainLayout>
  );
}

export default PokedexDetailPage;
