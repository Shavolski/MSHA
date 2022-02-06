import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import mainBG from "../../../shared/images/mainBG.png";
import kidsCake from "../../../shared/images/kidsCake.png";
import logo from "../../../shared/images/logo.jpg";
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
  logoImage: {
      backgroundImage: `url(${logo})`,
      backgroundSize: 'cover'
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{height:'40vh'}}
        className={classes.lpBackgroundImage}
        >
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sx={{ p:10}}>
          <Box>
            <Typography variant="h2" color="secondary" sx={{fontWeight: 900, pb:2}}>Learn more about us ➞</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{my:7}}
        xs={12}>
        <Grid item container direction="row" alignItems="center" justifyContent="center" xs={2} sx={{ py:2, mx:3}}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center">
            <Grid item md={1}>
              <Box className={classes.logoImage} sx={{ width: 30, height: 30, borderRadius: 16}}></Box>
            </Grid>
            <Grid item md={11}>
              <Typography variant="h7" component="div" color="primary" sx={{ fontWeight: 400, ml:2 }}>
                Mercy Safe Haven Academy
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="row" alignItems="center" justifyContent="center" xs={4} sx={{ py:2,mx:3}}>
            <Typography variant="h7" color="primary" sx={{fontWeight: 400, pl:2}}>Copyright © 2022</Typography>
        </Grid>
        <Grid item container direction="row" alignItems="center" justifyContent="center" xs={2} sx={{ py:2,mx:3}}>
            <Typography variant="h7" color="primary" sx={{fontWeight: 400, pl:2}}>Love for learning</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
