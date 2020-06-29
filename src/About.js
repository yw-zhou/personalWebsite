import React from "react";
import linkedinPic from "./LinkedInPicture.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="centre">
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
      </div>
    );
  }
}

export default About;
