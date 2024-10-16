import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { token } = useParams(); // Get the token from the URL
  const navigate = useNavigate();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');
    
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`https://courseappbackend-yydm.onrender.com/api/auth/reset-password/${token}`, { newPassword: newPassword });
      setMessage(response.data.message);
      setTimeout(() => navigate('/login'), 2000); // Redirect to login after success
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(115, 159, 232, 0.9), rgba(79, 24, 202, 0.9))',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          maxWidth: 400,
          width: '100%',
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <LockOutlined sx={{ fontSize: 40, color: 'primary.main' }} />
        </Box>
        <Typography variant="h5" component="h1" gutterBottom>
          Reset Password
        </Typography>
        <Typography variant="body1" gutterBottom>
          Enter a new password for your account.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="New Password"
            variant="outlined"
            fullWidth
            required
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            sx={{ marginY: 2 }}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            required
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            sx={{ marginY: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{ mb: 2 }}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </Button>
        </form>

        {message && <Typography color="success.main">{message}</Typography>}
        {error && <Typography color="error.main">{error}</Typography>}
      </Paper>
    </Grid>
  );
};

export default ResetPassword;
