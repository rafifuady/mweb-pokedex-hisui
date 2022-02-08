import { Box } from "@mui/material";
import { createGradient } from "../../common/utils/createGradient";
import { useNavigate } from "react-router-dom";

function PokeHead() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "5vh",
        background: createGradient("#263a52", "#456479"),
      }}
      onClick={() => navigate("/")}
    />
  );
}

export default PokeHead;
