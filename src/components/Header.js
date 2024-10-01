import React from 'react';
import Login from './HeaderComponent/Login';
import SignUp from './HeaderComponent/SignUp';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between', // Space between Daraz title and buttons
            alignItems: 'center',
            padding: '0 16px' // Add padding for better spacing
          }}
        >
          {/* Left side: Daraz title */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Daraz
          </Typography>

          {/* Right side: Login and Sign Up buttons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Login />
            <SignUp />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
