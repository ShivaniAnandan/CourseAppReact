// src/Contact.jsx

import React, { useState } from 'react';
import { TextField, Button, Box, Modal, Typography, IconButton } from '@mui/material';
import { CheckCircleOutline, Email, Phone, Close } from '@mui/icons-material';
import Footer from './Footer';

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleOpen();
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: 4,
          background: 'linear-gradient(72.2deg, rgba(115, 159, 232, 0.9) 26.49%, rgba(79, 24, 202, 0.9) 85.53%)',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400 }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <IconButton position="start">
                    <Email />
                  </IconButton>
                ),
              }}
            />
            <TextField
              label="Phone"
              type="tel"
              variant="outlined"
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <IconButton position="start">
                    <Phone />
                  </IconButton>
                ),
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="thank-you-modal"
        aria-describedby="thank-you-message"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
            borderRadius: 2,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <Close />
          </IconButton>
          <CheckCircleOutline color="success" sx={{ fontSize: 50 }} />
          <Typography id="thank-you-modal" variant="h6" component="h2" sx={{ mt: 2 }}>
            Thank you!
          </Typography>
          <Typography id="thank-you-message" sx={{ mt: 1 }}>
            We will get back to you soon.
          </Typography>
        </Box>
      </Modal>

      <Footer />
    </div>
  );
};

export default Contact;
