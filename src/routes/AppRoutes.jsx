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
import { PokedexListPage } from "../pages/pokedex";

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
        <Route path="/pokedex" element={<PokedexListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
