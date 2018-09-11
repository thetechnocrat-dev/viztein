import React from "react";
import { Stage } from "ngl";


class Viztein extends React.PureComponent {
  addProteinToViewport(stage, protein) {
    if (!protein.config) {
      stage.loadFile(protein.filename, { defaultRepresentation: true });
    } else {
      stage.loadFile(protein.filename).then(stageObj => {
        protein.config.forEach(configItem => {
          if (Array.isArray(configItem.input)) {
            stageObj[configItem.type](...configItem.input);
          } else {
            stageObj[configItem.type](configItem.input);
          }
        });

        if (
          !protein.config.some(configItem => configItem.type === "autoView")
        ) {
          stageObj.autoView();
        }
      });
    }
  }

  componentDidMount() {
    const { data, viewportId, viewportStyle } = this.props;
    const stage = new Stage(viewportId, {
      backgroundColor: viewportStyle.backgroundColor
    });

    // data can be a single object or array of objects
    if (typeof data === "object") {
      this.addProteinToViewport(stage, data);
    } else {
      data.forEach(protein => {
        this.addProteinToViewport(stage, protein);
      });
    }
  }

  render() {
    const { viewportId, viewportStyle } = this.props;

    return <div id={viewportId} style={viewportStyle} />;
  }
}

Viztein.defaultProps = {
  viewportId: "viewport",
  viewportStyle: {
    backgroundColor: "black",
    width: "500px",
    height: "500px"
  }
};

export default Viztein;
