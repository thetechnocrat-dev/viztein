import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Demo from 'views/Demo';
import Quickstart from 'views/Quickstart';

export class Welcome extends React.PureComponent {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                About
              </Typography>
              <Typography variant="body1">
                Viztein is a React library component for <b>vi</b>suali<b>z</b>ing pro<b>tein</b>s and other macromolecules. The code is a light wrapper around NGL which uses WebGL for rendering graphics.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Quickstart />
        </Grid>

        <Grid item xs={12}>
          <Demo showTitle/>
        </Grid>
      </Grid>
    );
  }
}

Welcome.propTypes = {};

export default Welcome;
