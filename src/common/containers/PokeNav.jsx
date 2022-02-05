import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { NavLink } from "react-router-dom";

function PokeNav() {
  const [value, setValue] = React.useState(false);
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Pokedex"
          component={NavLink}
          to="/pokedex"
        />
        <BottomNavigationAction
          label="Pokemon"
          component={NavLink}
          to="/pokemon"
        />
      </BottomNavigation>
    </Paper>
  );
}

export default PokeNav;
