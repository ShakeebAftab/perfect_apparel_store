import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
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
        main: red[600],
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
