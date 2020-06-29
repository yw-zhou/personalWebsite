import React from "react";
import titlePic from "./titleBackground.jpg";
import arrow from "./arrowRight.svg";
import "./App.css";
import HeaderTabs from "./HeaderTabs";
import About from "./About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="titleContainer">
          <img src={titlePic} alt="Me :)" />
          <img className="arrow" src={arrow} alt="arrow" />
        </div>
        <div className="title">
          <h3>
            <em>Hey I'm</em>
          </h3>
          <div className="lineContainer">
            <h1 className="line">
              <strong>Yi Wei Zhou</strong>
            </h1>
          </div>

          <h4>Student, Developer, Creator</h4>
        </div>
        <div id="about"></div>
      </header>
      <HeaderTabs />
      <About />
    </div>
  );
}

export default App;
