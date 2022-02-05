import { styled, Paper } from "@mui/material";

export const BackgroundItem = styled(Paper)(({ theme }) => ({
  color: theme.palette.getContrastText("#ede6de"),
  backgroundColor: "#ede6de",
}));
