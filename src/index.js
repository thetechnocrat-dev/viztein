import PropTypes from 'prop-types';
import React from 'react';
import { Stage } from 'ngl';

class Viztein extends React.Component {
  state = {
    stage: null,
    stageObj: null
  }

  updateProteinOnViewport(protein) {
    const { stageObj, stage } = this.state;
    if (!stageObj) {
      return
    }
    const comps = [];
    stage.eachComponent(function(comp) {comps.push(comp)})
    comps[0].removeAllRepresentations()
    if (!protein.config) {
      stage.defaultFileRepresentation(stageObj)
      return
    }
    protein.config.forEach(configItem => {
      if (Array.isArray(configItem.input)) {
        stageObj[configItem.type](...configItem.input);
      } else {
        stageObj[configItem.type](configItem.input);
      }
    });
  }

  addProteinToViewport(stage, protein) {
    if (!protein.config) {
      stage.loadFile(protein.filename, { defaultRepresentation: true }).then(stageObj => {
        this.setState({ stageObj });
      });
    } else {
      stage.loadFile(protein.filename).then(stageObj => {
        protein.config.forEach(configItem => {
          if (Array.isArray(configItem.input)) {
            stageObj[configItem.type](...configItem.input);
          } else {
            stageObj[configItem.type](configItem.input);
          }
        });

        if (!protein.config.some(configItem => configItem.type === 'autoView')) {
          stageObj.autoView();
        }
      });
    }
  }

  componentDidUpdate() {
    const { data, viewportId, viewportStyle, width } = this.props;
    const { stage } = this.state;

    const style = { ...defaultViewportStyle, ...viewportStyle };

    // data can be a single object or array of objects
    if (Array.isArray(data)) {
      data.forEach(protein => {
        this.addProteinToViewport(stage, protein);
      });
    } else {
      this.updateProteinOnViewport(data);
    }
  }

  componentDidMount() {
    const { data, viewportId, viewportStyle } = this.props;
    const stage = new Stage(viewportId, {
      backgroundColor: viewportStyle.backgroundColor
    });

    this.setState({ stage })

    // data can be a single object or array of objects
    if (Array.isArray(data)) {
      data.forEach(protein => {
        this.addProteinToViewport(stage, protein);
      });
    } else {
      this.addProteinToViewport(stage, data);
    }
  }

  render() {
    const { viewportId, viewportStyle } = this.props;

    const style = { ...defaultViewportStyle, ...viewportStyle };

    return <div id={viewportId} style={style} />;
  }
}

const defaultViewportStyle = {
  backgroundColor: 'black',
  width: '500px',
  height: '500px'
}

Viztein.defaultProps = {
  viewportId: 'viztein-viewport',
  viewportStyle: defaultViewportStyle
};

const dataPropShape = {
  filename: PropTypes.string.isRequired,
  config: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      input: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
      ])
    })
  )
};

Viztein.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape(dataPropShape)),
    PropTypes.shape(dataPropShape)
  ]).isRequired,
  viewportId: PropTypes.string,
  viewportStyle: PropTypes.object,
  width: PropTypes.string
};

export default Viztein;
