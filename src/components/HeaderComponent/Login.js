import {
    Button,

    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions
  } from '@mui/material';
  import axios from 'axios';

  import React, { useState } from 'react';

  function Login() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password

    const handleLoginOpen = () => {
      setLoginOpen(true);
    };

    const handleLoginClose = () => {
      setLoginOpen(false);
      setEmail(''); // Clear email input
      setPassword(''); // Clear password input
    };

    const handleLogin = () => {
        axios.post('http://127.0.0.1:8000/api/Login/',{
            email:email,
            password:password
        })
        .then((response)=>{
            console.log('Login Successfully :',response.data)
            handleLoginClose();
        })
        .catch((error)=>{
            console.error('Login Error',error)
            throw new Error('Login failed ,Please Try again')
        });


    };

    return (
      <div>
        {/* App Bar with Cart and Login */}


            <Button color="inherit" onClick={handleLoginOpen}>Login</Button>


        {/* Login Dialog */}
        <Dialog open={loginOpen} onClose={handleLoginClose}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
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
            <Button color="primary" onClick={handleLoginClose}>Cancel</Button>
            <Button color="primary" onClick={handleLogin}>Login</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

export default Login
