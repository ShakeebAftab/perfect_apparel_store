import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { BrowserRouter } from "react-router-dom";

interface ContextProps {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ContextProps>({} as ContextProps);

export const ThemeContextProvider: FC<any> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#171717",
      },
      background: {
        // default: "#111",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*::-webkit-scrollbar": {
            width: "0.4em",
            height: "0.4em",
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.7)",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#707070",
            borderRadius: 5,
          },
        },
      },
    },
  });

  const lightTheme = createTheme({});

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <BrowserRouter>
          <CssBaseline />
          {children}
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
