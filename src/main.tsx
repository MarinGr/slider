import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, StyleSheetManager } from "styled-components";
import { theme } from "./App.theme.ts";
import isPropValid from "@emotion/is-prop-valid";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyleSheetManager>
  </StrictMode>
);
