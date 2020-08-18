import React from "react";
import HeaderTabs from "./HeaderTabs";
import About from "./About/About";
import Projects from "./Projects/Projects";
import { Route, BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import SpecificProj from "./Projects/SpecificProj";
import Blog from "./Blog/Blog";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <HeaderTabs />
        </header>
        <div className="Content">
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:proj" component={SpecificProj} />
          <Route exact path="/blog" component={Blog} />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
