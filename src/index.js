import PropTypes from 'prop-types';
import React from 'react';
import { Stage } from 'ngl';

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
          !protein.config.some(configItem => configItem.type === 'autoView')
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

    return <div id={viewportId} style={viewportStyle} />;
  }
}

Viztein.defaultProps = {
  viewportId: 'viztein-viewport',
  viewportStyle: {
    backgroundColor: 'black',
    width: '500px',
    height: '500px'
  }
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
  viewportStyle: PropTypes.object
};

export default Viztein;
