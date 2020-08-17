import React from "react";
import workJourneys from "./workJourneyData";

class WorkJourneyContainer extends React.Component {
  componentWillMount() {
    let journeys = [];
    workJourneys.forEach(function (work) {
      let workParagraphs = work.MoreInfo.map(function (info, index) {
        return <p key={info}>{info}</p>;
      });
      journeys.push(
        <div
          key={work.Company}
          className="widthMarginBlock biggerWidth flexContainer"
        >
          <img className="workJourneyImg" src={work.Image} alt={work.Company} />
          <div className="sideWidth">
            <p className="Position">{work.Position}</p>
            <h6 className="Company">{work.Company}</h6>
            <h6 className="Date">{work.Date}</h6>
            {workParagraphs}
          </div>
        </div>
      );
    });
    this.setState({ journeys: journeys });
  }
  render() {
    return <div>{this.state.journeys}</div>;
  }
}

export default WorkJourneyContainer;
