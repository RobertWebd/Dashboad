import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import toastStore from '../../store/toast-store';
import { observer } from 'mobx-react-lite';
import { Alert } from '@mui/material';

interface CustomizedSnackbarProps {
  text: string;
  extraState?: boolean;
}

export const CustomizedSnackbar: React.FC<CustomizedSnackbarProps> = observer(({ text, extraState }) => {
  const { openToast, handleClose } = toastStore;

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openToast || extraState} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {text}
        </Alert>
      </Snackbar>
    </Stack>
  );
});
