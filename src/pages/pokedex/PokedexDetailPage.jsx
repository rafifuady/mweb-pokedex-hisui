import { useEffect } from "react";
import { Box, LinearProgress, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import MainLayout from "../../common/layouts/MainLayout";
import PokeHead from "../../common/containers/PokeHead";
import { createGradient } from "../../common/utils/createGradient";
import PokemonDetail from "../../modules/pokedex/containers/PokedexDetail";

import { pokedexActions } from "../../modules/pokedex/_redux/pokedex.actions";

function PokedexDetailPage() {
  const { pokeId } = useParams();
  const dispatch = useDispatch();

  const { detail, isLoading } = useSelector((state) => state.pokedex);

  useEffect(() => {
    dispatch(pokedexActions.getDetail(pokeId));
    return () => {
      dispatch(pokedexActions.resetDetail());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeId]);

  return (
    <MainLayout>
      <Stack>
        <PokeHead />
        <Box
          sx={{
            minHeight: "95vh",
            background: createGradient("#ede6de", "#ebe7ca"),
          }}
        >
          {isLoading && (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          )}
          {!isLoading && detail && <PokemonDetail detail={detail} />}
        </Box>
      </Stack>
    </MainLayout>
  );
}

export default PokedexDetailPage;
