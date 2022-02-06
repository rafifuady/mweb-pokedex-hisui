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
import ButtonTypingPokemon from "../../../common/components/ButtonTypingPokemon";

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

function PokemonDetail({detail}) {
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
      <Box>
        <img src={detail?.sprites?.front_default} alt="front_default" />
        <img src={detail?.sprites?.back_default} alt="back_default"/>
      </Box>
      <Container>
        <Button variant="contained" color="primary" fullWidth>
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
      <Box>#{detail?.id} Bulbasaur Type</Box>
    </Stack>
  );
}

export default PokemonDetail;
