import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import secondPic from "../../../shared/images/secondPic.jpg";
import mainBGWhite from "../../../shared/images/mainBGWhite.png";
import kidsCake from "../../../shared/images/kidsCake.png"

import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  picBG: {
      backgroundImage: `url(${mainBGWhite})`,
      backgroundSize: 'cover'
  },
  pic2: {
      backgroundImage: `url(${secondPic})`,
      backgroundSize: 'cover'
  },
  kcImage: {
      backgroundImage: `url(${kidsCake})`,
      backgroundSize: 'cover'
  },
}));

const Part2 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const mobileBreakpoint = 600;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, minHeight:'100vh', pb:5 }}  className={classes.picBG}>
      <Grid
        container
        sx={{minHeight:'100vh'}}
        >
        <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={12}>
          <Grid item container direction="row" alignItems="center" justifyContent="center" md={2} sx={{ bgcolor: 'primary.main', py:2, borderRadius: 5,mx:3, my:1}}>
              <MenuBookIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
              <Typography variant="h6" color="secondary" sx={{fontWeight: 400, pl:2}}>Innovative education</Typography>
          </Grid>
          <Grid item container direction="row" alignItems="center" justifyContent="center" md={4} sx={{ bgcolor: 'primary.main', py:2, px:3, borderRadius: 5,mx:3, my:1}}>

                <Grid item sm={1}>
                    <LocalFloristIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
                </Grid>
                <Grid item sm={11}>
                    <Typography variant="h6" color="secondary" sx={{fontWeight: 400, textAlign: 'center'}}>Exceptional character and personality development</Typography>
                </Grid>

          </Grid>
          <Grid item container direction="row" alignItems="center" justifyContent="center" md={2} sx={{ bgcolor: 'primary.main', py:2, borderRadius: 5,mx:3, my:1}}>
              <FavoriteIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
              <Typography variant="h6" color="secondary" sx={{fontWeight: 400, pl:2}}>Love for learning</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          sx={{ p:2 }}>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sm={12} md={6}>
              <Box sx={{p:3}}>
                <Typography variant="h3" color="#36096B" sx={{fontWeight: 900, pb:4}}>At MSHA, we create learning experiences like never before</Typography>
                <Typography variant="h6" color="primary" sx={{fontWeight: 400, pb:1}}>Our school programs are tailored to offer an immersive experience for your child preparing them not only in the classroom but in life as well.</Typography>
                <Typography variant="h6" color="primary" sx={{fontWeight: 400}}>When you enroll your child at Mercy Safe Haven, they are granted incredible opportunities to learn, explore and grow, we believe that the values we instill are just as important as the curriculum we teach. Our school is distinguished by compassion, integrity, respect, and inclusivity that combine in allowing our students to become confident, well-rounded leaders in life. </Typography>
              </Box>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sm={12}
              md={6}
              sx={{p:3}}>
              {mobileBreakpoint
                ? (<Box className={classes.pic2} sx={{ width:'100%', height:"90%", borderRadius: 5, p:5 }}></Box>)
                : (<Box className={classes.pic2} sx={{ width:'100%', height:"90%", borderRadius: 16 }}></Box>)
              }
            </Grid>

        </Grid>
      </Grid>
    </Box>
  );
}

export default Part2;
