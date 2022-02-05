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
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
