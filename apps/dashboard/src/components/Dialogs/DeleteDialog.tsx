import { LoadingButton } from '@mui/lab';
import { Alert, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FC } from 'react';

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  loading?: boolean;
  error?: string;
}

const DeleteDialog: FC<DeleteDialogProps> = ({ open, onClose, onDelete, loading, error }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Löschen</DialogTitle>
      <DialogContent dividers>
        {error && <Alert severity="error">{error}</Alert>}
        Bist du sicher?
      </DialogContent>
      <DialogActions>
        <LoadingButton autoFocus onClick={onClose}>
          Abbrechen
        </LoadingButton>
        <LoadingButton onClick={onDelete} loading={loading}>
          Löschen
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
