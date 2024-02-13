import "./App.css";
import React from "react";

const thisYear = new Date().getFullYear();

const colorThemes = {
  default: { backgroundColor: "bisque", color: "darkviolet" },
  green: {
    backgroundColor: "darkolivegreen",
    color: "whitesmoke",
  },
  red: {
    backgroundColor: "salmon",
    color: "whitesmoke",
  },
};

const Main = ({ theme, onChangeTheme, ...props }) => {
  return (
    <main {...props}>
      <h1>Home of the Cool</h1>
      <button onClick={() => alert("Wao 🦥")} style={colorThemes[theme]}>
        Official Rizz Button
      </button>
      <select
        name="colorPicker"
        id="colorPicker"
        onChange={(e) => onChangeTheme(e.target.value)}
      >
        <option value={"default"}>Default</option>
        <option value={"red"}>Red</option>
        <option value={"Green"}>Green</option>
      </select>
    </main>
  );
};

function App() {
  const [theme, setTheme] = React.useState("default");

  const handleColorChange = (colorTheme) => setTheme(colorTheme);

  return (
    <div
      id="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <header>Welcome to Cool Site 🐨</header>
      <Main theme={theme} onChangeTheme={handleColorChange} />
      <footer>Keeping it cool since {thisYear}</footer>
    </div>
  );
}

export default App;
