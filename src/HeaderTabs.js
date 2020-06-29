import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
var value;
class HeaderTabs extends React.Component {
  handleChange() {}
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
          <Tab label="About" />
          <Tab label="Blog" />
          <Tab label="Projects" />
          <Tab label="Resume" />
        </Tabs>
      </Paper>
    );
  }
}

export default HeaderTabs;
