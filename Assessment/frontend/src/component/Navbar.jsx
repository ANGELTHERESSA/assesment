import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{backgroundColor:'maroon'}}>
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }} style={{fontFamily:'inherit'}}>
          Blog Application
        </Typography>
        <Link to='/a'>
              <Button variant='contained' style={{backgroundColor:'orange'}}>
                Home
              </Button>
              </Link>&nbsp;
              <Link to='/b'>
              <Button variant='contained' style={{backgroundColor:'orange'}}>
                Add Blog
              </Button>
              </Link>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
