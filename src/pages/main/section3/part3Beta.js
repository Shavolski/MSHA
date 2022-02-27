import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import SecondPic from "../../../shared/images/secondPic.jpg";
import MainBGWhite from "../../../shared/images/mainBGWhite.png";


import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ComputerIcon from '@mui/icons-material/Computer';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  picBG: {
      backgroundImage: `url(${MainBGWhite})`,
      backgroundSize: 'cover'
  },
  pic2: {
      backgroundImage: `url(${SecondPic})`,
      backgroundSize: 'cover'
  },
  responsiveGrid: {
    padding:'15%',
    [theme.breakpoints.down('md')]: {
      padding: '10%',
      marginTop:'20%',
    },
  },
}));

const Part3 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const mobileBreakpoint = 600;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1}} className={classes.responsiveGrid}>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sx={{ pb:10 }}>
            <Typography variant="h3" color="#36096B" sx={{fontWeight: 900}}>An academy that's a breath of fresh air.</Typography>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <CardContent sx={{ bgcolor: 'primary.main', borderRadius: 5}}>
              <DirectionsBusIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
              <Typography variant="h5" component="div" color="#36096B" sx={{fontWeight: 700, mb: 1.5}}>
                Transport Available
              </Typography>
              <Typography sx={{ mb: 1.5, fontWeight: 400 }} color="secondary" variant="h6">
                We have a bus and a minibus to safely bring your child from home to school and other outdoor school activities. Our drivers and vehicles are well vetted to ensure the safety of your child on the road.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardContent sx={{ bgcolor: 'primary.dark', borderRadius: 5}}>
              <RestaurantIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
              <Typography variant="h5" component="div"  color="primary" sx={{fontWeight: 700, mb: 1.5}}>
                Nutritious Meals
              </Typography>
              <Typography sx={{ mb: 1.5, fontWeight: 400 }} color="secondary" variant="h6">
                We offer healthy balanced meals for your child.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent sx={{ bgcolor: 'primary.dark', borderRadius: 5}}>
              <WbSunnyIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
              <Typography variant="h5" component="div"  color="primary" sx={{fontWeight: 700, mb: 1.5}}>
                Creative thinking
              </Typography>
              <Typography sx={{ mb: 1.5, fontWeight: 400 }} color="secondary" variant="h6">
                Instead of following the norm, we guide your child to a path that let's them move, think, and reason creatively as they are the future of our nation.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent sx={{ bgcolor: 'primary.main', borderRadius: 5}}>
              <ComputerIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
              <Typography variant="h5" component="div" color="#36096B" sx={{fontWeight: 700, mb: 1.5}}>
                Computer classes
              </Typography>
              <Typography sx={{ mb: 1.5, fontWeight: 400 }} color="secondary" variant="h6">
                As we welcome the virtual and digital age, we equip your child with the necessary computer skills to put them ahead of the competition and band their future early.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
    </Box>
  );
}

export default Part3;
