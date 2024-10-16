// src/Register.jsx

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, InputAdornment, Grid, Typography } from '@mui/material';
import { AccountCircle, Email, Lock, CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const Signup = ({ setName, setEmail, setPassword }) => {
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      if (response.status === 201) {
        navigate('/login'); // Redirect to login after successful registration
      }
      // Store user data in localStorage
      // localStorage.setItem('user', JSON.stringify({
      //   name: values.name,
      //   email: values.email,
      //   password: values.password
      // }))
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <Grid container sx={{ height: '100vh', background: 'linear-gradient(72.2deg, rgba(115, 159, 232, 0.9) 26.49%, rgba(79, 24, 202, 0.9) 85.53%)' }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'url(https://www.fastweb.com/uploads/article_photo/photo/2038168/Office___Administrative_Part-Time_Jobs_on_Fastweb.jpg)', // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Sign Up
          </Typography>
          <Formik
            initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                handleRegister(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: '0 auto' }}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <Field
                      as={TextField}
                      id="name"
                      name="name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <Field
                      as={TextField}
                      id="email"
                      name="email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email />
                          </InputAdornment>
                        ),
                      }}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <Field
                      as={TextField}
                      id="password"
                      name="password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock />
                          </InputAdornment>
                        ),
                      }}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                      as={TextField}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CheckCircle />
                          </InputAdornment>
                        ),
                      }}
                      error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                      helperText={touched.confirmPassword && errors.confirmPassword}
                    />
                  </div>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Signup
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Already have an account?{' '}
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => navigate('/login')}
            >
              Login
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
