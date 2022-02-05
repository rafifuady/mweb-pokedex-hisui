import {
  Pagination,
  Stack,
  Typography,
  ButtonBase,
  styled,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BackgroundItem } from "../../common/components/BackgroundItem";
import MainLayout from "../../common/layouts/MainLayout";
import { createGradient } from "../../common/utils/createGradient";
import { pokedexActions } from "../../modules/pokedex/_redux/pokedex.actions";

const PokemonCard = styled(ButtonBase)(({ theme }) => ({
  width: "100%",
  minHeight: "10vh",
  color: theme.palette.getContrastText("#ede6de"),
  backgroundColor: "#ede6de",
  "&:hover": {
    backgroundColor: "#ebe7ca",
  },
  paddingInline: theme.spacing(2),
}));

function PokedexListPage() {
  const pokedex = useSelector((state) => state.pokedex);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const limit = 5;
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setOffset((newPage - 1) * 5);
  };

  useEffect(() => {
    dispatch(
      pokedexActions.getList({
        limit,
        offset,
      })
    );
  }, [limit, offset]);

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
            minHeight: "95vh",
            background: createGradient("#ede6de", "#ebe7ca"),
          }}
        >
          <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="stretch"
            spacing={2}
            p={2}
          >
            <Stack
              sx={{ minHeight: "80vh" }}
              direction="column"
              justifyContent="space-evenly"
              alignItems="stretch"
            >
              {pokedex.results.map((val, index) => (
                <BackgroundItem key={index} sx={{ height: "10vh" }}>
                  <PokemonCard
                    onClick={() =>
                      navigate(
                        `/pokedex/${
                          page === 1 ? index + 1 : limit * page + index + 1
                        }`
                      )
                    }
                  >
                    <Container>
                      <Typography
                        component="div"
                        variant="subtitle"
                        children={`# ${
                          page === 1 ? index + 1 : limit * page + index + 1
                        }`}
                      />
                    </Container>
                    <Container>
                      <Typography
                        component="div"
                        children={val.name.toUpperCase()}
                      />
                    </Container>
                    <Container>
                      <Typography component="div" children={`Caught : 1`} />
                    </Container>
                  </PokemonCard>
                </BackgroundItem>
              ))}
            </Stack>
            <Pagination
              count={Math.ceil(pokedex.count / 5)}
              page={page}
              onChange={handleChangePage}
              siblingCount={0}
            />
          </Stack>
        </Box>
      </Stack>
    </MainLayout>
  );
}

export default PokedexListPage;
