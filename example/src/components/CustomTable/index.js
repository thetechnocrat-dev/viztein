import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const TableTitle = styled(Typography)`
  padding: 20px;
`;

const ClickableCell = styled(TableCell)`
  cursor: pointer;
`;

export class CustomTable extends React.Component {
  handleLinkClick(link) {
    this.props.history.push(link);
  }

  tableTitle() {
    const { title, titleTypographyVariant } = this.props;
    return (
      <Grid item xs={12} md={6}>
        <TableTitle variant={titleTypographyVariant}>
          {title}
        </TableTitle>
      </Grid>
    );
  }

  tableHeader() {
    const { rightHeader } = this.props;
    if (rightHeader) {
      return (
        <Grid container alignItems="center" spacing={0} justify="spacing-between">
          <Grid item xs={12} md={6}>
            {this.tableTitle()}
          </Grid>
          <Grid item xs={12} md={6}>
            {rightHeader}
          </Grid>
       </Grid>
      );
    }

    return this.tableTitle();
  }

  render() {
    const { columns, footer, rows } = this.props;

    return (
      <Paper>
        {this.tableHeader()}
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(column => <TableCell key={column.key}>{column.header}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    {columns.map(column => {
                      const {display, link} = row[column.key];
                      if (link) {
                        return (
                          <ClickableCell
                            onClick={() => this.handleLinkClick(link)}
                            key={column.key}>{display}
                          </ClickableCell>
                        );
                      } else {
                        return <TableCell key={column.key}>{display}</TableCell>
                      }
                    })}
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
        {footer}
      </Paper>
    );
  }
}

CustomTable.defaultProps = {
  titleTypographyVariant: 'h4'
}

CustomTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  })).isRequired,
  footer: PropTypes.element,
  rows: PropTypes.arrayOf(PropTypes.object),
  rightHeader: PropTypes.element,
  title: PropTypes.string.isRequired,
  titleTypographyVariant: PropTypes.string.isRequired
};

export default withRouter(CustomTable);
