/**
 * import depedencies
 */
// import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

/**
 * import pages
 */
import LandingPage from "../pages/LandingPage";
import { PokedexListPage, PokedexDetailPage } from "../pages/pokedex";
import { PokemonListPage } from "../pages/pokemon";

function AppRoutes() {
  // const appState = useSelector((state) => state.appState);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(appStateActions.isAppReady());
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="pokedex">
          <Route path="" element={<PokedexListPage />} />
          <Route path=":pokeId" element={<PokedexDetailPage />} />
        </Route>
        <Route path="pokemon">
          <Route path="" element={<PokemonListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
