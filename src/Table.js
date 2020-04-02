import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});
export default function CustomizedTables(props) {
  const classes = useStyles();
  console.log(props.cityInfo);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Day</StyledTableCell>
            <StyledTableCell align="right">Low</StyledTableCell>
            <StyledTableCell align="right">High</StyledTableCell>
            <StyledTableCell align="right">Moonsoon</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            (props.cityInfo.forecasts).map((row) => (
            <StyledTableRow key={row['date']}>
              <StyledTableCell component="th" scope="row">
                {new Date(row['date'] * 1000).getDate() + '/' + (new Date(row['date'] * 1000).getMonth()+1) + '/' + new Date(row['date'] * 1000).getFullYear()}
              </StyledTableCell>
              <StyledTableCell align="right">{row['day']}</StyledTableCell>
              <StyledTableCell align="right">{row['low']}</StyledTableCell>
              <StyledTableCell align="right">{row['high']}</StyledTableCell>
              <StyledTableCell align="right">{row['text']}</StyledTableCell>
            </StyledTableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
