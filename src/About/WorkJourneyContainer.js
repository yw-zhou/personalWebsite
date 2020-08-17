import React from "react";
import workJourneys from "./workJourneyData";

class WorkJourneyContainer extends React.Component {
  render() {
    return (
      <div>
        {workJourneys.map((work) => {
          return (
            <div
              key={work.Company}
              className={`widthMarginBlock biggerWidth flexContainer ${
                this.props.oneColumn ? "flexWrap" : ""
              }`}
            >
              <img
                className="workJourneyImg"
                src={work.Image}
                alt={work.Company}
              />
              <div className="sideWidth">
                <p className="Position">{work.Position}</p>
                <h6 className="Company">{work.Company}</h6>
                <h6 className="Date">{work.Date}</h6>
                {work.MoreInfo.map(function (info, index) {
                  return <p key={info}>{info}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkJourneyContainer;
