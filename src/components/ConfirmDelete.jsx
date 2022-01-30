import React from 'react';

import { Modal, Box, Button, Typography } from '@mui/material';
import { styles } from './styles.jsx';

export const ConfirmDeleteModal = ({
  isOpen,
  handleClose,
  handleDelete,
  task,
}) => (
  <Modal open={isOpen}>
    <Box sx={styles}>
      <Typography variant="h6" component="h2">
        Are You Sure?
      </Typography>
      <Typography sx={{ mt: 2 }}>This action cannot be undone.</Typography>

      <Button
        onClick={() => {
          handleClose();
          handleDelete(task);
        }}
      >
        Yes
      </Button>
      <Button onClick={handleClose}>No</Button>
    </Box>
  </Modal>
);
