import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

function PokeNav() {
  const { pathname } = useLocation();

  const [value, setValue] = React.useState(pathname.substring(1));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Pokedex"
          value="pokedex"
          component={NavLink}
          to="/pokedex"
        />
        <BottomNavigationAction
          label="Pokemon"
          value="pokemon"
          component={NavLink}
          to="/pokemon"
        />
      </BottomNavigation>
    </Paper>
  );
}

export default PokeNav;
