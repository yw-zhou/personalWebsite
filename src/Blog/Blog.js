import React from "react";

class Blog extends React.Component {
  state = {};
  componentDidMount() {
    let content = (
      <div>
        <h5>
          There are currently no blogs right now{" "}
          <span role="img" aria-label="sadness">
            😭
          </span>
        </h5>
      </div>
    );
    if (blogs.length >= 0) {
    }
    this.setState({ content });
  }
  render() {
    return (
      <div className="blog">
        <div className={` lineContainer`}>
          <h1 className={`black line`}>
            <strong>When in doubt, Blog it out</strong>
          </h1>
        </div>
        {this.state.content}
      </div>
    );
  }
}

export default Blog;

const blogs = [];
