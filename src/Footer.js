import React from "react";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

class Footer extends React.Component {
  handleChange() {}
  render() {
    return (
      <div className="centre">
        <div className="flexContainer flexCenter">
          <p>Let's Connect</p>
          <a href="">
            <AiFillLinkedin />
          </a>
          <a href="">
            <AiFillFacebook />
          </a>
          <a href="">
            <MdEmail />
          </a>
        </div>
        <p className="subtitle">
          Copyright © 2020 Yi Wei Zhou <br /> Made with React JS, Markdown, CSS.
          Hosted with AWS.
        </p>
      </div>
    );
  }
}

export default Footer;
