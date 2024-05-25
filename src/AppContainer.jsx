import { useState } from "react";
import { ThemeContext, THEMES } from "./contexts/ThemeContext";
import { withLoading } from "./hoc/withLoading";
import App from "./App";
import { getLanguages } from "./const/languages";

const AppComponent = withLoading(App, getLanguages);

export function AppContainer() {
  const [theme, setTheme] = useState(THEMES.dark);

  function toggleTheme() {
    const nextTheme = theme === THEMES.dark ? THEMES.light : THEMES.dark;
    setTheme(nextTheme);
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <AppComponent />
    </ThemeContext.Provider>
  );
}
