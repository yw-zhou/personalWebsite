import React from "react";
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

class Footer extends React.Component {
  handleChange() {}
  render() {
    return (
      <div className="centre">
        <div className="flexContainer flexCenter icons">
          <p>Let's Connect</p>
          <a href="https://www.linkedin.com/in/yw-zhou/">
            <AiFillLinkedin />
          </a>
          <a href="https://www.facebook.com/yiwei.zhou.94">
            <AiFillFacebook />
          </a>
          <a href="mailto:yiweizhou.ywz@gmail.com">
            <MdEmail />
          </a>
          <a href="https://github.com/yw-zhou">
            <AiFillGithub />
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
