import React from "react";
import ReactMarkdown from "react-markdown";
import Paper from "@material-ui/core/Paper";
class SpecificProj extends React.Component {
  state = {};
  componentDidMount() {
    console.log("SpecificProj");
    const markDownFile = this.props.match.params.proj;
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
  }
  importAll(r, cache) {
    r.keys().forEach((key) => (cache[key] = r(key)));
  }
  getImage(uri) {
    console.log(uri);
    return this.state.imageFiles[uri];
  }
  render() {
    console.log(this.state.imageFiles);
    return (
      <Paper className=" widthMarginBlock markdown">
        <section>
          <ReactMarkdown
            source={this.state.markdown}
            transformImageUri={this.getImage.bind(this)}
            escapeHtml={false}
          />
        </section>
      </Paper>
    );
  }
}
export default SpecificProj;

const projToMd = {
  focuspocus: require("../Markdowns/FocusPocus.md"),
  badminton: require("../Markdowns/BadmintonTryout.md"),
  pixelart: require("../Markdowns/PixelArt.md"),
  nutshell: require("../Markdowns/NutShell.md"),
  orderio: require("../Markdowns/Orderio.md"),
};
