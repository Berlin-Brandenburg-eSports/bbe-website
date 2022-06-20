import { Role } from '@bbe/types';
import { useAuth, useGames } from '@bbe/utils';
import { Box, Button, Grid } from '@mui/material';
import { FC, useState } from 'react';
import GameCard from '../../components/Cards/GameCard';
import GameDialog from '../../components/Dialogs/GameDialog';

const GamesPage: FC = () => {
  const { data: games = [], mutate } = useGames();
  const { data: auth } = useAuth();
  const [open, setOpen] = useState<boolean>(false);

  const onClose = (): void => {
    setOpen(false);
    mutate();
  };

  const onOpen = (): void => {
    setOpen(true);
  };

  return (
    <>
      <GameDialog open={open} onClose={onClose} />
      <Box>
        {auth?.role === Role.Admin && (
          <Button variant="contained" onClick={onOpen}>
            Create Game
          </Button>
        )}
        <Grid container spacing={2}>
          {games.map((game) => (
            <Grid item key={game.slug}>
              <GameCard game={game} onDelete={mutate} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default GamesPage;
