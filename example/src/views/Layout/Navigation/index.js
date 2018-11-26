import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import DocumentIcon from '@material-ui/icons/Assignment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EyeIcon from '@material-ui/icons/Visibility';

import NavBarWithDrawer from 'components/NavBarWithDrawer';


const ExternalLink = styled.a`
  display: inline-flex;
  font-weight: normal;
  text-decoration: none;
`;

const navList = (
  <List>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button component={Link} to="/demo/">
      <ListItemIcon>
        <EyeIcon />
      </ListItemIcon>
      <ListItemText primary="Demo" />
    </ListItem>
    <ListItem button>
      <ExternalLink href="https://github.com/McMenemy/viztein#component-properties" target="_blank">
        <ListItemIcon>
          <DocumentIcon />
        </ListItemIcon>
        <ListItemText primary="Documentation" />
      </ExternalLink>
    </ListItem>
    <ListItem button>
      <ExternalLink href="https://github.com/McMenemy/viztein#quickstart" target="_blank">
        <ListItemIcon>
          <DocumentIcon />
        </ListItemIcon>
        <ListItemText primary="Documentation" />
      </ExternalLink>
    </ListItem>
  </List>
);


export class Navigation extends React.PureComponent {
  render() {
    return (
      <NavBarWithDrawer navList={navList}>
        {this.props.children}
      </NavBarWithDrawer>
    );
  }
}

Navigation.propTypes = {};

export default Navigation;
