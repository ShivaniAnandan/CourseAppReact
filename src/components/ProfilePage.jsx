import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Typography, Avatar, IconButton, TextField, Button, Grid } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { myContext } from '../App';

// Validation Schema for profile form
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ProfilePage = () => {
  const { user, setUser } = useContext(myContext); // Access user from context
  const [profileImage, setProfileImage] = useState(''); // State to hold the profile image
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  
  useEffect(() => {
    // Ensure user is not null before accessing its properties
    if (user) {
      // setName(user.name);
      // setEmail(user.email);
      setProfileImage(user.profileImage || ''); // Set initial profile image from user data
    }
  }, [user]);

  // console.log(name,email);
  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setProfileImage(upload.target.result); // Set image to local state
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission and update user data
  const handleSaveChanges = (values) => {
    const updatedUser = {
      ...user,
      name: values.name,
      email: values.email,
      profileImage: profileImage,
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert('Profile updated successfully');
  };

  if (!user) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Grid
      container
      sx={{
        height: '100vh',
        background: 'linear-gradient(72.2deg, rgba(115, 159, 232, 0.9) 26.49%, rgba(79, 24, 202, 0.9) 85.53%)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '80%', maxWidth: 600, backgroundColor: 'white', padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Edit Profile
        </Typography>
        
        {/* Profile Image Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3, position: 'relative' }}>
          <Avatar src={profileImage} sx={{ width: 120, height: 120 }} />
          <IconButton
            component="label"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: '25%',
              backgroundColor: 'white',
              '&:hover': { backgroundColor: 'gray' },
            }}
          >
            <Edit />
            <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
          </IconButton>
        </Box>

        {/* Formik Form */}
        <Formik
          initialValues={{
            name: user.name || '',
            email: user.email || '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched }) => (
            <Form>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Name Field */}
                <Field
                  as={TextField}
                  name="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                
                {/* Email Field */}
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                {/* Save Changes Button */}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Save Changes
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Grid>
  );
};

export default ProfilePage;
