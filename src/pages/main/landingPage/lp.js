import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import mainBG from "../../../shared/images/mainBG.png";
import kidsCake from "../../../shared/images/kidsCake.png";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  lpBackgroundImage: {
      backgroundImage: `url(${mainBG})`,
      backgroundSize: 'cover'
  },
  kcImage: {
      backgroundImage: `url(${kidsCake})`,
      backgroundSize: 'cover'
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, minHeight:'100vh' }} className={classes.lpBackgroundImage}>
      <Grid
        container
        sx={{height:'100vh'}}
        >
        <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={5}
        sx={{ p:10}}>
          <Box>
            <Typography variant="h2" color="secondary" sx={{fontWeight: 900, pb:2}}>Welcome to Mercy Safe Haven Academy</Typography>
            <Box sx={{pr:20}}><Typography variant="h5" color="primary" sx={{fontWeight: 700}}>Cultivating Excellence, Ingenuity and Creativity to the pioneers of tomorrow.</Typography></Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={7}
          sx={{  }}>
          <Box className={classes.kcImage} sx={{ width: 900, height: 500, borderRadius: 16  }}></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LandingPage;
