import React from "react";
/*
    1. A Context object that will allow us to reference the context in child components

    2. A Context Provider that will wrap the child components that want access to the context
*/

export const AppContext = React.createContext();

const initialState = {
  theme: "default",
  americanFootballVotes: 0,
  europeanFootballVotes: 0,
};

const calculateNextTheme = (americanFootballVotes, europeanFootballVotes) => {
  if (americanFootballVotes > europeanFootballVotes) {
    return "green";
  } else if (americanFootballVotes < europeanFootballVotes) {
    return "red";
  } else {
    return "default";
  }
};

const stateReducer = (prevState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_THEME":
      return { ...prevState, theme: payload };
    case "VOTE_USA_FOOTBALL": {
      const americanFootballVotes = prevState.americanFootballVotes + 1;
      let nextTheme = calculateNextTheme(
        americanFootballVotes,
        prevState.europeanFootballVotes
      );
      return { ...prevState, americanFootballVotes, theme: nextTheme };
    }
    case "VOTE_EURO_FOOTBALL": {
      const europeanFootballVotes = prevState.europeanFootballVotes + 1;
      let nextTheme = calculateNextTheme(
        prevState.americanFootballVotes,
        europeanFootballVotes
      );
      return { ...prevState, europeanFootballVotes, theme: nextTheme };
    }
    default:
      throw new Error(`Unsupported action type: ${type}`);
  }
};

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = React.useReducer(stateReducer, initialState);

  const handleColorChange = (colorTheme) => setTheme(colorTheme);

  return (
    <AppContext.Provider value={{ theme, handleColorChange }}>
      {children}
    </AppContext.Provider>
  );
};
