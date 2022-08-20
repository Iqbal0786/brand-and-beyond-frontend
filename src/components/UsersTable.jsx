import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';


export default function UsersTable({data}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '90%', overflow: 'hidden'  ,margin:"auto", marginTop:"40px", marginBottom:"50px"}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              <TableCell sx={{fontWeight:"bolder" ,fontFamily:"sans-serif" , fontSize:"14px"}}>Email Address</TableCell>
              <TableCell sx={{fontWeight:"bolder" ,fontFamily:"sans-serif" , fontSize:"14px"}}>Role Type </TableCell>
              <TableCell sx={{fontWeight:"bolder" ,fontFamily:"sans-serif" , fontSize:"14px"}}>Registration Date </TableCell>
              <TableCell sx={{fontWeight:"bolder" ,fontFamily:"sans-serif" , fontSize:"14px"}}>Registration Time </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
            <TableCell>{row.email}</TableCell>
              <TableCell>{row.roles.join(" ")}</TableCell>
              <TableCell>{ new Date(row.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>{ new Date(row.createdAt).toLocaleTimeString()}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10,25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}