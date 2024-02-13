import React from "react";
/*
    1. A Context object that will allow us to reference the context in child components

    2. A Context Provider that will wrap the child components that want access to the context
*/

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("default");

  const handleColorChange = (colorTheme) => setTheme(colorTheme);

  return (
    <ThemeContext.Provider value={{ theme, handleColorChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
