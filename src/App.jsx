/**
 * MUI Imports
 */
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

/**
 * custom file Imports
 */
import theme from "./styles/theme";
import createEmotionCache from "./common/utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function App({ emotionCache = clientSideEmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        POKEDEX
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
