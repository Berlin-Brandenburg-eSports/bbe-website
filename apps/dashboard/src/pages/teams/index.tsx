import { Role } from '@bbe/types';
import { useAuth, useTeams } from '@bbe/utils';
import { Box, Button } from '@mui/material';
import { FC } from 'react';

const TeamsPage: FC = () => {
  const { data: teams = [] } = useTeams();
  const { data: auth } = useAuth();

  return (
    <Box>
      {auth?.role === Role.Admin && <Button variant="contained">Create Team</Button>}
      {teams.map(({ name }) => (
        <p>{name}</p>
      ))}
    </Box>
  );
};

export default TeamsPage;
