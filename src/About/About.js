import React from "react";
import linkedinPic from "../Pictures/LinkedInPicture.jpg";
import WorkJourneyContainer from "./WorkJourneyContainer";
import titlePic from "../Pictures/titleBackground.jpg";
import arrow from "../Pictures/arrowRight.svg";
import "../App.css";

class About extends React.Component {
  state = {
    oneColumn: false,
  };
  updateDimensions = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 900) {
      this.setState({ oneColumn: true });
    } else {
      this.setState({ oneColumn: false });
    }
  };
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
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
          <div className={this.state.oneColumn ? "" : "lineContainer"}>
            <h1 className={this.state.oneColumn ? "" : "line"}>
              <strong>Yi Wei Zhou</strong>
            </h1>
          </div>

          <h4>Student, Developer, Creator</h4>
        </div>
        <div id="about"></div>
        <div
          className={`topMargin ${this.state.oneColumn ? "" : "lineContainer"}`}
        >
          <h1 className={`black ${this.state.oneColumn ? "" : "line"}`}>
            <strong>Here's what I've done so far</strong>
          </h1>
        </div>
        <div
          className={`widthMarginBlock flexContainer ${
            this.state.oneColumn ? "flexReverseWrap biggerWidth " : ""
          }`}
        >
          <div className="sideWidth sideAboutMe">
            <p>
              “One day robots will take over the world, and I just want to be on
              the right side when that happens.” This statement was what came to
              mind before I decided to pursue programming at the age of 14. I
              eagerly searched for resources to enhance my skills and eventually
            </p>
            <ul className="sideDescription custom-bullet check">
              <div>
                <li>
                  ...competed in{" "}
                  <span className="highlight">
                    Google Hash Code Competition
                  </span>{" "}
                  achieving <span className="highlight">Top 30 in Canada</span>
                </li>
              </div>
              <div>
                <li>
                  ...worked as a{" "}
                  <span className="highlight">full stack developer</span> at
                  Newtopia —medium sized health tech company
                </li>
              </div>
              <div>
                <li>
                  ...admitted to{" "}
                  <span className="highlight">
                    Capital One Mentorship Program
                  </span>{" "}
                  as an exceptional candidate who is passionate, committed, and
                  has the potential to bring professional career to the next
                  level
                </li>
              </div>
              <div>
                <li>
                  ...got sponsored and became{" "}
                  <span className="highlight">student ambassador</span> for my
                  university at 2020 Grace Hopper Conference because of my
                  ability and potential to{" "}
                  <span className="highlight">promote woman in CS</span>
                </li>
              </div>
              <div>
                <li>
                  ...built a <span className="highlight">webapp</span> for
                  restaurant ordering and{" "}
                  <span className="highlight">
                    partnered with a local startup
                  </span>{" "}
                  SalesPlus POS where their clients will be using this feature
                  in addition to their software
                </li>
              </div>
              <div>
                <li>
                  ...developed an{" "}
                  <span className="highlight">chrome extension</span> to review
                  productivity using <span className="highlight">NLP</span>{" "}
                </li>
              </div>
            </ul>
          </div>
          <img id="profilePic" src={linkedinPic} alt="profile pic" />
        </div>
        <div className="black sideAboutMe biggerWidth">
          As a Software Engineering Student at the{" "}
          <span className="highlight">University of Waterloo</span>, I've had
          various internships. Read about my work journey below!
        </div>
        <div
          className={`topMargin ${this.state.oneColumn ? "" : "lineContainer"}`}
        >
          <h1 className={`black ${this.state.oneColumn ? "" : "line"}`}>
            <strong>Work Journey</strong>
          </h1>
        </div>
        <WorkJourneyContainer oneColumn={this.state.oneColumn} />
      </div>
    );
  }
}

export default About;
