/**
 * MUI Imports
 */
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

/**
 * redux Imports
 */
import { Provider } from "react-redux";
import { default as store } from "./common/redux/store";

/**
 * custom file Imports
 */
import theme from "./styles/theme";
import createEmotionCache from "./common/utils/createEmotionCache";
import AppRoutes from "./routes/AppRoutes";

const clientSideEmotionCache = createEmotionCache();

function App({ emotionCache = clientSideEmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <AppRoutes />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
