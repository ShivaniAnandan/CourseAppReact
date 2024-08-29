import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, InputAdornment, Grid, Typography } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { login } from '../redux/UserSlice';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login = ({ setLogin }) => {
  const navigate = useNavigate();
//   const dispatch = useDispatch();

  const profileImages = [
    'https://t3.ftcdn.net/jpg/02/40/30/56/240_F_240305699_X3ky3vcpPRDNBtg1qjmLW7ntzPGU0eGN.jpg',
    // add more images here
  ];

  const getRandomProfileImage = () => {
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    return profileImages[randomIndex];
  };

  const storedUser = JSON.parse(localStorage.getItem('user'));

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
          src="https://readymadeui.com/signin-image.webp" // replace with your desired image URL
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
            onSubmit={(values) => {
              if (storedUser && values.email === storedUser.email && values.password === storedUser.password) {
                const profileImage = getRandomProfileImage();
                localStorage.setItem('user', JSON.stringify({ name: storedUser.name, email: values.email, profileImage }));
                setLogin(true);
                navigate('/');
              } else {
                alert('Invalid email or password');
              }
            }}
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
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
