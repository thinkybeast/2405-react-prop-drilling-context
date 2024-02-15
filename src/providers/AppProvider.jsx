import React from "react";

/*
    1. A Context object that will allow us to reference the context in child components

    2. A Context Provider that will wrap the child components that want access to the context
*/

//  1. A Context object that will allow us to reference the context in child components
export const AppContext = React.createContext();

const initialData = {
  theme: "default",
  heartVote: 0,
  squidVote: 0,
};

const appReducer = (prevState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_THEME":
      return { ...prevState, theme: payload };
    case "VOTE_HEART": {
      let nextTheme;
      if (prevState.heartVote + 1 > prevState.squidVote) {
        nextTheme = "hotPink";
      } else if (prevState.heartVote + 1 < prevState.squidVote) {
        nextTheme = "olive";
      } else {
        nextTheme = "default";
      }
      return {
        ...prevState,
        heartVote: prevState.heartVote + 1,
        theme: nextTheme,
      };
    }
    case "VOTE_SQUID": {
      let nextTheme;
      if (prevState.heartVote > prevState.squidVote + 1) {
        nextTheme = "hotPink";
      } else if (prevState.heartVote < prevState.squidVote + 1) {
        nextTheme = "olive";
      } else {
        nextTheme = "default";
      }
      return {
        ...prevState,
        squidVote: prevState.squidVote + 1,
        theme: nextTheme,
      };
    }
    default:
      throw new Error(`Unsupported action type ${type}`);
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialData);

  const handleThemeChange = (color) => {
    dispatch({ type: "CHANGE_THEME", payload: color });
  };

  const voteHeart = () => dispatch({ type: "VOTE_HEART" });
  const voteSquid = () => dispatch({ type: "VOTE_SQUID" });

  // 2. A Context Provider that will wrap the child components that want access to the context
  return (
    <AppContext.Provider
      value={{ ...state, handleThemeChange, voteHeart, voteSquid }}
    >
      {children}
    </AppContext.Provider>
  );
};
