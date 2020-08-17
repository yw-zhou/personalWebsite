import React from "react";
import MediaCard from "./TwoCards";
import { AiFillGithub } from "react-icons/ai";
import homepic from "../Pictures/OrderioHome.PNG";
import cart from "../Pictures/OrderioCart.PNG";
import { IoIosArrowDown } from "react-icons/io";
class About extends React.Component {
  render() {
    return (
      <div>
        <div className="flexContainer flexCenter widthMarginBlock biggerWidth black Orderio">
          <img src={homepic} alt="home" />
          <div className="sideWidth widthMarginBlock biggerWidth black centre ">
            <h3>
              <em>Meet</em>
            </h3>
            <div className="lineContainer">
              <h1 className="line">
                <strong>Orderio</strong>
              </h1>
            </div>

            <h4>
              Making restaurant ordering efficient and safe. Simply scan a QR
              code on the table, and order directly on your own phone!{" "}
            </h4>
            <p>
              Amidst the pandemic, social distancing is key to containing the
              spread. This means customers are wary of close interactions with
              staff and servers must walk great distances from table to table.
              Orderio is here to provide a solution.
            </p>
            <h4>
              After pitching project Orderio, SalesPlus — a local POS software
              startup with over 20 restaurant clients — has decided to partner
              up, and introduce Orderio as the newest feature to their clients!
            </h4>
            <div className="flexContainer flexCenter">
              <h4>Read More</h4>
              <IoIosArrowDown />
            </div>
          </div>
          <img src={cart} alt="cart" />
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
          <div className="sideWidth widthMarginBlock biggerWidth black centre ">
            <h3>
              <em>Perfect for any Routine</em>
            </h3>
            <div className="lineContainer">
              <h1 className="line">
                <strong>Flex Mirror</strong>
              </h1>
            </div>
            <div>
              <h4>Wake up to a futuristic morning</h4>
              <ul>
                <li>Unlock your mirror with face authentication</li>
                <li>Play your favourite vibes on spotify</li>
                <li>Take pictures with your friends</li>
                <li>Theck the weather or your calendar</li>
              </ul>
              <h4>Everything you need (not) at your fingertips.</h4>
            </div>
            <p>
              Because that would smudge your fantastic mirror, so we are voice
              controlled :)
            </p>
            <a href="https://git.uwaterloo.ca./se101-team-flex/electron-app">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="flexContainer flexCenter twoCards flexStretch">
          <MediaCard proj={smallProjectList.PixelArt} />
          <MediaCard proj={smallProjectList.NutShell} />
        </div>
      </div>
    );
  }
}

export default About;

const smallProjectList = {
  FocusPocus: {
    name: "FocusPocus",
    imgsrc: require("../Pictures/FocusPocus.gif"),
    content:
      "Use NLP to interpret and sort browsing content into categories. Users can review their dashboard to reflect upon the topics that distract them the most and find ways to increase their productivity",
  },
  BadmintonTryouts: {
    name: "Badminton Tryouts",
    imgsrc: require("../Pictures/BadmintonLogo.png"),
    content:
      "Badminton Tryout System for Aurora High School with 100+ student users. Supports ranking on limited matches, round-robin mode, player profile view, and match records view.",
  },
  PixelArt: {
    name: "Pixel Art",
    imgsrc: require("../Pictures/pixelArt.PNG"),
    content:
      "Create indie drawings with Pixel Art. Supports customizeable dimensions and pixel sizes. Users can also save their drawings locally and re-edit them at a later time. ",
  },
  NutShell: {
    name: "Nutshell",
    imgsrc: "",
    video: "https://www.youtube.com/embed/Tr4TKt-yplw",
    content:
      "Summarizes text from a picture in the desired length, allowing for students to study more efficiently",
  },
};
