import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Snackbar,
  Alert,
} from '@mui/material';



function Signup() {
  const [signupOpen, setSignupOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false); // For success message
  const [error, setError] = useState(''); // For error message


  const handleSignupOpen = () => {

    setSignupOpen(true);
  };

  const handleSignupClose = () => {
    setSignupOpen(false);
    setName(''); // Clear name input
    setEmail(''); // Clear email input
    setPassword(''); // Clear password input
    setError(''); // Clear error message
  };

  const handleSignup = () => {

    // Simulate signup logic
    if (name && email && password) {
        axios.post('http://127.0.0.1:8000/api/signup/', {
            username: name,
            email: email,
            password: password,
          })
          .then((response) => {
            console.log('Signup successful:', response.data);
            setSuccess(true); // Show success message
            handleSignupClose(); // Close signup dialog
          })
          .catch((error) => {
            console.error('Error during signup:', error);
            setError("Sign Up Failed, please try again");
          });
        } else {
          setError('Please fill in all fields'); // Show error message
        }

  };

  return (
    <div>


       <Button color="inherit" onClick={handleSignupOpen}>Sign Up</Button>


      {/* Signup Dialog */}
      <Dialog open={signupOpen} onClose={handleSignupClose}>

        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={name} // Controlled input
            onChange={(e) => setName(e.target.value)} // Update name state
          />
          <TextField
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={email} // Controlled input
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password} // Controlled input
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleSignupClose}>Cancel</Button>
          <Button color="primary" onClick={handleSignup}>Sign Up</Button>
        </DialogActions>
      </Dialog>


      {/* Snackbar for success message */}
      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>

        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Signup successful!
        </Alert>
      </Snackbar>

      {/* Snackbar for error message */}
      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError('')}>
        <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Signup;
