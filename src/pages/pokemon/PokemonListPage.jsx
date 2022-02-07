import {
  Pagination,
  Stack,
  Typography,
  Paper,
  ButtonBase,
  styled,
  Button,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BackgroundItem } from "../../common/components/BackgroundItem";
import MainLayout from "../../common/layouts/MainLayout";
import { createGradient } from "../../common/utils/createGradient";
import { pokemonActions } from "../../modules/pokemon/_redux/pokemon.action";

const PokemonCard = styled(ButtonBase)(({ theme }) => ({
  minWidth: "30vw",
  minHeight: "10vh",
  color: theme.palette.getContrastText("#ede6de"),
  backgroundColor: "#ede6de",
  "&:hover": {
    backgroundColor: "#ebe7ca",
  },
  "&:active": {
    backgroundColor: "#ede6de",
  },
  paddingInline: theme.spacing(2),
}));

function PokemonListPage() {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pokemonActions.getPokemonList());
  }, []);

  return (
    <MainLayout>
      <Stack direction="column">
        <Box
          sx={{
            minHeight: "5vh",
            background: createGradient("#263a52", "#456479"),
          }}
        />
        <Box
          sx={{
            minHeight: "90vh",
            background: createGradient("#ede6de", "#ebe7ca"),
          }}
        >
          <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="stretch"
            spacing={2}
            p={2}
            sx={{ paddingBottom: "8em" }}
          >
            <Stack
              sx={{ minHeight: "80vh" }}
              direction="column"
              justifyContent="space-evenly"
              alignItems="stretch"
              spacing={2}
            >
              <BackgroundItem>
                <Stack
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  spacing={2}
                  sx={{ minHeight: "10vh" }}
                >
                  <PokemonCard disabled sx={{ fontWeight: "bold" }}>
                    NICKNAME
                  </PokemonCard>
                  <PokemonCard disabled sx={{ fontWeight: "bold" }}>
                    NAME
                  </PokemonCard>
                  <Button disabled></Button>
                </Stack>
              </BackgroundItem>
              {pokemon?.pokemonList?.map((val, index) => {
                return (
                  <BackgroundItem key={index}>
                    <Stack
                      direction="row"
                      justifyContent="space-evenly"
                      alignItems="center"
                      spacing={2}
                      sx={{ minHeight: "10vh" }}
                    >
                      <PokemonCard disabled>{val.nickname}</PokemonCard>
                      <PokemonCard disabled>{val.name}</PokemonCard>
                      <Button>X</Button>
                    </Stack>
                  </BackgroundItem>
                );
              })}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </MainLayout>
  );
}

export default PokemonListPage;