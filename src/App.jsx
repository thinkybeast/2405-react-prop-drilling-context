import "./App.css";
import React from "react";
import { AppContext } from "./providers/AppProvider";

const thisYear = new Date().getFullYear();

const colorThemes = {
  default: { backgroundColor: "bisque", color: "darkred" },
  hotPink: {
    backgroundColor: "HotPink",
    color: "white",
  },
  olive: {
    backgroundColor: "DarkOliveGreen",
    color: "white",
  },
};

const CoolContent = () => {
  console.log("Rendering CoolContent");

  const { theme, handleThemeChange, voteHeart, voteSquid } =
    React.useContext(AppContext);

  return (
    <div>
      <button style={colorThemes[theme]} onClick={() => alert("Wao 🦥")}>
        Official Rizz Button
      </button>
      <select onChange={(e) => handleThemeChange(e.target.value)}>
        <option value={"default"}>Default</option>
        <option value={"hotPink"}>Hot Pink</option>
        <option value={"olive"}>Olive</option>
      </select>
      <div style={{ fontSize: "3rem", display: "flex", gap: "36px" }}>
        <button onClick={voteHeart}>💛</button>
        <button onClick={voteSquid}>🐙</button>
      </div>
    </div>
  );
};

const CoolComponentC = (props) => {
  console.log("Rendering CoolComponentC");
  return (
    <div>
      CoolComponentC
      <CoolContent {...props} />
    </div>
  );
};

const CoolComponentB = (props) => {
  console.log("Rendering CoolComponentB");
  return (
    <div>
      CoolComponentB
      <CoolComponentC {...props} />
    </div>
  );
};

const CoolComponentA = (props) => {
  console.log("Rendering CoolComponentA");

  return (
    <div>
      CoolComponentA
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

  const { theme } = React.useContext(AppContext);

  return <h1 style={colorThemes[theme]}>This is the Cool Site 🐨</h1>;
};

const Votes = () => {
  console.log("Rendering Votes");
  const { heartVote, squidVote } = React.useContext(AppContext);

  return (
    <div>
      <h3>Current score: </h3>
      <div
        style={{
          fontSize: "1rem",
          display: "flex",
          gap: "36px",
          justifyContent: "center",
        }}
      >
        <span>💛: {heartVote}</span>
        <span>🐙: {squidVote}</span>
      </div>
    </div>
  );
};

const Header = (props) => {
  console.log("Rendering Header");

  return (
    <header>
      <Banner {...props} /> <Votes />
    </header>
  );
};

const Footer = () => {
  console.log("Rendering Footer");

  const { theme } = React.useContext(AppContext);

  return (
    <footer style={colorThemes[theme]}>Keepin it cool since {thisYear}</footer>
  );
};

function App() {
  console.log("Rendering App");
  return (
    <div id="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
