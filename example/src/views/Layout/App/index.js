import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import Welcome from 'views/Welcome';
import Demo from 'views/Demo';
import { ucFirstOfEachWord } from 'utilities/strings';


const determineTitle = pathname =>
  pathname
    .substr(1)
    .split('/')
    .map(n => ucFirstOfEachWord(n.replace('-', ' ')))
    .join(' - ');

class App extends React.PureComponent {
  render() {
    document.title = `Viztein | ${determineTitle(
      this.props.location.pathname
    )}`;

    return (
       <Switch>
         <Route exact path="/" component={Welcome} />
         <Route exact path="/demo/" component={Demo} />
       </Switch>
    );
  }
}

export default withRouter(App);
