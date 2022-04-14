import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { env } from '../../configs/env.config';

const LoginPage: FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button variant="contained" href={`${env.API_URL}/v1/auth/login`}>
        <FaDiscord style={{ marginRight: '0.5rem' }} />
        Login with Discord
      </Button>
    </Box>
  );
};

export default LoginPage;
