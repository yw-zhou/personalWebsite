import React from "react";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import resume from "./Resume.pdf";

class HeaderTabs extends React.Component {
  render() {
    return (
      <Paper square className="flexContainer flexCenter">
        <Link to="/">
          <Tab label="About" />
        </Link>
        <Link to="/projects">
          <Tab label="Projects" />
        </Link>
        <Link to="/blog">
          <Tab label="Blog" />
        </Link>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <Tab label="Resume" />
        </a>
      </Paper>
    );
  }
}

export default HeaderTabs;
