import "./App.css";
import React from "react";
import { ThemeContext } from "./providers/ThemeProvider";

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

const CoolContent = () => {
  const { theme, handleColorChange } = React.useContext(ThemeContext);

  return (
    <div>
      <h3>Cool Content</h3>
      <button onClick={() => alert("Wao 🦥")} style={colorThemes[theme]}>
        Official Rizz Button
      </button>
      <select
        name="colorPicker"
        id="colorPicker"
        onChange={(e) => handleColorChange(e.target.value)}
      >
        <option value={"default"}>Default</option>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
      </select>
    </div>
  );
};

const CoolComponentD = (props) => {
  return (
    <div>
      Cool Component D
      <CoolContent {...props} />
    </div>
  );
};

const CoolComponentC = (props) => {
  return (
    <div>
      Cool Component C
      <CoolComponentD {...props} />
    </div>
  );
};

const CoolComponentB = (props) => {
  return (
    <div>
      Cool Component B
      <CoolComponentC {...props} />
    </div>
  );
};

const CoolComponentA = (props) => {
  return (
    <div>
      Cool Component A
      <CoolComponentB {...props} />
    </div>
  );
};

const Main = (props) => {
  return (
    <main>
      <h1>Home of the Cool</h1>
      <CoolComponentA {...props} />
    </main>
  );
};

const Banner = () => {
  const { theme } = React.useContext(ThemeContext);
  return <div style={colorThemes[theme]}>Welcome to Cool Site 🐨</div>;
};

const Header = () => {
  return (
    <header>
      <Banner />
    </header>
  );
};

const Footer = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <footer style={colorThemes[theme]}>Keeping it cool since {thisYear}</footer>
  );
};

function App() {
  return (
    <div id="container" style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
