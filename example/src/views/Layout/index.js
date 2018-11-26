import React from 'react';
import { withRouter } from 'react-router';

import Grid from '@material-ui/core/Grid';

import App from 'views/Layout/App';
import Navigation from 'views/Layout/Navigation';


export class Layout extends React.PureComponent {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Navigation>
            <App />
          </Navigation>
        </Grid>
      </Grid>
     );
  }
}

App.PropTypes = {};

export default withRouter(Layout);
