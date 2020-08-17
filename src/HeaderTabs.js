import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import resume from "./Resume.pdf";
var value;

class HeaderTabs extends React.Component {
  render() {
    return (
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          aria-label="disabled tabs example"
        >
          <Link to="/">
            <Tab label="About" />
          </Link>
          <Link to="/projects">
            <Tab label="Projects" />
          </Link>
          <Tab label="Blog" />
          <a href={resume}>
            <Tab label="Resume" />
          </a>
        </Tabs>
      </Paper>
    );
  }
}

export default HeaderTabs;
