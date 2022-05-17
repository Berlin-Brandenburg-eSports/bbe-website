import { env } from '@bbe/types';
import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const LoginPage: FC = () => {
  const { pathname } = useLocation();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" position="absolute" top={0} bottom={0} left={0} right={0}>
      <Box>
        <Button variant="contained" href={`${env.API_URL}/v1/auth/login?ref=${pathname}`}>
          <FaDiscord style={{ marginRight: '0.5rem' }} />
          Login with Discord
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
