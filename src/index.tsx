import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

// Text
import "@fontsource/roboto";

// Theme
import { ThemeContextProvider } from "./providers/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
