import React from "react";
import MediaCard from "./TwoCards";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="widthMarginBlock positionBlock biggerWidth black ">
          <h3>
            <em>Meet</em>
          </h3>
          <div className="lineContainer">
            <h1 className="line">
              <strong>Orderio</strong>
            </h1>
          </div>

          <h4>
            Making restaurant ordering efficient and safe. Simply scan a QR code
            on the table, and order directly on your own phone!{" "}
          </h4>
          <p>
            Amidst the pandemic, social distancing is key to containing the
            spread. This means customers are wary of close interactions with
            staff and servers must walk great distances from table to table.
            Orderio is here to provide a solution.
          </p>
          <h4>
            After pitching project Orderio, SalesPlus — a local POS software
            startup with over 20 restaurant clients — has decided to partner up,
            and introduce Orderio as the newest feature to their clients.
          </h4>
        </div>

        <div className="flexContainer flexCenter twoCards flexStretch">
          <MediaCard proj={smallProjectList.FocusPocus} />
          <MediaCard proj={smallProjectList.BadmintonTryouts} />
        </div>

        <div className="flexContainer flexCenter biggerWidth widthMarginBlock ">
          <iframe
            title="flexMirror"
            width="60%"
            height="300px"
            src="https://www.youtube.com/embed/cZ8H2EFwmOU"
          ></iframe>
          <div className="sideWidth widthMarginBlock biggerWidth black ">
            <h3>
              <em>Perfect for any Routine</em>
            </h3>
            <div className="lineContainer">
              <h1 className="line">
                <strong>Flex Mirror</strong>
              </h1>
            </div>

            <h4>
              Wake up to a futuristic morning, unlock your mirror with face
              authentication, play your favourite vibes on spotify, take
              pictures with your friends, check the weather or calendar,
              everything you need (not) at your fingertips.
            </h4>
            <p>
              Because that would smudge your fantastic mirror, so we are voice
              controlled :)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

const smallProjectList = {
  FocusPocus: {
    name: "FocusPocus",
    imgsrc: "",
    content:
      "Use NLP to interpret and sort browsing content into categories. Users can review their dashboard to reflect upon the topics that distract them the most and find ways to increase their productivity",
  },
  BadmintonTryouts: {
    name: "Badminton Tryouts",
    imgsrc: "",
    content:
      "Badminton Tryout System for Aurora High School with 100+ student users. Supports ranking on limited matches, round-robin mode, player profile view, and match records view.",
  },
};
