import { User } from '@bbe/types';
import { useUsers } from '@bbe/utils';
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { Box } from '@mui/system';
import { ChangeEvent, FC, useState } from 'react';

interface UserRowProps {
  user: User;
}

const UserRow: FC<UserRowProps> = ({ user }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{user.id}</DialogTitle>
        <DialogContent dividers>{JSON.stringify(user)}</DialogContent>
      </Dialog>
      <TableRow key={user.id} hover onClick={handleOpen} sx={{ cursor: 'pointer' }}>
        <TableCell>{user.memberId}</TableCell>
        <TableCell>
          <Box display="flex" alignItems="center">
            <Avatar src={user.discord.avatar} sx={(theme) => ({ marginRight: theme.spacing(1) })} />
            {user.discord.tag}
          </Box>
        </TableCell>
      </TableRow>
    </>
  );
};

const UsersPage: FC = () => {
  const { data: users = [] } = useUsers();
  const [rowsPerPage, setRowsPerPage] = useState<number>(20);
  const [page, setPage] = useState<number>(0);

  const handleChangePage = (_event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box height="100%">
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell width="100%">User</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 20, 50]}
        count={users.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default UsersPage;
