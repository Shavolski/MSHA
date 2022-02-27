import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

import ImageGallery from './gallery.js';
import YoutubeEmbed from "./youtube.js";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import missionImage from "./../../shared/images/mission_MSHA.jpg";
import visionImage from "./../../shared/images/vision_MSHA.jpg";
import valuesImage from "./../../shared/images/values_MSHA.jpg";
import mainBGWhite from "./../../shared/images/mainBGWhite.png";

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FlagIcon from '@mui/icons-material/Flag';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  kcImage: {
      borderRadius: '8px',
      maxWidth: '100%',
      height: 'auto',
      backgroundSize:'contain',
  },
  picBG: {
      backgroundImage: `url(${mainBGWhite})`,
      backgroundSize: 'cover'
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
            <Box sx={{ p: 3 }}>
                {children}
            </Box>
        </Container>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const About = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    document.title = "Mercy Safe Haven About Us Page";
  }, []);
  return (
    <Box sx={{ flexGrow: 1, minHeight:'100vh', pb:5 }}>
    <Container maxWidth="xl">
      <Box sx={{ p:4 }}>
        <Typography variant="h3" color="#36096B" sx={{fontWeight: 900, pb:4}}>Why Mercy Safe Haven?</Typography>
        <Typography variant="h6" color="primary" sx={{fontWeight: 400, pb:1}}>We pride ourselves on bringing forth new and exciting teaching methodologies that cater to each child's individuality and embraces their personal strengths.</Typography>
        <Typography variant="h6" color="primary" sx={{fontWeight: 400}}>Our mission, vision and value statements were written with a view of preparing children for life. Your child is not simply joining another school school but joining a healthy community that accelerates their potential while still supports a stimulating environment for our children to grow. </Typography>
      </Box>
    </Container>
      <Container maxWidth="lg">
        <Box sx={{ width: 'auto' }}>
          <Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
              <Tab label="Vision" {...a11yProps(0)}/>
              <Tab label="Mission"  {...a11yProps(1)}/>
              <Tab label="Values" {...a11yProps(2)}/>
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container sx={{ bgcolor: 'primary.dark', borderRadius: 2 }}>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <img src={valuesImage} className={classes.kcImage} alt="mercy safe haven academy graduation party in Kiganjo and Thika"/>
                </CardContent>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <RocketLaunchIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
                  <Typography variant="h5" component="div"  color="primary" sx={{fontWeight: 700, mb: 1.5}}>
                    Our Vision
                  </Typography>
                  <Typography sx={{ mb: 1.5, fontWeight: 400 }} color="secondary" variant="h6">
                    Create intellectual and personal excellence for all through collaborative effort!
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container sx={{ bgcolor: 'primary.dark', borderRadius: 2 }}>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <img src={missionImage} className={classes.kcImage} alt="mercy safe haven academy school wall in Kiganjo"/>
                </CardContent>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <FlagIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
                  <Typography variant="h5" component="div"  color="primary" sx={{fontWeight: 700, mb: 1.5}}>
                    Our Mission
                  </Typography>
                  <Typography sx={{ mb: 1.5, fontWeight: 400 }} color="secondary" variant="h6">
                    To provide the upmost in quality education and creative thinking in a nurturing and inclusive environment that challenges our students toward the achievement of their highest potential through the use of the 21st century technologies.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container sx={{ bgcolor: 'primary.dark', borderRadius: 2 }}>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <img src={visionImage} className={classes.kcImage} alt="mercy safe haven academy graduation in Kiganjo"/>
                </CardContent>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <DirectionsBusIcon color="iconColor" sx={{p:1, bgcolor:"#ffffff", borderRadius: 2}}/>
                  <Typography variant="h5" component="div"  color="primary" sx={{fontWeight: 700, mb: 1.5}}>
                    Our Values
                  </Typography>
                  <Typography sx={{ mb: 1.5, fontWeight: 400 }} color="secondary" variant="h6">
                    At Mercy Safe Haven Academy, our aproach to education enables, guides and facilitates a strong sense of community among people from all walks of life. Humility, respect and intergrity are important as Individual strengths and learning styles are actively affirmed in each classroom.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box sx={{ pt:15, px:3, pb:5}}>
          <Typography variant="h3" color="#36096B" sx={{fontWeight: 900, pb:4}}>Checkout our official Youtube Channel!</Typography>
        </Box>
      </Container>
      <Container maxWidth="md">
        <YoutubeEmbed embedId="8pNxzqx-77w" />
      </Container>
      <Container maxWidth="xl">
        <Box sx={{ pt:15, px:3, pb:5 }}>
          <Typography variant="h3" color="#36096B" sx={{fontWeight: 900, pb:2}}>School Gallery</Typography>
          <Typography variant="h6" color="primary" sx={{fontWeight: 400, pb:1}}>Over here we have a collection of wonderful memories here at MSHA!</Typography>
        </Box>
      </Container>
      <Container maxWidth="md">
        <ImageGallery />
      </Container>
    </Box>
  );
}

export default About;
