import React from "react";
import PokeNav from "../containers/PokeNav";

// material
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
//

const MainStyle = styled("div")(({ theme }) => ({
  overflow: "auto",
  minHeight: "95vh",
  // paddingBottom: theme.spacing(10),
  // [theme.breakpoints.up("lg")]: {
  //   paddingLeft: theme.spacing(2),
  //   paddingRight: theme.spacing(2),
  // },
}));

function MainLayout({ children }) {
  return (
    <Stack>
      <MainStyle>{children}</MainStyle>
      <PokeNav />
    </Stack>
  );
}

export default MainLayout;
