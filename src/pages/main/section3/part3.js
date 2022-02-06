import React from "react";
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
}));

const Part3 = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, height:'100vh', mb:30 }} >
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
          xs={12}
          sx={{ p:5 }}>
          <Box sx={{p:10}}>
            <Typography variant="h3" color="#36096B" sx={{fontWeight: 900}}>An academy that's a breath of fresh air.</Typography>
          </Box>
        </Grid>
        <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={12}>
          <Grid item container direction="column" alignItems="center" justifyContent="center" xs={3}>
            <Grid item sx={{ bgcolor: 'primary.main', borderRadius: 5, mt:3, p:7}}>
              <CardContent>
                <DirectionsBusIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
                <Typography variant="h5" component="div" color="#36096B" sx={{fontWeight: 700, mb: 1.5}}>
                  Transport Available
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="secondary">
                  We have a bus and a minibus to safely bring your child from home to school and other outdoor school activities. Our drivers and vehicles are well vetted to ensure the safety of your child on the road.
                </Typography>
              </CardContent>
            </Grid>
            <Grid item sx={{ bgcolor: 'primary.dark', borderRadius: 5, mt:3, p:7}}>
              <CardContent>
                <RestaurantIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
                <Typography variant="h5" component="div"  color="primary" sx={{fontWeight: 700, mb: 1.5}}>
                  Nutritious Meals
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="secondary">
                  We offer healthy balanced meals for your child.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>

          <Grid item container direction="column" alignItems="center" justifyContent="center" xs={3}>
            <Grid item xs={12} sx={{ bgcolor: 'primary.dark', borderRadius: 5, mt:3, p:7, ml:2}}>
              <CardContent>
                <WbSunnyIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
                <Typography variant="h5" component="div"  color="primary" sx={{fontWeight: 700, mb: 1.5}}>
                  Creative thinking
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="secondary">
                  Instead of following the norm, we guide your child to a path that let's them move, think, and reason creatively as they are the future of our nation.
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sx={{ bgcolor: 'primary.main', borderRadius: 5, mt:3, p:7, ml:2}}>
              <CardContent>
                <ComputerIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
                <Typography variant="h5" component="div" color="#36096B" sx={{fontWeight: 700, mb: 1.5}}>
                  Computer classes
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="secondary">
                  As we welcome the virtual and digital age, we equip your child with the necessary computer skills to put them ahead of the competition and band their future early.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Box>
  );
}

export default Part3;
