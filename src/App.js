import React from 'react';
import { AppBar, Container, Toolbar, Typography, Box } from '@material-ui/core';
import City from './City';

function App() {
  return (
    <Container maxWidth="sm">      
      <Box my={4}>
      <AppBar position="static">
        <Toolbar variant="dense">          
          <Typography variant="h6" color="inherit">
          EJAM Interview
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography component={'span'} color="textSecondary">
        <City />
      </Typography>
      </Box>
    </Container>
  );
}

export default App;
