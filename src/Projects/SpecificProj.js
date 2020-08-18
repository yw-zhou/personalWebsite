import React from "react";
import ReactMarkdown from "react-markdown";
import Paper from "@material-ui/core/Paper";
import pixelArt from "../Markdowns/PixelArt";
import orderio from "../Markdowns/Orderio";
class SpecificProj extends React.Component {
  state = {};
  updateDimensions = (markDownFile) => {
    let content;
    if (markDownFile === "pixelart") {
      content = pixelArt(window.innerWidth);
    } else {
      content = orderio(window.innerWidth);
    }
    this.setState({ content });
  };
  componentDidMount() {
    const markDownFile = this.props.match.params.proj;

    if (markDownFile !== "pixelart" && markDownFile !== "orderio") {
      fetch(projToMd[markDownFile])
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          this.setState({
            markdown: text,
          });
        });
      let imageFiles = {};
      this.importAll(require.context("../Pictures/MdPics", false), imageFiles);
      this.setState({ imageFiles });
    } else {
      window.addEventListener("resize", this.updateDimensions);
      this.updateDimensions(markDownFile);
    }
  }
  importAll(r, cache) {
    r.keys().forEach((key) => (cache[key] = r(key)));
  }
  getImage(uri) {
    console.log(uri);
    return this.state.imageFiles[uri];
  }
  render() {
    const content = this.state.content ? (
      this.state.content
    ) : (
      <ReactMarkdown
        source={this.state.markdown}
        transformImageUri={this.getImage.bind(this)}
        escapeHtml={false}
      />
    );
    return (
      <Paper className=" widthMarginBlock markdown">
        <section>{content}</section>
      </Paper>
    );
  }
}
export default SpecificProj;

const projToMd = {
  focuspocus: require("../Markdowns/FocusPocus.md"),
  badminton: require("../Markdowns/BadmintonTryout.md"),
  nutshell: require("../Markdowns/NutShell.md"),
  orderio: require("../Markdowns/Orderio.js"),
};
