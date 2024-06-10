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
  console.log("Rendering CoolContent");

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
  console.log("Rendering CoolComponentD");

  return (
    <div>
      Cool Component D
      <CoolContent {...props} />
    </div>
  );
};

const CoolComponentC = (props) => {
  console.log("Rendering CoolComponentC");

  return (
    <div>
      Cool Component C
      <CoolComponentD {...props} />
    </div>
  );
};

const CoolComponentB = (props) => {
  console.log("Rendering CoolComponentB");

  return (
    <div>
      Cool Component B
      <CoolComponentC {...props} />
    </div>
  );
};

const CoolComponentA = (props) => {
  console.log("Rendering CoolComponentA");

  return (
    <div>
      Cool Component A
      <CoolComponentB {...props} />
    </div>
  );
};

const Main = (props) => {
  console.log("Rendering Main");

  return (
    <main>
      <h1>Home of the Cool</h1>
      <CoolComponentA {...props} />
    </main>
  );
};

const Banner = () => {
  console.log("Rendering Banner");

  const { theme } = React.useContext(ThemeContext);
  return <div style={colorThemes[theme]}>Welcome to Cool Site 🐨</div>;
};

const Header = () => {
  console.log("Rendering Header");

  return (
    <header>
      <Banner />
    </header>
  );
};

const Footer = () => {
  console.log("Rendering Footer");

  const { theme } = React.useContext(ThemeContext);
  return (
    <footer style={colorThemes[theme]}>Keeping it cool since {thisYear}</footer>
  );
};

function App() {
  console.log("Rendering App");
  return (
    <div id="container" style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
