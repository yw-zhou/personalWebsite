import React from "react";
import linkedinPic from "../Pictures/LinkedInPicture.jpg";
import WorkJourneyContainer from "./WorkJourneyContainer";
import titlePic from "../Pictures/titleBackground.jpg";
import arrow from "../Pictures/arrowRight.svg";
import "../App.css";

class About extends React.Component {
  /*
  state = {
    oneColumn: false,
  };
  updateDimensions = () => {
    if (window.innerWidth < 750) {
      this.setState({ oneColumn: true });
    }
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);

  }*/
  render() {
    return (
      <div className="centre">
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
        <div className="lineContainer topMargin">
          <h1 className="line black">
            <strong>Here's what I've done so far</strong>
          </h1>
        </div>
        <div className="widthMarginBlock flexContainer">
          <div className="sideWidth">
            <ul className="sideDescription">
              <li>
                Created websites (like this one!) and other web applications
                using various tools including: JS, React, JQuery, HTML, CSS, etc
              </li>
              <li>Made games in python using the pygame library</li>
              <li>Mobile Applications</li>
              <li>Chrome Extensions</li>
              <li>OpenCV</li>
              <li>Databases etc.</li>
            </ul>
          </div>
          <img id="profilePic" src={linkedinPic} alt="profile pic" />
        </div>
        <div>
          Waterloo Student blah blah blah about urself something like that
        </div>
        <div className="lineContainer topMargin">
          <h1 className="line black">
            <strong>Work Journey</strong>
          </h1>
        </div>
        <WorkJourneyContainer />
      </div>
    );
  }
}

export default About;
