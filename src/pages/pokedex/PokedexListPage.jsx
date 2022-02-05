import {
  Button,
  ButtonBase,
  Card,
  Container,
  Pagination,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGradient } from "../../common/utils/createGradient";
import { POKE_LIST } from "../../common/utils/dummy/POKE_LIST";
import { pokedexActions } from "../../modules/pokedex/_redux/pokedex.actions";

function PokedexListPage() {
  const pokedex = useSelector((state) => state.pokedex);
  const dispatch = useDispatch();

  const limit = 5;
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setOffset(newPage * 5);
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
    <Stack direction="column">
      <Box
        sx={{
          minHeight: "5vh",
          background: createGradient("#3b3b33", "#89 6f3e"),
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
          <Stack sx={{ minHeight: "80vh" }}>
            {pokedex.results.map((val, index) => (
              <Stack key={index}>
                <Button variant="contained" onClick={() => alert(val.url)}>
                  {val.name}
                </Button>
                Caught : 1
              </Stack>
            ))}
          </Stack>
          <Pagination
            count={Math.floor(pokedex.count / 5)}
            component="div"
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      </Box>
    </Stack>
  );
}

export default PokedexListPage;
