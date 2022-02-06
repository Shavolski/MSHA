import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';

import logo from "./../../shared/images/logo.jpg";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  logoImage: {
      backgroundImage: `url(${logo})`,
      backgroundSize: 'cover'
  },
}));

const Appbar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static" color="transparent" sx={{py:2}}>
        <Toolbar>
          <Box sx={{ flexGrow: 1}} >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center">
              <Grid item md={1}>
                <Box className={classes.logoImage} sx={{ width: 80, height: 80, borderRadius: 16, mb:2 }}></Box>
              </Grid>
              <Grid item md={11}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 400 }}>
                  Mercy Safe Haven Academy
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Button color="inherit" sx={{mx:2}}>Our Story</Button>
          <Button color="inherit" sx={{mx:2}}>Contact us</Button>
          <Button color="inherit" variant="outlined" startIcon={<SchoolIcon />} sx={{mx:2}}>Enroll</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Appbar;
