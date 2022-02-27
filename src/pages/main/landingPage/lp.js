import React, {useState, useEffect} from "react";
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
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 1450;

  useEffect(() => {
   const handleWindowResize = () => setWidth(window.innerWidth);
   window.addEventListener("resize", handleWindowResize);
   return () => window.removeEventListener("resize", handleWindowResize);
  },[]);

  const NormalView = () => {
    return (
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
          sm={12}
          md={5}
          sx={{p:7}}>
          <Box>
            <Typography variant="h2" color="secondary" sx={{fontWeight: 900, pb:2}}>Welcome to Mercy Safe Haven Academy</Typography>
            <Box><Typography variant="h5" color="primary" sx={{fontWeight: 700}}>Cultivating Excellence, Ingenuity and Creativity to the pioneers of tomorrow.</Typography></Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sm={12}
          md={7}
          sx={{p:3}}>
            <Box className={classes.kcImage} sx={{ width:'90%', height:"70%", borderRadius: 5 }}></Box>
        </Grid>
      </Grid>
    );
  }
  const MobileView = () => {
    return (
      <Grid
        container
        sx={{p:5}}
      >
        <Grid item xs>
          <Box>
            <Typography variant="h2" color="secondary" sx={{fontWeight: 900, pb:2}}>Welcome to Mercy Safe Haven Academy</Typography>
            <Box><Typography variant="h5" color="primary" sx={{fontWeight: 700}}>Cultivating Excellence, Ingenuity and Creativity to the pioneers of tomorrow.</Typography></Box>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ height:"40vh", mt:5 }}>
          <Box component="img" className={classes.kcImage} sx={{ width:'100%', height:"100%", borderRadius: 5}}/>
        </Grid>
      </Grid>
    );
  }

  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.lpBackgroundImage}>
      {width > breakPoint
        ? <NormalView/>
        : <MobileView />
      }
    </Box>
  );
}

export default LandingPage;
