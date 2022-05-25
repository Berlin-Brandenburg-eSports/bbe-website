import { GameEdit, Role } from '@bbe/types';
import { FileService, GameService, getErrorMessage, useAuth, useGames, useImages } from '@bbe/utils';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import Upload from '../../components/Upload';

interface GameDialogProps {
  open: boolean;
  onClose: () => void;
}

const GameDialog: FC<GameDialogProps> = ({ open, onClose }) => {
  const [game, setGame] = useState<Partial<GameEdit>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState<FormData>();

  const handleImage = (data: FormData): void => {
    setFormData(data);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { id, value } = event.target;
    setGame({ ...game, [id]: value });
  };

  const handleClose = (): void => {
    setError('');
    onClose();
    setGame({});
  };

  const saveGame: FormEventHandler<HTMLDivElement> = async (event): Promise<void> => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (formData) {
        const images = await FileService.uploadImages(formData);

        await GameService.createGame({ ...game, image: images[0]._id });

        handleClose();
      }
    } catch (error) {
      const message = getErrorMessage(error);
      setError(message);
    }

    setLoading(false);
  };

  return (
    <Dialog open={open} onClose={onClose} onSubmit={saveGame} fullWidth>
      <form>
        <DialogTitle>Create Game</DialogTitle>
        <DialogContent>
          {!!error && <Alert severity="error">{error}</Alert>}
          <Box py={1}>
            <Upload handleFiles={handleImage} />
            <TextField fullWidth required id="name" name="name" label="Name" value={game.name || ''} onChange={handleInputChange} />
          </Box>
        </DialogContent>
        <DialogActions>
          <LoadingButton variant="contained" loading={loading} type="submit">
            Save
          </LoadingButton>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const GamesPage: FC = () => {
  const { data: games = [], mutate } = useGames();
  const { data: auth } = useAuth();
  const { data: images = [] } = useImages();
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
          {games.map(({ name, slug }) => (
            <Grid item key={slug}>
              {name} - {slug}
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          {images.map((img) => (
            <Grid item key={img.src} xs={12} sm={3}>
              <img src={img.src} width="100%" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default GamesPage;
