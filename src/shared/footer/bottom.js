import React from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import mainBG from "./../../shared/images/mainBG.png";
import kidsCake from "./../../shared/images/kidsCake.png";
import logo from "./../../shared/images/logo.jpg";
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

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
  const currentYear = new Date().getFullYear();
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

          <Typography variant="h3" color="secondary" component={Link} to='/contact' sx={{fontWeight: 900, pb:2, textAlign: 'center', textDecoration:'none'}}>Contact us ➞</Typography>

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
        <Grid item container direction="row" alignItems="center" justifyContent="center" xs={12} md={2} sx={{ py:2, mx:3}}>
            <Typography variant="h6" color="primary" sx={{fontWeight: 400, pl:2}}>Mercy Safe Haven Academy</Typography>
        </Grid>
        <Grid item container direction="row" alignItems="center" justifyContent="center" xs={12} md={4} sx={{ py:2,mx:3}}>
            <Typography variant="h6" color="primary" sx={{fontWeight: 400, pl:2}}>Copyright © {currentYear}</Typography>
        </Grid>
        <Grid item container direction="row" alignItems="center" justifyContent="center" xs={12} md={2} sx={{ py:2,mx:3}}>
          <Stack direction="row" spacing={1}>
            <IconButton href="https://www.youtube.com/channel/UCeiaIR_wGW9FO1IPmENXNwQ" target="_blank" aria-label="delete" color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}>
              <YouTubeIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm" color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}>
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>


    </Box>
  );
}

export default Footer;
