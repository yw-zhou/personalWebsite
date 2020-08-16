import React from "react";
import "./App.css";
import HeaderTabs from "./HeaderTabs";
import About from "./About/About";
import Projects from "./Projects/Projects";
import { Route, BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <HeaderTabs />
        </header>
        <div className="Content">
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
