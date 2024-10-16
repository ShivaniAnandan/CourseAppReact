import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, InputAdornment, Grid, Typography } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../App';
import axios from 'axios';
import { ClipLoader } from 'react-spinners'; // Import the spinner

// Validation Schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login = ({ setLogin , isAuthenticated }) => {
  const { setUser } = useContext(myContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State to manage the loader

   // If user is already logged in, redirect them away from the login page
  //  useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/');
  //   }
  // }, [isAuthenticated, navigate]);

  // Profile images array
  const profileImages = [
    'https://t3.ftcdn.net/jpg/02/40/30/56/240_F_240305699_X3ky3vcpPRDNBtg1qjmLW7ntzPGU0eGN.jpg',
    'https://t4.ftcdn.net/jpg/05/74/97/67/240_F_574976795_xGCzNlYpDw7wf6gSWFLVaFuTGhOMuaTV.jpg',
    'https://t3.ftcdn.net/jpg/06/01/50/96/240_F_601509638_jDwIDvlnryPRhXPsBeW1nXv90pdlbykC.jpg',
    'https://t4.ftcdn.net/jpg/05/80/60/33/240_F_580603305_ysEbDBvHCKM9TyzEINHyW614NWLdTe0b.jpg',
    'https://t4.ftcdn.net/jpg/05/47/35/41/240_F_547354169_c1lbO3x3Xw5rwr9WThaHUamGSEZI4IsP.jpg',
    'https://t4.ftcdn.net/jpg/07/31/57/43/240_F_731574325_KUHqpDJBMI4T4dIeoMS7GH0zDSQj0VlT.jpg',
    'https://t4.ftcdn.net/jpg/05/59/46/33/240_F_559463395_dBqVnSCQ479taoyYSaohffGOLQiI3x5w.jpg',
    'https://t4.ftcdn.net/jpg/07/57/31/69/240_F_757316903_KiJ2jGy5vQ0dB9ILtjFo6p48UZ7DAoxa.jpg',
    'https://t3.ftcdn.net/jpg/06/21/27/04/240_F_621270406_n7Vx7a5RuRJVmaI1AEltnsfA2SjkOrrr.jpg',
    'https://t4.ftcdn.net/jpg/03/28/94/79/240_F_328947974_26fQsrAPA5cLoL9fSfWZhLM58AQO6rCz.jpg',
  ];

  const getRandomProfileImage = () => {
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    return profileImages[randomIndex];
  };

  // Form submission handler
  const handleLogin = async (values) => {
    setLoading(true); // Show loader when login request is initiated
    try {
      const response = await axios.post('https://courseappbackend-yydm.onrender.com/api/auth/login', {
        email: values.email,
        password: values.password,
      }, { withCredentials: true });

    const { token, user } = response.data;

    // Store the token in localStorage
    localStorage.setItem('token', token);

    // Add profile image to user object and store in localStorage
     const profileImage = getRandomProfileImage();
     const updatedUser = { ...user, profileImage };
     localStorage.setItem('user', JSON.stringify(updatedUser));

    // Set the user context
     setUser(updatedUser);
     setLogin(true);

     // Navigate to the home page
     navigate('/');
    } catch (error) {
      alert('Invalid email or password');
      console.error('Login error:', error);
    }finally {
      setLoading(false); // Hide loader when request is completed
    }
};

  return (
    <Grid
      container
      sx={{
        height: '100vh',
        background: 'linear-gradient(72.2deg, rgba(115, 159, 232, 0.9) 26.49%, rgba(79, 24, 202, 0.9) 85.53%)',
      }}
    >
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          component="img"
          src="https://readymadeui.com/signin-image.webp"
          alt="Login"
          sx={{ width: '80%', height: 'auto', borderRadius: '10px' }}
        />
      </Grid>

      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '80%', maxWidth: 400 }}>
          <Typography variant="h4" gutterBottom align="center">
            Login
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched }) => (
              <Form>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                  {/* Forgot Password Link */}
                  <Typography variant="body2" align="right">
                    <Link to='/forgot-password' color="primary">
                      Forgot Password?
                    </Link>
                  </Typography>
                  {/* <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                  </Button> */}
                  {loading ? (
                    // Show the spinner while loading
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <ClipLoader color="#e0e0e0" size={50} />
                    </Box>
                  ) : (
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      Login
                    </Button>
                  )}
                </Box>
              </Form>
            )}
          </Formik>
           {/* Signup Redirect */}
           <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
            Don&apos;t have an account?{' '}
            <Link to='/signup' color="primary">
              Signup
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
