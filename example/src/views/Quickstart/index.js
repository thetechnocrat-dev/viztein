import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export class Quickstart extends React.PureComponent {
  componentDidMount() {
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Install
              </Typography>
              <Typography variant="body1" gutterBottom>
                $ npm install viztein
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Use Component
              </Typography>
                <pre style={{color: 'white'}}>
{`
import Viztein from 'viztein';

class Example extends React.Component {
  render() {
    return (
      <Viztein data={{ filename: "https://files.rcsb.org/download/4hhb.pdb" }} />
    );
  }
};
`}
                </pre>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default Quickstart;
