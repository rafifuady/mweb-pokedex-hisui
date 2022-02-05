import { Button, Paper, Stack, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { createGradient } from "../common/utils/createGradient";

const DUMMY_SEEN = 100;
const DUMMY_CAUGHT = 100;
const ButtonAction = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#ede6de"),
  backgroundColor: "#ede6de",
  "&:hover": {
    backgroundColor: "#ebe7ca",
  },
}));

const BackgroundPaper = styled(Paper)(({ theme }) => ({
  color: theme.palette.getContrastText("#ede6de"),
  backgroundColor: "#ede6de",
  paddingInline: theme.spacing(3),
  paddingBlock: theme.spacing(2),
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
          <BackgroundPaper elevation={5}>
            <Typography variant="h2" sx={{ fontWeight: 500 }}>
              POKEDEX
            </Typography>
          </BackgroundPaper>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <AccentPaper>Seen {DUMMY_SEEN}</AccentPaper>
            <AccentPaper>{DUMMY_CAUGHT} Caught</AccentPaper>
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
