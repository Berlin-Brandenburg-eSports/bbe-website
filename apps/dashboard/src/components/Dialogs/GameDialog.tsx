import { GameEdit } from '@bbe/types';
import { FileService, GameService, getErrorMessage } from '@bbe/utils';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import Upload from '../Upload';

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
          <Box>
            <Grid py={1} container spacing={2}>
              <Grid item xs={12}>
                <Upload handleFiles={handleImage} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="name"
                  name="name"
                  label="Name"
                  value={game.name || ''}
                  onChange={handleInputChange}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  id="description"
                  name="description"
                  label="Beschreibung"
                  value={game.description}
                  onChange={handleInputChange}
                  rows={4}
                  variant="standard"
                  required
                />
              </Grid>
            </Grid>
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

export default GameDialog;
