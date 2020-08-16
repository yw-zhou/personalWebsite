import React from "react";
import "./App.css";
import HeaderTabs from "./HeaderTabs";
import About from "./About";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <HeaderTabs />
        </header>
        <div className="Content">
          <Route exact path="/" component={About} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
