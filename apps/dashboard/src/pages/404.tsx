import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { MdWarning } from 'react-icons/md';

const NotFound: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
    >
      <MdWarning size="4rem" />
      <Typography variant="h5" paddingTop={1}>
        Not Found
      </Typography>
    </Box>
  );
};

export default NotFound;
