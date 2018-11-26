import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setColorChoice, setRepresentationChoice } from 'features/demo/actions';
import { colorChoices, representationChoices } from './constants';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Viztein from 'viztein';


const DataTypography = styled(Typography)`
  padding: 10px;
  white-space: pre-wrap;
`;

const SelectTextField = styled(TextField)`
  && {
    padding-right: 24px;
  }
`;

export class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vizteinContainerWidth: this.calculateWidth() };
  }

  componentDidMount() {
    this.setState({ vizteinContainerWidth: this.calculateWidth() });
  }

  calculateWidth() {
    const element = document.getElementById('viztein-container');
    if (element) {
      return `${element.clientWidth}px`;
    }
    return null;
  }

  nonDefaultColorValue() {
    return this.props.colorValue !== colorChoices[0].value;
  }

  nonDefaultRepresentationValue() {
    return this.props.representationValue !== representationChoices[0].value;
  }

  addConfig = (configData, type, input) => {
    if (!configData.config) {
      configData.config = [];
    }
    configData.config.push({ type, input });
  }

  formatConfigData() {
    const { colorValue, representationValue } = this.props;
    let configData = { filename: '/4hhb.pdb' };

    if (this.nonDefaultColorValue() || this.nonDefaultRepresentationValue()) {
      if (representationValue === 'ball+stick+custom' && this.nonDefaultColorValue()) {
        this.addConfig(configData, 'addRepresentation', ['ball+stick', { aspectRatio: 8, color: colorValue }]);
      } else if (representationValue === 'ball+stick+custom') {
        this.addConfig(configData, 'addRepresentation', ['ball+stick', { aspectRatio: 8 }]);
      } else if (this.nonDefaultColorValue()) {
        this.addConfig(configData, 'addRepresentation', [representationValue, { color: colorValue }]);
      } else {
        this.addConfig(configData, 'addRepresentation', [representationValue]);
      }
    }

    return configData;
  }

  render() {
    const { colorValue, representationValue, setColorChoice, setRepresentationChoice, showTitle } = this.props;
    const { vizteinContainerWidth } = this.state;

    const vizteinConfigData = this.formatConfigData()
    const vizteinStyleData = {
      width: vizteinContainerWidth,
      backgroundColor: '#101010'
    };

    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              {showTitle && (
                <Typography variant="h4" gutterBottom>
                  Demo
                </Typography>
              )}
              <SelectTextField
                label="Color"
                onChange={(event) => setColorChoice(event.target.value)}
                value={colorValue}
                select
              >
                {colorChoices.map((colorChoice, i) => (
                  <MenuItem key={i.toString()} value={colorChoice.value}>
                    {colorChoice.display}
                  </MenuItem>
                ))}
              </SelectTextField>

             <TextField
                label="Representation"
                onChange={(event) => setRepresentationChoice(event.target.value)}
                value={representationValue}
                select
              >
                {representationChoices.map((representationChoice, i) => (
                  <MenuItem key={i.toString()} value={representationChoice.value}>
                    {representationChoice.display}
                  </MenuItem>
                ))}
              </TextField>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper id="viztein-container">
            {vizteinContainerWidth && (
              <Viztein
                data={vizteinConfigData}
                viewportStyle={vizteinStyleData}
              />
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <DataTypography variant="body1">
                {`<Viztein\n  data=${JSON.stringify(vizteinConfigData, undefined, 4)}\n/>`}
              </DataTypography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

Demo.defaultProps = {
  showTitle: false
}

Demo.propTypes = {
  colorValue: PropTypes.string.isRequired,
  representationValue: PropTypes.string.isRequired,
  setColorChoice: PropTypes.func.isRequired,
  setRepresentationChoice: PropTypes.func.isRequired,
  showTitle: PropTypes.bool
};

export default connect(
  state => ({
    colorValue: state.demo.colorValue,
    representationValue: state.demo.representationValue,
  }), { setColorChoice, setRepresentationChoice }
)(Demo);
