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

function App() {
  const [theme, setTheme] = React.useState("default");
  return (
    <div
      id="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <header>Welcome to Cool Site 🐨</header>
      <main>
        <h1>Home of the Cool</h1>
        <button onClick={() => alert("Wao 🦥")} style={colorThemes[theme]}>
          Official Rizz Button
        </button>
        <select
          name="colorPicker"
          id="colorPicker"
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value={"default"}>Default</option>
          <option value={"red"}>Red</option>
          <option value={"Green"}>Green</option>
        </select>
      </main>
      <footer>Keeping it cool since {thisYear}</footer>
    </div>
  );
}

export default App;
