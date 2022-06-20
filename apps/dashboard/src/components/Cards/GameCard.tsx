import { Game } from '@bbe/types';
import { GameService, getErrorMessage } from '@bbe/utils';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, PaperPropsVariantOverrides, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import DeleteDialog from '../Dialogs/DeleteDialog';

interface GameCardProps {
  game: Game;
  onDelete?: () => PaperPropsVariantOverrides;
}

const GameCard: FC<GameCardProps> = ({ game, onDelete }) => {
  const { image, name, description } = game;
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const toggleDialog =
    (o: boolean): (() => void) =>
    () => {
      setOpen(o);
    };

  const handleDelete = async (): Promise<void> => {
    setLoading(true);

    try {
      await GameService.deleteGame(game.slug);
      if (onDelete) onDelete();
    } catch (error) {
      const message = getErrorMessage(error);
      setError(message);
    }

    setLoading(false);
  };

  return (
    <>
      <DeleteDialog open={open} onClose={toggleDialog(false)} onDelete={handleDelete} error={error} loading={loading}>
        Bist du sicher?
      </DeleteDialog>
      <Card sx={{ width: '100%' }}>
        <CardActionArea>
          {image && <CardMedia component="img" sx={{ objectFit: 'cover', aspectRatio: '16 / 9' }} image={image?.src} alt={name} />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" startIcon={<MdDelete />} color="error" onClick={toggleDialog(true)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default GameCard;
